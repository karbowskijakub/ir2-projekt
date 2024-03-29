import React, { useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import "chart.js/auto";
import * as XLSX from "xlsx";
import textfile from "../assets/data/czas.txt";
import SecondMethod from "./SecondMethod";

// Komponent Chart
const Chart = () => {
  // Stan przechowujący dane do wykresu
  const [data, setData] = useState([]);
  // Stan przechowujący dane do przekazania do komponentu Scatter Chart
  const [chartData, setChartData] = useState(null);
  // Stan przechowujący dane wczytane z pliku
  const [uploadedData, setUploadedData] = useState([]);
  // Stan przechowujący tekst z pliku czas.txt
  const [text, setText] = useState();
  // Stan przechowujący średnią wartość z pliku czas.txt
  const [average, setAverage] = useState(null);

  // Obsługa wczytywania pliku
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileData = event.target.result;
        const workbook = XLSX.read(fileData, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const uploadedData = Array.from({ length: 1440 }, () => 0);

        parsedData.forEach(([index, value]) => {
          if (index >= 1 && index <= 1440) {
            uploadedData[index - 1] = value;
          }
        });

        setUploadedData(uploadedData);
      };

      reader.readAsBinaryString(file);
    }
  };

  // Efekt uruchamiany po wczytaniu danych z pliku
  useEffect(() => {
    if (data.length > 0 && average !== null) {
      // Mnożenie danych przez średnią wartość
      const multipliedData = data.map((value) => value * average);
      // Obliczanie danych dla linii reprezentującej najwyższą średnią ruchu
      const maxAvgData = calculateMaxAvgData(multipliedData);

      // Ustalanie maksymalnej wartości na osi Y dla wykresu
      const maxYScale = Math.max(...multipliedData) + 0.001;

      // Aktualizacja danych do wykresu
      const updatedChartData = {
        labels: Array.from({ length: multipliedData.length }, (_, i) => i + 1),
        datasets: [
          {
            label: "Natężenie ruchu",
            data: multipliedData.map((value, index) => ({
              x: index,
              y: value,
            })),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            showLine: false,
            pointRadius: 2,
          },
          {
            label: "Najwyższa średnia ruchu",
            data: maxAvgData,
            borderColor: "rgba(237, 28, 36, 1)",
            backgroundColor: "#ED1C24",
            showLine: false,
            pointRadius: 2,
          },
        ],
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: 1440,
          },
          y: {
            type: "linear",
            min: 0,
            max: maxYScale,
          },
        },
      };

      setChartData(updatedChartData);
    }
  }, [data, average]);

  // Funkcja obliczająca dane dla najwyższej średniej ruchu
  const calculateMaxAvgData = (data) => {
    let maxAvg = -1;
    let startIndex = 0;

    for (let i = 0; i < 24; i++) {
      const startIndexGroup = i * 60;
      const avgGroup =
        data
          .slice(startIndexGroup, startIndexGroup + 60)
          .reduce((acc, val) => acc + val, 0) / 60;
      if (avgGroup > maxAvg) {
        maxAvg = avgGroup;
        startIndex = startIndexGroup;
      }
    }

    return data.slice(startIndex, startIndex + 60).map((value, index) => ({
      x: startIndex + index,
      y: value,
    }));
  };

  // Aktualizacja danych do wykresu po wczytaniu pliku
  const updateChartWithUploadedData = () => {
    if (uploadedData.length > 0) {
      const updatedData = [...data, ...uploadedData];
      setData(updatedData);
    }
  };

  // Efekt wczytujący tekst z pliku czas.txt
  useEffect(() => {
    fetch(textfile)
      .then((response) => response.text())
      .then((textContent) => {
        setText(textContent);
      });
  }, []);

  // Efekt obliczający średnią z tekstu wczytanego z pliku czas.txt
  useEffect(() => {
    if (text !== undefined) {
      const numbers = text
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter((num) => !isNaN(num));

      if (numbers.length > 0) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const avg = sum / numbers.length;
        setAverage(avg);
      }
    }
  }, [text]);

  // Renderowanie komponentu Chart
  return (
    <div className="p-10 mt-28 flex justify-center items-center flex-col">
      <div className="mb-10 font-bold text-lg ">
        <h1 className="text-4xl">
          Obliczanie godziny największego ruchu w ciągu doby metodą TCBH
        </h1>
        <p>Natężenie ruchu w skali od 0 do 0.45 ciągu doby w minutach:</p>
      </div>
      {chartData && (
        <div style={{ minWidth: "800px", margin: "0 auto" }}>
          <Scatter data={chartData} />
          <div className="bg-tetnary rounded p-1 text-white">
            <div className="p-3 font-bold text-lg">
              {`${chartData.datasets[1].label}: ${
                chartData.datasets[1].data[0].x + 1
              } - ${chartData.datasets[1].data[59].x + 1}`}
            </div>
            {text !== null && average !== null && (
              <div className="font-bold text-lg p-3">
                {`Średnia z pliku czas.txt: ${average.toFixed(2)}`}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="mt-5">
        <input type="file" accept=".xlsx" onChange={handleFileUpload} />
        <button onClick={updateChartWithUploadedData} className="btn-primary">
          Dodaj dane do wykresu
        </button>
      </div>
      <SecondMethod />
    </div>
  );
};

export default Chart;
