import './App.css';
import TextInput from './TextInput';
import useFetch from './useFetch';

import HomeIcon from './assets/home.svg?react';
import CartIcon from './assets/cart.svg?react';
import TreeIcon from './assets/tree.svg?react';
import Counter from './Counter';

/**
 * Todo Interface
 * 
 * Beschreibt die Struktur eines Todo-Objekts, das von der API abgerufen wird.
 */
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * AppProps Interface
 * 
 * Beschreibt die Props, die an die App-Komponente übergeben werden.
 * @property {string} mytitle - Der Haupttitel der Anwendung.
 * @property {string} [mysubtitle] - Ein optionaler Untertitel der Anwendung.
 */
interface AppProps {
  mytitle: string;
  mysubtitle?: string;
}

/**
 * App Component
 * 
 * Die Hauptkomponente der Anwendung, die verschiedene Unterkomponenten zusammenführt, 
 * wie Navigation, ein Textfeld, eine Counter-Komponente und die Anzeige von Daten, die von einem API-Endpunkt abgerufen wurden.
 * 
 * @param {AppProps} props - Die Props, die der App-Komponente übergeben werden.
 * @returns {JSX.Element} Die gerenderte App-Komponente.
 * 
 * Für Anfänger:
 * - Diese Komponente zeigt, wie verschiedene React-Komponenten zusammengeführt werden.
 * - Demonstriert die Verwendung eines benutzerdefinierten Hooks (`useFetch`) für das Abrufen von Daten.
 * - Veranschaulicht, wie man Icons als React-Komponenten verwendet.
 * - Zeigt die Einbindung von TypeScript-Interfaces für bessere Typensicherheit.
 */
function App({ mytitle }: AppProps): JSX.Element {
  // Verwende den benutzerdefinierten useFetch-Hook, um Daten von der API abzurufen
  const { data, loading, error } = useFetch<Todo>('https://jsonplaceholder.typicode.com/todos/1');

  // Wenn die Daten noch geladen werden, zeige eine Ladeanzeige
  if (loading) return <p>Loading...</p>;
  
  // Wenn ein Fehler auftritt, zeige eine Fehlermeldung an
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <header>
        <h1>{mytitle}</h1>
        <nav>
          <a className='nav-link' href='/'>
            <HomeIcon className='nav-icon' />
            <span>Home</span>
          </a>
          <a className='nav-link' href='/'>
            <TreeIcon className='nav-icon' />
            <span>Items</span>
          </a>
          <a className='nav-link' href='/'>
            <CartIcon className='nav-icon' />
            <span>Cart</span>
          </a>
        </nav>
      </header>

      <main>
        <section>
          {/* TextInput-Komponente, die das Eintippen von Text ermöglicht */}
          <TextInput />
        </section>

        <section>
          {/* Zeige die abgerufenen Daten aus der API im JSON-Format an */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </section>

        <section>
          {/* Counter-Komponente, die eine einfache Zählfunktion bereitstellt */}
          <Counter step={1} />
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
