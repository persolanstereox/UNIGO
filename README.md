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

## Changelog
| Commit                                | Opis                                                                      |
| ------------------------------------- | ----------------------------------------------------------------------- |
| Initial commit                        | Inicjalizacja aplikacji klienta w React i Next.js                        |
| First homepage                        | Implementacja mockupu w Frontendzie                                      |
| Working with form                      | Dodanie formularza do wyszukiwania kierunków studiów                      |
| Project file refactoring              | Dodanie plików warstwy Backend w Springu oraz przeniesienie plików Frontend do nowego folderu |
| Added mongoDB connection               | Dodanie logowania do bazy danych                                         |
| Implemented CRUD operations for UniversityItem | Dodanie operacji tworzenia, wyszukiwania, aktualizowania oraz usuwania dla obiektu kierunku w bazie danych |
| Added validation to model, added tests to validation | Testy modelu UniversityItem oraz sprawdzenie walidacji przy tworzeniu nowego obiektu |
| Implemented tests for getByID and delete methods from repository | Testy funkcji wyszukiwania po Id oraz metody usuwania obiektu z bazy danych |
| Implemented method for filtering universities by cities, title, and interests | Zaimplementowanie algorytmu służącego do filtrowania kierunków studiów na podstawie danych wpisanych do formularza |
| Implementing Security and JWT          | Dodanie autoryzacji, tylko admin może korzystać z metod Create, Update i Delete |
| Added cors configurer                  | Konfiguracja CORS do komunikacji Frontendu z Backendem                   |
| Refactoring axios fetch function and form data states | Użycie biblioteki Axios do pobierania danych z backendu |
| Responsive design                      | Dodanie responsywności strony |

## Opis technologii
- Spring Boot: framework do tworzenia aplikacji w języku Java. Ułatwia konfigurację i rozwój aplikacji, zapewniając domyślne ustawienia i automatyczną konfigurację wielu aspektów.
- Spring Data: projekt w ramach rodziny Spring, który ułatwia integrację aplikacji z różnymi źródłami danych, takimi jak relacyjne bazy danych, NoSQL czy usługi REST.
- Spring Security: framework do zarządzania bezpieczeństwem aplikacji w środowisku Spring. Zapewnia mechanizmy uwierzytelniania, autoryzacji i zarządzania sesjami.
- JWT (JSON Web Token): standardowy format tokenów bezpieczeństwa wykorzystywany do uwierzytelniania i przekazywania informacji o użytkowniku między stroną frontendową a serwerem backendowym.
- Maven: narzędzie do zarządzania projektem w języku Java. Umożliwia łatwe zarządzanie zależnościami, budowanie projektu, testowanie i wdrażanie aplikacji.
- JUnit: framework do testowania jednostkowego w języku Java. Umożliwia tworzenie testów jednostkowych, automatyzację testowania i weryfikację poprawności działania kodu.
- Hibernate: framework do mapowania obiektowo-relacyjnego (ORM) w języku Java. Ułatwia interakcję z bazami danych poprzez mapowanie obiektów Java na struktury tabel w bazie danych.
- React: popularna biblioteka JavaScript do tworzenia interfejsów użytkownika. Umożliwia budowanie dynamicznych i interaktywnych aplikacji internetowych.
- Next.js: ramework dla React, który umożliwia renderowanie strony po stronie serwera (SSR) oraz generowanie stron statycznych. Zapewnia lepszą wydajność i optymalizację dla aplikacji React.
- MongoDB: nierelacyjna baza danych, która używa dokumentów w formacie JSON. Jest elastyczna, skalowalna i zapewnia wysoką wydajność w obszarze przechowywania danych.
- Tailwind: biblioteka CSS, która oferuje gotowe komponenty i narzędzia do tworzenia interfejsów użytkownika. Umożliwia szybkie tworzenie stylów i responsywnych układów.
- Axios: JavaScript do wykonywania zapytań sieciowych (HTTP) w przeglądarce lub środowisku Node.js. Umożliwia łatwe wykonywanie żądań API i manipulację danymi HTTP.

