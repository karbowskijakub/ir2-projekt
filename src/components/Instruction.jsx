import React from "react";

const Instruction = () => {
  return (
    <div className="w-full h-screen mt-10 flex justify-center">
      <div className=" bg-tetnary w-1/2 h-full  rounded  flex justify-start flex-col p-10">
        <div className="my-10">
          <h1 className="text-white uppercase text-center text-5xl ">
            Instrukcja obsługi aplikacji
          </h1>
        </div>

        <div>
          {" "}
          <h2 className="mb-5 font-bold text-2xl text-white">
            Uruchomienie aplikacji na adresie lokalnym hosta
          </h2>
          <ol className="text-xl text-white">
            <li className="my-5">
              <p className="font-bold">
                Uruchom aplikacje w środowisku programistycznym Visual Studio
                Code:
              </p>
              <ul>
                <li>1. Odpal konsolę bash</li>
                <li>2. Wpisz polecenie: "npm i"</li>
                <li>3. Wpisz polecenie: "npm run start"</li>
                <li>
                  4. Na adresie "http://localhost:3000/" zostanie odpalona
                  aplikacja
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="text-white text-xl">
          <h2 className="mb-5 font-bold text-2xl">
            Obliczanie godziny największego ruchu metodą TCBH
          </h2>
          <ol>
            <li className="my-5">
              <p className="font-bold">
                1. Umieść plik "czas.txt" w folderze "data" aplikacji:
              </p>
              <ul>
                <li>Plik "czas" musi mieć rozszerzenie .txt.</li>
                <li>
                  Zawartość pliku to czasy trwania połączeń wyrażone w
                  sekundach, zarejestrowane w ciągu jednej doby.
                </li>
              </ul>
            </li>

            <li className="my-5">
              <p className="font-bold">2. Przejdź do zakładki "WYKRES GNR":</p>
              <ul>
                <li>
                  Wybierz plik z danymi (rozszerzenie .xlsx) z miejsca na
                  komputerze.
                </li>
                <li>
                  Plik xlsx powinien zawierać dwie kolumny danych: pierwsza
                  kolumna to poszczególne minuty w ciągu doby, a druga kolumna
                  to liczność wywołań zarejestrowanych w danej minucie.
                </li>
              </ul>
            </li>

            <li className="my-5">
              <p className="font-bold">
                3. Kliknij przycisk "Dodaj dane do wykresu" w zakładce "WYKRES
                GNR":
              </p>
              <ul>
                <li>
                  Ten krok rozpocznie proces generowania wykresu z przesłanych
                  plików.
                </li>
                <li>
                  Dane z pliku "czas" będą używane do wyznaczenia średniego
                  czasu trwania połączenia.
                </li>
                <li>
                  Dane z pliku z rozszerzeniem xlsx zostaną użyte do stworzenia
                  wykresu chwilowej intensywności wywołań.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-bold">4. Sprawdź wygenerowany wykres:</p>
              <ul>
                <li>
                  Na wykresie będą naniesione wartości z obu plików,
                  przedstawiające średni czas trwania połączenia i intensywność
                  wywołań w poszczególnych minutach doby.
                </li>
              </ul>
            </li>
          </ol>
          <h2 className="my-5 font-bold text-2xl">
            Obliczanie godziny największego ruchu w ciągu doby metodą ADPH na
            podstawie danych pięciu dób
          </h2>

          <ol>
            <li>
              <p className="font-bold">
                1. Umieść w folderze data pięć plików z rozszerzeniem
                dane(x).txt z 1440 wartościami, pliki nazywaj kolejno:
              </p>
              <ul className="my-5">
                <li>dane1.txt</li>
                <li>dane2.txt</li>
                <li>dane3.txt</li>
                <li>dane4.txt</li>
                <li>dane5.txt</li>
              </ul>
            </li>

            <li>
              <p className="font-bold">
                2. Program wygeneruje godziny szczytu z pięciu plików, w których
                wartości natężenia ruchu są największe.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
