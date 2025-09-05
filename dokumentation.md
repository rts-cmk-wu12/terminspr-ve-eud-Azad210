# Dokumentation for Landrup dans
Azad Karaman, WU12


## Sådan kommer du i gang
`npm install`

`npm run dev`

https://terminspr-ve-eud-azad210.vercel.app/

Jeg har lavet valgfri opgave A

## Tech-stack

* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. React har et stort community med et stort modul-bibliotek, som er aktivt, vel-dokumenteret og vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor.
* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med GitHub.
* **React-icons**  
Et ikon-bibliotek, som er beregnet på React.
* **SASS**  
En udvidelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.


## Kode-eksempel

```jsx
function Aktiviteter() {
  const [aktiviteter, setAktiviteter] = useState([]);

  useEffect(() => { 
    const hentAktiviteter = async () => { 
      const aktivRes = await fetch("http://localhost:4000/api/v1/activities");
      const data = await aktivRes.json();
      setAktiviteter(data);
    };
    hentAktiviteter();
  }, []);
  

  return (
    <>
    <h2>Aktiviteter</h2>
      <section className='aktiviteter'>
        <div className='aktiviteter__detatils'>
          {aktiviteter.map((aktivitet) => (
            <div className="aktiviteter__card">
              <img
                className="aktiviteter__billede"
                src={aktivitet.asset.url}
                alt={aktivitet.name}
              />
              <div className='aktiviteter__info'>
                <h3>{aktivitet.name}</h3>
                <p>{aktivitet.minAge} - {aktivitet.maxAge} år</p>
              </div>
            </div>
          ))}
        </div>
      </section>  
      <Navbar />
    </>
  )
}
```



Komponenten Aktiviteter henter data fra et API, gemmer det i state og viser en liste over aktiviteter, hver aktivitet vises som et kort med billede, navn og aldersgruppe.

Komponenten Aktiviteter henter en liste over aktiviteter fra api'et og gemmer dem i komponentens state ved hjælp af Reacts useState-hook. Datahentningen sker asynkront inden for en useEffect-hook.

Hver aktivitet vises som et kort, der indeholder et billede, navnet på aktiviteten og aldersgruppen. .map()-funktionen bruges til at generere et kort for hver aktivitet i state-arrayet. 