## Opis struktury projektu
- Moduł config
   - Encoder:
     Klasa Encoder zawiera metodę passwordEncoder(), która tworzy i zwraca instancję PasswordEncoder. Jest to bean Springa, który wykorzystuje algorytm BCryptPasswordEncoder do kodowania haseł.
   - JwtAuthenticationFilter:
      Klasa JwtAuthenticationFilter rozszerza klasę OncePerRequestFilter i służy do filtrowania i weryfikacji tokenów JWT przesyłanych w nagłówku żądania. Przetwarza żądania HTTP i sprawdza poprawność tokenów, a następnie ustawia uwierzytelnienie dla użytkownika w SecurityContextHolder.
   - JwtTokenUtil:
      Klasa JwtTokenUtil dostarcza metody do generowania tokenów JWT (access token i refresh token), walidacji tokenów oraz pobierania nazwy użytkownika z tokena. Wykorzystuje algorytm HMAC512 do podpisywania tokenów i uwzględnia określony czas ważności tokenów.
   - SecurityConfig:
      Klasa SecurityConfig konfiguruje ustawienia zabezpieczeń aplikacji. Używa JwtAuthenticationFilter do uwierzytelniania użytkowników na podstawie tokenów JWT. Definiuje reguły dostępu dla różnych ścieżek URL w aplikacji, takie jak wymagane uprawnienia dla poszczególnych żądań HTTP. Ponadto, korzysta z dostarczonego UserService i PasswordEncoder do konfiguracji menedżera uwierzytelniania.
- Moduł model
   - SearchData:
Klasa SearchData reprezentuje dane wyszukiwania. Posiada pola takie jak cities (lista nazw miast), title (tytuł) i interests (lista zainteresowań). Wykorzystuje adnotacje jak @NotEmpty do określania wymaganych pól.
   - SearchItem:
Klasa SearchItem reprezentuje element wyszukiwania. Posiada pola takie jak id (identyfikator), name (nazwa) i type (typ). Wykorzystuje adnotacje jak @Getter i @Setter do generowania getterów i setterów.
   - UniversityItem:
Klasa UniversityItem reprezentuje obiekt reprezentujący element uniwersytetu. Zawiera pola takie jak id (identyfikator), university (nazwa uniwersytetu), city (miasto), faculty (wydział), fieldOfStudy (kierunek studiów), title (tytuł), website (strona internetowa), interests (lista zainteresowań) i logoURL (adres URL logotypu). Wykorzystuje adnotacje jak @Data do generowania getterów, setterów i innych metod pomocniczych, a także adnotacje jak @NotEmpty i @URL do określania wymagań dotyczących pól.
   - UniversityItemDto:
Klasa UniversityItemDto to rekord (record) reprezentujący uproszczony obiekt UniversityItem, który jest wykorzystywany przy filtrowaniu i sortowaniu obiektów. Posiada pola takie jak id (identyfikator), university (nazwa uniwersytetu), city (miasto), faculty (wydział), fieldOfStudy (kierunek studiów), title (tytuł), website (strona internetowa), logoURL (adres URL logotypu) i matchingInterests (liczba dopasowanych zainteresowań).
   - User:
Klasa User reprezentuje użytkownika. Zawiera pola takie jak id (identyfikator), username (nazwa użytkownika), password (hasło) i roles (lista ról użytkownika). Wykorzystuje adnotacje jak @Document i @MongoId do mapowania na kolekcję w bazie danych MongoDB, a także adnotacje jak @JsonIgnore do ignorowania pola password przy serializacji.
   - UserLoginDto:
Klasa UserLoginDto to obiekt DTO reprezentujący dane logowania użytkownika. Posiada pola username (nazwa użytkownika) i password (hasło).
   - UserRegistrationDto:
Klasa UserRegistrationDto to obiekt DTO reprezentujący dane rejestracji użytkownika. Posiada pola username (nazwa użytkownika) i password (hasło).
- Moduł repository
   - ItemRepository:
Interfejs ItemRepository rozszerza interfejs CrudRepository, który jest częścią Spring Data i dostarcza podstawowe operacje CRUD (Create, Read, Update, Delete) dla encji UniversityItem. Interfejs ten jest generyczny, gdzie pierwszy parametr to typ encji (UniversityItem), a drugi parametr to typ identyfikatora (String). Dzięki temu repozytorium umożliwia wykonywanie operacji na obiektach typu UniversityItem w bazie danych.
   - UserRepository:
Interfejs UserRepository rozszerza interfejs MongoRepository, który jest częścią Spring Data MongoDB. Repozytorium to obsługuje operacje na obiektach typu User w bazie danych MongoDB. Metoda findByUsername(String username) pozwala na wyszukiwanie użytkownika na podstawie nazwy użytkownika (username).
- Moduł controller
   - AuthController:
Klasa AuthController obsługuje żądania dotyczące uwierzytelniania i rejestracji użytkowników. Jest oznaczona adnotacją @RestController i ma ustawiony endpoint na "/auth". Posiada dwa punkty końcowe:
      - login(): Przyjmuje żądanie logowania (UserLoginDto) i wywołuje odpowiednią usługę (AuthService) do uwierzytelniania użytkownika. Zwraca mapę zawierającą tokeny JWT w ciele odpowiedzi.
      - refresh(): Przyjmuje żądanie odświeżenia tokena JWT (Refresh token) i wywołuje odpowiednią usługę (AuthService) do odświeżenia tokena. Zwraca mapę zawierającą nowe tokeny JWT w ciele odpowiedzi.
   - UniversityController:
