import { useState, ChangeEvent } from 'react';

/**
 * TextInput Component
 *
 * Diese Komponente ist ein einfaches Textfeld, das es dem Benutzer ermöglicht, Text einzugeben.
 * Der eingegebene Text wird in einem State gespeichert und gleichzeitig auf dem Bildschirm angezeigt.
 *
 * Hauptfunktionen:
 * - Ein Textfeld zur Eingabe von Benutzertext.
 * - Der eingegebene Text wird dynamisch in einem Absatz unter dem Textfeld angezeigt.
 */

 /**
  * Was bedeutet `React.FC`?
  *
  * `React.FC` steht für "Functional Component" und ist ein vordefinierter Typ in React.
  * Es bietet einige Vorteile:
  *
  * 1. **Typisierung der Props**: `React.FC` macht es einfacher, die Props einer Komponente zu typisieren. 
  *    Wenn man `React.FC<Props>` verwendet, kann TypeScript automatisch erkennen, welche Props die Komponente erwartet.
  * 2. **Automatische Rückgabe des JSX**: `React.FC` stellt sicher, dass die Komponente immer einen gültigen JSX-Wert zurückgibt.
  * 3. **Berücksichtigung von Standardwerten und `children`**: `React.FC` fügt automatisch `children` als Prop hinzu, 
  *    wodurch es einfach wird, Komponenten zu erstellen, die auch andere Komponenten oder Inhalte einbetten können.
  *
  * Hinweis: Obwohl `React.FC` nützlich ist, gibt es auch Diskussionen in der Community, 
  * dass es überflüssige Typen hinzufügt (z.B. `children` auch dann, wenn sie nicht verwendet werden), 
  * daher ist es manchmal besser, explizit nur die Props zu typisieren, die wirklich benötigt werden.
  */

const TextInput: React.FC = () => {
  // useState-Hook, um den aktuellen Textwert zu verwalten.
  // Der State "text" wird initial auf einen leeren String gesetzt.
  const [text, setText] = useState<string>('');

  /**
   * handleChange Funktion
   *
   * Diese Funktion wird aufgerufen, wenn der Benutzer Text in das Eingabefeld eingibt.
   * Sie aktualisiert den "text"-State mit dem neuen Wert, der aus dem Eingabefeld kommt.
   *
   * @param event - Das Event-Objekt, das ausgelöst wird, wenn sich der Eingabewert ändert.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); // Aktualisiere den "text"-State mit dem neuen Eingabewert.
  };

  return (
    <div>
      {/* Eingabefeld, das den aktuellen "text"-State als Wert hat und die handleChange-Funktion aufruft, wenn der Benutzer etwas eintippt */}
      <input type="text" value={text} onChange={handleChange} />

      {/* Absatz, der den aktuell eingegebenen Text anzeigt */}
      <p>You typed: {text}</p>
    </div>
  );
};

export default TextInput;
