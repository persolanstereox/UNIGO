## Frontend Installation



```bash
npm install
```
## Frontend Running app



```bash
npm run dev
```
# UNIGO

Platforma ułatwiająca proces rekrutacji na studia. Pomaga w doborze odpowiedniego kierunku w oparciu o zainteresowania użytkownika oraz standaryzuje proces zapisywania się na studia.

## Prawa autorskie

Autorzy:

- Cornelis Puchowicz
- Łukasz Pisarczyk
- Piotr Jemielita

Warunki licencyjne do oprogramowania wytworzonego przez grupę: **Licencja wyłącznej własności**

## Technologie
- Java 20
- Spring (Boot, Data)
- Hibernate
- React
- Next.js
- MongoDB
- Tailwind

## Specyfikacja wymagań

- Identyfikator
- Nazwa
- Opis
- Priorytet (1 – wymagane, 2 – przydatne, 3 – opcjonalne)

### Wymaganie funkcjonalne

1. **Wyszukiwanie kierunków**
   - Opis: Funkcja pozwala użytkownikowi na wyszukiwanie kierunków wraz z uczelnią na podstawie danych wpisanych do formularza.
   - Priorytet: 1
2. **Dopasowanie profilu studiów**
   - Opis: Funkcja dopasowuje dany kierunek do danych podanych przez użytkownika w formularzu w wyniku % poprzez algorytm.
   - Priorytet: 1
3. **Przejście na stronę uczelni**
   - Opis: Po wyświetleniu przykładowych rezultatów kierunków użytkownik ma możliwość przejścia na stronę uczelni za pomocą jednego kliknięcia.
   - Priorytet: 1
4. **Stworzenie profilu użytkownika**
   - Opis: Użytkownik ma możliwość założenia profilu, na którym będzie miał możliwość zapisania swoich preferencji zawartych w formularzu.
   - Priorytet: 3

### Wymagania niefunkcjonalne

1. **Kompatybilność**
   - Opis: Użytkownik ma możliwość korzystania z aplikacji zarówno na telefonie jak i komputerze. Aplikacja powinna być responsywna.
   - Priorytet: 2
2. **Skalowalność aplikacji**
   - Opis: Wraz ze wzrostem liczby użytkowników i wymagań oprogramowania aplikacja powinna wprowadzać nowe funkcjonalności.
   - Priorytet: 1
3. **Dostępność**
   - Opis: Aplikacja powinna posiadać motyw powiększonego kontrastu, aby osoby niedowidzące miały możliwość korzystania z aplikacji.
   - Priorytet: 3
