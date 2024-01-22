# Instrukcja Uruchomienia i Użycia Aplikacji "Wyznacznie GNR"

## Uruchomienie aplikacji na lokalnym hostingu
Aby uruchomić aplikację lokalnie przy użyciu środowiska programistycznego Visual Studio Code, postępuj zgodnie z poniższymi krokami:

### 1. Otwórz konsolę bash.
### 2. Wybierz folder z aplikacją a następnie wpisz polecenie: npm i w celu instlacji paczki node.
### 3. Następnie wpisz polecenie: npm run start.
### 4. Aplikacja zostanie uruchomiona pod adresem "http://localhost:3000/".

## Obsługa aplikacji

### Obliczanie Godziny Największego Ruchu Metodą TCBH

### 1. Umieść plik "czas.txt" w folderze "data" aplikacji:
 - Plik "czas" musi mieć rozszerzenie .txt.
 - Zawartość pliku to czasy trwania połączeń wyrażone w sekundach, zarejestrowane w ciągu jednej doby.
### 2. Przejdź do zakładki "WYKRES GNR":

 - Wybierz plik z danymi (rozszerzenie .xlsx) z miejsca na komputerze.
 - Plik xlsx powinien zawierać dwie kolumny danych: pierwsza kolumna to poszczególne minuty w ciągu doby, a druga kolumna to liczność wywołań zarejestrowanych w danej minucie.

### 3. Kliknij przycisk "Dodaj dane do wykresu" w zakładce "WYKRES GNR":

- Ten krok rozpocznie proces generowania wykresu z przesłanych plików.
 - Dane z pliku "czas" będą używane do wyznaczenia średniego czasu trwania połączenia.
 - Dane z pliku z rozszerzeniem xlsx zostaną użyte do stworzenia wykresu chwilowej intensywności wywołań.

### 4. Sprawdź wygenerowany wykres:

- Na wykresie będą naniesione wartości z obu plików, przedstawiające średni czas trwania połączenia i intensywność wywołań w poszczególnych minutach doby.

### Obliczanie godziny największego ruchu metodą ADPH na podstawie danych pięciu dób

### 1. Umieść w folderze "data" pięć plików z rozszerzeniem "dane(x).txt" z 1440 wartościami, pliki nazywaj kolejno:
 - dane1.txt
 - dane2.txt
 - dane3.txt
 - dane4.txt
 - dane5.txt
 
 ### 2. Program wygeneruje godziny szczytu z pięciu plików, w których wartości natężenia ruchu są największe.