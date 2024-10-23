import { useState, useEffect } from "react";

/**
 * TimerComponent
 *
 * Diese Komponente zeigt einen Timer, der jede Sekunde um eins hochzählt und die verstrichene Zeit in Sekunden anzeigt.
 * 
 * Hauptfunktionen:
 * - Initialisiert einen Timer, der jede Sekunde läuft.
 * - Zeigt die verstrichene Zeit auf dem Bildschirm an.
 * - Beendet den Timer sauber, wenn die Komponente nicht mehr verwendet wird.
 */

const TimerComponent: React.FC = () => {
  // State, um die Anzahl der vergangenen Sekunden zu speichern
  const [seconds, setSeconds] = useState<number>(0);

  /**
   * useEffect Hook
   *
   * Dieser Hook wird beim ersten Rendern der Komponente ausgeführt und startet einen Timer, 
   * der jede Sekunde die Anzahl der verstrichenen Sekunden um eins erhöht.
   * 
   * Die Rückgabefunktion (`cleanup`) wird beim Entfernen der Komponente oder beim Aktualisieren des Effekts ausgeführt
   * und sorgt dafür, dass der Timer sauber gestoppt wird, um Speicherlecks zu vermeiden.
   */
  useEffect(() => {
    // Startet den Timer
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    // Cleanup-Funktion, um den Timer zu stoppen, wenn die Komponente entladen wird
    return () => clearInterval(interval);
  }, []);

  return <div>{seconds} Sekunden vergangen.</div>;
};

export default TimerComponent;
