import { useState, useEffect } from 'react';

/**
 * UseFetchResult Interface
 *
 * Dieses Interface definiert die Struktur der Daten, die der `useFetch`-Hook zurückgibt.
 * 
 * @template T - Der Typ der erwarteten Daten.
 * @property {T | null} data - Die abgerufenen Daten vom Endpoint oder `null`, wenn noch keine Daten vorhanden sind.
 * @property {boolean} loading - Gibt an, ob die Daten noch geladen werden.
 * @property {Error | null} error - Ein Fehlerobjekt, falls ein Fehler beim Abrufen der Daten aufgetreten ist, oder `null`, wenn kein Fehler vorliegt.
 */
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * useFetch Hook
 *
 * Dieser Hook ermöglicht das Abrufen von Daten von einer angegebenen URL und gibt den aktuellen Ladezustand, 
 * die abgerufenen Daten und eventuelle Fehler zurück. 
 *
 * @template T - Der Typ der erwarteten Daten.
 * @param {string} url - Die URL, von der die Daten abgerufen werden sollen.
 * @returns {UseFetchResult<T>} - Ein Objekt, das die abgerufenen Daten, den Ladezustand und eventuelle Fehler enthält.
 */
function useFetch<T>(url: string): UseFetchResult<T> {
  // State-Variablen zur Verwaltung von Daten, Ladezustand und Fehlern.
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Asynchrone Funktion zum Abrufen der Daten von der angegebenen URL
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        // Setze die abgerufenen Daten in den State
        setData(result);
      } catch (err) {
        // Setze das Fehlerobjekt, falls ein Fehler auftritt
        setError(err as Error);
      } finally {
        // Beende den Ladezustand, unabhängig davon, ob ein Fehler aufgetreten ist oder nicht
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  // Rückgabe eines Objekts mit den Daten, dem Ladezustand und eventuellen Fehlern
  return { data, loading, error };
}

export default useFetch;
