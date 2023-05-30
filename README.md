# UNIGO

Platforma ułatwiająca proces rekrutacji na studia. Pomaga w doborze odpowiedniego kierunku w oparciu o zainteresowania użytkownika oraz standaryzuje proces zapisywania się na studia.

## Prawa autorskie

Autorzy:

- Cornelis Puchowicz
- Łukasz Pisarczyk
- Piotr Jemielita

Warunki licencyjne do oprogramowania wytworzonego przez grupę: **Licencja wyłącznej własności**

## URUCHAMIANIE PROJEKTU

**Aby uruchomić ten projekt, konieczne jest otwarcie klienta i serwera osobno.**

### Backend
1. Otwórz swoje IDE (np. IntelliJ) i zaimportuj folder backend jako projekt.
2. Upewnij się, że masz zainstalowaną Javę w wersji 20 oraz narzędzie Maven.
3. Uruchom aplikację, otwierając plik `src/main/java/ug/unigo/UniGo/UniGoApplication.java`.

### Frontend
1. Otwórz folder frontend w swoim edytorze (np. Visual Studio Code).
2. Otwórz terminal w swoim edytorze i wykonaj następujące polecenia:

```bash
cd frontend
npm install
```

```bash
npm run dev
```
3. Otwórz http://localhost:3000/ w swojej przeglądarce


### Mockup

Demo aplikacji dostępne: https://www.figma.com/file/DXO6YIiAWThnNwzyFiJRuG/Unigo?type=design&t=ynhpIGtk8nhZ6rBp-1

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
