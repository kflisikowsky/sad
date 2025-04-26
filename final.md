# Projekt końcowy

## Wprowadzenie

W końcowym projekcie Twoim zadaniem będzie wykorzystanie **umiejętności** nabytych na tych zajęciach do *eksploracyjnej analizy danych* dotyczącej rzeczywistego zestawu danych (lub zestawów danych).

Będziesz pracować w małej grupie (2-3 osoby). Gorąco zachęcam do kontaktu, aby uzyskać informacje zwrotne na temat swoich pomysłów.

## Ocenianie i rezultaty

Końcowym rezultatem (tym, co oddasz) będzie link do REPO na GitHubie, w którym Twój zespół umieści wszystkie pliki projektu: 

- notatnik Jupyter z następującymi sekcjami (patrz tabela poniżej); każda sekcja jest warta określoną liczbę punktów, sumując do 20; **minimalna** liczba punktów, aby zaliczyć projekt to 10 (patrz [skala ocen](syllabus.md#skala-ocen)).
- dane (np. pliki CSV).
- dodatkowe pliki, mile widziane opublikowane estetycznie raporty EDA w formacie Markdown (MD, HTML, PDF itp.).

> Po przesłaniu finalnej wersji projektu, każda grupa projektowa zobowiązana jest do umówienia się na krótkie **spotkanie online** ze mną w celu jego omówienia. Spotkanie ma na celu potwierdzenie samodzielności wykonania pracy oraz umożliwia zadanie ewentualnych pytań dotyczących przeprowadzonej analizy.


| Sekcja | Punkty | Opis | Przykład |
| :---------------: | :----: | :----------: | :--------: |
| Wprowadzenie | 2 | Na jaki zbiór danych patrzysz? Gdzie/jak został utworzony? Jakie pytania będą zadawane? | Zbiór danych dotyczący cen nieruchomości w Polsce - ceny i charakterystyka nieruchomości (liczba pokoi, piętro, miasto, wyposazenie, itp.)|
| Czyszczenie i porządkowanie danych | 4 | Diagnostyka danych; braki - wizualizacja, omówienie, wzorzec, błędy w danych i ich naprawa, imputacja braków, obserwacje odstające - analiza. | Shadowmapy, heatmapy braków, omówienie wzorca, strategii imputacji braków, określenie reguł dla danych, wizualizacja naruszeń, naprawa, analiza obserwacji odstających z omówieniem. |
| Wizualizacje | 4 | 4-5 wykresów przedstawiających określone wzorce lub cechy, które chcesz podkreślić. Każdej wizualizacji powinien towarzyszyć krótki (1-2 zdania) opis tego, co według Ciebie pokazuje. | Boxplot pokazujący **ceny** nieruchomości *według miast* lub innych charakterystyk - przekroje. Wykres słupkowy pokazujący proporcję mieszkań **o róznym standardzie wykończenia**. |
| Analiza opisowa | 4 | 2-3 analizy opisowe, odnoszące się do pytania badawczego (pytań). Każdej analizie powinna towarzyszyć krótka (1-3 zdania) *interpretacja*. | Tabele statystyk opisowych - np. statystyki cen mieszkań wg róznych charakterystyk. Dobrze by było, aby otoczone były wizualizacjami na ten sam temat przewodni. Analiza korelacji - macierz korelacji (liniowych). Analiza korelacji innego typu (rangowa, jakościowa) - jeśli są tego typu zmienne. Heatmapy. |
| Wnioskowanie statystyczne | 4 | Odnoszące się do pytań badawczych testy statystyczne (w tabeli lub na wizualizacjach) odpowiednie do załozeń, danych. | Np. testy t-Studenta, Anova lub ich zamienniki nieparametryczne badające róznice między średnimi cenami dla nieruchomości z i bez balkonu; z i bez windy; w 2 róznych miastach; wg czynnika - zmiennej grupującej np. ceny według piętra, standardu, liczby pokoi itp. |
| Wnioski | 2 | Wyciągnięcie wniosków na temat zbioru danych i postawionych pytań. | Mile widziane ogólne podsumowanie, wnioski końcowe, ograniczenia dot. metod, propozycje na ciąg dalszy (modelowanie), itp. |


### Przykładowe zbiory danych

Istnieją dwa krytyczne wymagania dotyczące zestawu danych:

1. Po pierwsze, powinien on zawierać **główną zmienną zależną** - badaną, analizowaną. Jeśli nie masz pewności, czy dany zestaw danych się kwalifikuje, możesz mnie zapytać.  
2. Po drugie, powinien zawierać co najmniej **3-4 zmienne** (ale najlepiej więcej). Nie chciałbym, aby analizowana była tylko jedna zmienna. Idealnie byłoby, gdyby wzięto pod uwagę związek wielu zmiennych (np. w końcu to **analiza przekrojowa, eksploracyjna**). 

Mając to na uwadze, oto kilka pomysłów na **odpowiednie zestawy danych**. Możesz skorzystać z jednego z nich (i zadać pytania, które uważasz za interesujące), ale możesz też znaleźć własny; te zestawy danych zostały **zweryfikowane** nieco bardziej.

| Zbiór danych | Dziedzina | Opis | Dostęp |
| :------: | :----: | :----------: | :-------: |
| World Bank Open Data | Ekonomia | Zawiera dane szeregów czasowych dla **wielu dziedzin**, takich jak rozwój rolnictwa, ubóstwo na obszarach wiejskich, emisje dwutlenku węgla i wiele, wiele innych. | [Link do banku danych](https://data.worldbank.org/); można przeglądać według „wskaźnika”; może wymagać połączenia zbiorów danych w celu uzyskania większej ilości informacji. |
| [World Happiness Report](https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021) | Ekonomia | Zbiór danych o globalnych wynikach szczęścia; może wymagać połączenia z innymi zbiorami danych, aby zadać przydatne pytania. | [Kaggle](https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021)|
| Zużycie energii na świecie | Energetyka | Zawiera dane szeregów czasowych o zużyciu **energii** i **energii elektrycznej**. | [Link na Kaggle](https://www.kaggle.com/datasets/pralabhpoudel/world-energy-consumption) |
| SCARFS (Spontaniczne, kontrolowane akty odniesienia między przyjaciółmi i nieznajomymi) | Lingwistyka | Dane o przyjaciołach i nieznajomych grających w grę **Taboo**, które wskazówki dali i czy próba została przeprowadzona. | [Link do GitHub](https://github.com/seantrott/scarfs) |
| [California Housing Prices](https://www.kaggle.com/datasets/camnugent/california-housing-prices) | Ekonomia | Informacje o medianie wartości domów dla różnych dzielnic w Kalifornii. | [Link na Kaggle](https://www.kaggle.com/datasets/camnugent/california-housing-prices). |
| [Spożycie alkoholu przez studentów](https://www.kaggle.com/datasets/uciml/student-alcohol-consumption?select=student-por.csv) | Zdrowie publiczne | Informacje o zachowaniu uczniów, w tym spożyciu alkoholu i nie tylko. | [Link na Kaggle](https://www.kaggle.com/datasets/uciml/student-alcohol-consumption?select=student-por.csv). |
| [Zbiory danych dla projektów z SAD](https://github.com/kflisikowsky/analiza_danych_projekt_zespolowy) | Rózne tematy | Zbiory danych przeznaczone dla projektów zespołowych na Analityce. Wiele zbiorów, rózniących się poziomem trudności, wraz z opisami. | [Link do mojego GitHuba](https://github.com/kflisikowsky/analiza_danych_projekt_zespolowy) |

### Trudność projektu

Należy pamiętać, że pod uwagę zostanie wzięty również poziom **trudności** analiz związanych z projektem, zwłaszcza na etapie **danych** (np. czyszczenie danych, łączenie wielu zestawów danych). 

Znalezienie i połączenie wielu zestawów danych nie jest *konieczne* - tzn. można uzyskać pełne punkty bez tego - ale jeśli pomyślnie wyczyścisz i połączysz wiele zestawów danych, może to „zrównoważyć” niższe wyniki w innej sekcji (np. **Wizualizacja**); czyli możesz myśleć o tym jako o rodzaju nieoficjalnego dodatkowego kredytu.

Oto kilka przykładów rzeczy, które, choć nie są konieczne, uczyniłyby twój projekt trudniejszym, a tym samym bardziej imponującym:

- **Łączenie** wielu zestawów danych, które znajdziesz, aby wykorzystać powiązanie danych.  
- Niestandardowe **pakiety i funkcje** wykorzystane w analizie danych. Mozesz pokazać, jak dany problem rozwiązuje się za pomocą alternatywnych funkcji z mniej popularnych / bardziej wyrafinowanych pakietów.
- **Połączenie** opisu i testowania z wizualizacjami - np. labelki średnich, mediany, kwartyli lub wyników testu statystycznego na tle boxplotów, przeźroczystych histogramów, wykresów gęstości itp.

