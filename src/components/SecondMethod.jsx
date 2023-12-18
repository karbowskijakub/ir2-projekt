import React, { useState, useEffect } from 'react';
import textfile1 from '../assets/data-second-method/dane1.txt';
import textfile2 from '../assets/data-second-method/dane2.txt';
import textfile3 from '../assets/data-second-method/dane3.txt';
import textfile4 from '../assets/data-second-method/dane4.txt';
import textfile5 from '../assets/data-second-method/dane5.txt';

const SecondMethod = () => {
  const [averages, setAverages] = useState([]);
  const [topValueRanges, setTopValueRanges] = useState([]);
  const [commonRange, setCommonRange] = useState('');

  useEffect(() => {
    // Funkcja do wczytywania plików tekstowych
    const readFile = async (file) => {
      const response = await fetch(file);
      const data = await response.text();
      return data;
    };

    // Funkcja do obliczania średniej wartości dla danego pliku
    const calculateAverage = (values) => {
      const sum = values.reduce((acc, val) => acc + val, 0);
      const average = values.length > 0 ? sum / values.length : 0;
      return average.toFixed(8);
    };

    // Funkcja do znalezienia zakresu indeksowego 60 największych wartości
    const findTopValuesRange = (values) => {
      let maxAverage = 0;
      let currentAverage = 0;
      let startIndex = 0;
      let endIndex = 0;

      for (let i = 0; i < values.length - 60; i++) {
        const currentValues = values.slice(i, i + 60);
        currentAverage = parseFloat(calculateAverage(currentValues));

        if (currentAverage > maxAverage) {
          maxAverage = currentAverage;
          startIndex = i;
          endIndex = i + 60 - 1;
        }
      }

      return { startIndex, endIndex };
    };

    // Tablica plików do przetworzenia
    const files = [textfile1, textfile2, textfile3, textfile4, textfile5];

    // Przetwarzanie plików
    const processFiles = async () => {
      const promises = files.map(async (file) => {
        const data = (await readFile(file)).split('\n').map(Number).filter((value) => !isNaN(value));
        const { startIndex, endIndex } = findTopValuesRange(data);
        const average = calculateAverage(data.slice(startIndex, endIndex + 1));
        return { average, startIndex, endIndex };
      });

      const results = await Promise.all(promises);
      setAverages(results.map((result) => result.average));
      setTopValueRanges(results.map((result) => ({ startIndex: result.startIndex, endIndex: result.endIndex })));

      // Znalezienie wspólnej części zakresów indeksowych
      const commonStartIndex = Math.max(...results.map((result) => result.startIndex));
      const commonEndIndex = Math.min(...results.map((result) => result.endIndex));
      setCommonRange(`Część wspólna z godzin posiadających największe natężenie ruchu w ciągu doby: ${commonStartIndex} - ${commonEndIndex}`);
    };

    processFiles();
  }, []);

  return (
    <div className='bg-tetnary rounded p-5 text-white mt-8'>
      <h1 className='font-bold'>Obliczanie godziny największego ruchu w ciągu doby metodą ADPH na podstawie danych pięciu dób.</h1>
      <h2 className='font-bold mt-3'>Godziny z największą średnią wartości:</h2>
      {averages.map((average, index) => (
        <div className='mt-5' key={index}>
       
          <p>{`Zakres godziny o największym ruchu z pliku numer ${index+1} : ${topValueRanges[index].startIndex} - ${topValueRanges[index].endIndex}`}</p>
        </div>
      ))}
      <p className='mt-5 font-bold'>{commonRange}</p>
    </div>
  );
};

export default SecondMethod;