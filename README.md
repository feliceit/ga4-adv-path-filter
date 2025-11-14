# GA4 Table Filter - Estensione Chrome

Estensione Chrome che aggiunge un filtro di ricerca personalizzato alle tabelle dei percorsi di conversione in Google Analytics 4.

## 🚀 Caratteristiche

- **Filtro in tempo reale**: Cerca e filtra le righe mentre digiti
- **Contatore dinamico**: Visualizza quante righe corrispondono al filtro
- **Pulsante cancella**: Pulisci rapidamente il campo di ricerca
- **Tasto ESC**: Cancella il filtro e esci dal campo
- **Design Material**: Si integra perfettamente con l'interfaccia di GA4
- **Auto-detect**: Attivazione automatica sulla pagina corretta

## 📦 Installazione

### Metodo 1: Da file non pacchettizzato (Sviluppo)

1. Scarica e estrai il file `ga4-table-filter.zip`
2. Apri Chrome e vai su `chrome://extensions/`
3. Attiva la **Modalità sviluppatore** (toggle in alto a destra)
4. Clicca su **Carica estensione non pacchettizzata**
5. Seleziona la cartella estratta `ga4-table-filter`
6. L'estensione è ora installata! 🎉

### Metodo 2: Installazione permanente

1. Vai su `chrome://extensions/`
2. Dopo aver caricato l'estensione non pacchettizzata, clicca su **Pacchettizza estensione**
3. Seleziona la cartella dell'estensione
4. Chrome creerà un file `.crx` che puoi installare in modo permanente

## 🎯 Come usare

1. Vai su Google Analytics 4
2. Naviga su **Pubblicità** → **Percorsi eventi chiave** (o **Percorsi di conversione**)
3. Il filtro apparirà automaticamente nella barra dei controlli della tabella
4. Digita nel campo per filtrare le righe in tempo reale
5. Usa il pulsante **×** per cancellare il filtro
6. Premi **ESC** per pulire e uscire dal campo

## 📂 Struttura file

```
ga4-table-filter/
├── manifest.json          # Configurazione estensione
├── content.js            # Script principale
├── popup.html            # Interfaccia popup
├── README.md             # Questo file
└── icons/
    ├── icon16.png        # Icona 16x16
    ├── icon48.png        # Icona 48x48
    └── icon128.png       # Icona 128x128
```

## 🔧 Funzionamento tecnico

L'estensione:
1. Monitora l'URL per rilevare la pagina dei percorsi di conversione
2. Cerca gli elementi DOM caratteristici (`ga-conversion-path-chips`)
3. Inietta il filtro nel container `.left-table-controls`
4. Filtra le righe della tabella in tempo reale
5. Gestisce i cambiamenti di URL (SPA - Single Page Application)

## 🛠️ Personalizzazione

Puoi modificare il comportamento editando `content.js`:

```javascript
const CONFIG = {
  checkInterval: 1000,     // Frequenza controllo (ms)
  maxAttempts: 30,        // Tentativi massimi
  // ... altri selettori
};
```

## 🐛 Risoluzione problemi

**Il filtro non appare?**
- Verifica di essere sulla pagina corretta (Percorsi eventi chiave)
- Apri la console (F12) e cerca messaggi `[GA4 Filter]`
- Ricarica la pagina
- Controlla che l'estensione sia attiva in `chrome://extensions/`

**Il filtro scompare cambiando pagina?**
- Normale! L'estensione rileva automaticamente i cambiamenti URL e lo reinstalla

**Errori nella console?**
- Segnala il problema con i dettagli dell'errore

## 📝 Note

- L'estensione funziona solo su `analytics.google.com`
- Compatibile con tutti gli account GA4
- Non raccoglie né memorizza dati
- Permessi minimi richiesti

## 🔄 Versioni

### v1.0.0 (2024)
- Rilascio iniziale
- Filtro ricerca base
- Contatore risultati
- Pulsante cancella
- Auto-detect pagina

## 👨‍💻 Sviluppo

Creato per migliorare l'esperienza utente nell'analisi dei percorsi di conversione in GA4.

## 📄 Licenza

Uso personale e aziendale libero.

---

💡 **Suggerimenti?** Apri una issue o contatta lo sviluppatore!