Klasa UniversityController obsługuje żądania dotyczące operacji na obiektach UniversityItem. Jest oznaczona adnotacją @RestController i ma ustawiony endpoint na "/api". Posiada różne punkty końcowe, w tym:
      - getAllUniversityItems(): Zwraca listę wszystkich dostępnych obiektów UniversityItem.
      - getUniversityItemById(): Przyjmuje identyfikator UniversityItem jako ścieżkę i zwraca obiekt UniversityItem o podanym identyfikatorze.
      - filterUniversities(): Przyjmuje obiekt SearchData jako żądanie i filtruje obiekty UniversityItem na podstawie tych danych.
      - createUniversityItem(): Przyjmuje obiekt UniversityItem jako żądanie i tworzy nowy obiekt UniversityItem.
      - deleteUniversityItem(): Przyjmuje identyfikator UniversityItem jako ścieżkę i usuwa obiekt UniversityItem o podanym identyfikatorze.
      - editUniversityItem(): Przyjmuje identyfikator UniversityItem jako ścieżkę i obiekt UniversityItem jako żądanie, a następnie edytuje obiekt UniversityItem o podanym identyfikatorze.
      - getAllCities(): Zwraca listę wszystkich dostępnych miast.
      - getAllInterests(): Zwraca listę wszystkich dostępnych zainteresowań.
- Moduł service
   - AuthService:
Klasa AuthService obsługuje operacje związane z uwierzytelnianiem i tokenami JWT. Jest oznaczona adnotacją @Service. Przyjmuje wstrzykiwane zależności takie jak AuthenticationManager, UserService i JwtTokenUtil. Główne metody to:
      - login(): Przyjmuje żądanie logowania (UserLoginDto) i uwierzytelnia użytkownika za pomocą AuthenticationManager. Następnie generuje tokeny JWT za pomocą JwtTokenUtil i zwraca je w postaci mapy.
      - refreshToken(): Przyjmuje token odświeżania (refresh token) i sprawdza jego ważność za pomocą JwtTokenUtil. Jeśli token jest ważny, generuje nowy token dostępowy (access token) i zwraca go w postaci mapy.
   - ItemService:
Klasa ItemService obsługuje operacje na obiektach UniversityItem (odpowiednik produktów w sklepie). Jest oznaczona adnotacją @Service. Przyjmuje wstrzykiwane zależności takie jak ItemRepository i MongoTemplate. Główne metody to:
      - getItemById(): Pobiera obiekt UniversityItem na podstawie podanego identyfikatora.
      - filterItems(): Filtruje obiekty UniversityItem na podstawie danych przekazanych w obiekcie SearchData. Wykorzystuje MongoTemplate do tworzenia zapytań do bazy danych MongoDB.
      - findAllItems(): Zwraca wszystkie dostępne obiekty UniversityItem.
      - createItem(): Tworzy nowy obiekt UniversityItem.
      - editItem(): Edytuje istniejący obiekt UniversityItem na podstawie podanego identyfikatora.
      - deleteItemById(): Usuwa obiekt UniversityItem na podstawie podanego identyfikatora.
      - getAllCities(): Zwraca listę wszystkich dostępnych miast.
      - getAllInterests(): Zwraca listę wszystkich dostępnych zainteresowań.
   - UserService:
Klasa UserService obsługuje operacje na obiektach User (użytkownicy). Jest oznaczona adnotacją @Service. Przyjmuje wstrzykiwane zależności takie jak UserRepository i PasswordEncoder. Implementuje interfejs UserDetailsService. Główne metody to:
      - loadUserByUsername(): Implementuje metodę z interfejsu UserDetailsService i służy do ładowania użytkownika na podstawie nazwy użytkownika (username). Zwraca obiekt UserDetails, który reprezentuje użytkownika w kontekście Spring Security.
      - getByUsername(): Pobiera użytkownika na podstawie podanej nazwy użytkownika.
      - getAll(): Pobiera listę wszystkich użytkowników.
      - save(): Zapisuje użytkownika.
      - create(): Tworzy nowego użytkownika na podstawie danych przekazanych w obiekcie UserRegistrationDto. Domyślnie nadaje użytkownikowi rolę "USER". Możliwe jest również przekazanie listy ról jako argument metody create().

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

## Preview
![screen1](https://github.com/cornelisp/UNIGO/assets/96263729/3cc5ff88-2722-4386-9afe-0b15f26f54a2)
![screen2](https://github.com/cornelisp/UNIGO/assets/96263729/8bd90237-a052-4f49-a2a4-33688191f932)
