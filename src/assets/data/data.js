const data = [
  {
    id: 1,
    image: new URL("../../../public/notfound.png", import.meta.url).href,
    title: "TCHB (Time-of-Day Call Handling Busy-hour)",
    text: "Ta metoda koncentruje się na określeniu godzin największego ruchu w sieci telekomunikacyjnej, zwłaszcza w kontekście obsługi połączeń głosowych. Analiza ruchu w różnych godzinach pozwala na optymalizację zasobów sieciowych.",
  },
  {
    id: 2,
    image: new URL("../../../public/notfound.png", import.meta.url).href,
    title: "ADPH (Average Daily Peak Hour)",
    text: "Ta metoda opiera się na obliczeniu średniej dziennej godziny szczytu, czyli średniej godzinie, w której zachodzi największe obciążenie w ciągu dnia. Jest to przydatne w planowaniu i zarządzaniu zasobami sieci w określonych godzinach.",
  },
  {
    id: 3,
    image: new URL("../../../public/notfound.png", import.meta.url).href,
    title: "FDMP (Fixed Daily Minute Period)",
    text: "Metoda ta koncentruje się na określeniu stałego minutowego okresu w ciągu dnia, w którym występuje największe obciążenie sieci. Pozwala to dostosować zasoby do konkretnych wymagań w określonym czasie.",
  },
  {
    id: 4,
    image: new URL("../../../public/notfound.png", import.meta.url).href,
    title: "EDMH (Estimated Daily Maximum Hour)",
    text: "Pomiar polega na szacowaniu maksymalnej godziny w ciągu dnia, w której spodziewane jest największe obciążenie sieci. Oparta jest na prognozach i danych historycznych dotyczących ruchu w sieci.",
  },
];
export default data;
