<h1> Tesi di Laurea di Raffaele Marseu</h1>

<h2> INTRODUZIONE </h2>
------------------------------------------------------------------------------------------------------------------------

La tesi descrive il processo di progettazione e sviluppo di una Restfull Web application (Collector) e una applicazione mobile basata sul linguaggio Flutter (Agent).  
Questa soluzione è nata dalla richiesta di un mio conoscente, necessitante di un sistema per caricare/scaricare i prodotti all'interno del suo magazzino di articoli sportivi, avendo una maggiore digitalizzazione e tracciamente delle sue scorte di prodotti e facilitazione nell'eseguire le operazioni di inventario. Tutte le interfacce sono state analizzate anche da un punto di vista visivo ed intuitivo, quindi rendendola gradevole ma allo stesso tempo facile all'apprendimento. Per tale compito ho chiesto l'aiuto ad una mia conoscente, laureata in design, per poter avere una opinione più professionale rispetto alle competenze che possa avere. Per concludere il sistema sarà fatto lavorare su una piattaforma Debian, per avere un maggior controllo delle risorse e per una maggior stabilità complessiva del sistema.

<h2> CAPITOLO 1: Analisi dei requisiti </h2>
------------------------------------------------------------------------------------------------------------------------
In questo capitolo verrà affrontata la fase di ricerca/studio delle richieste e della successiva trasformazione in requisiti del sistema, con successivo studio.  
La seguente parte è molto delicata, poiché le attività di sviluppo sono basate su questa fase di processo.
Quando i suddetti requisiti non sono stati creati in maniera chiara, univoca, coerente e completa, possono comportare il fallimento dell'intero progetto.
I requisiti si suddividono in tre categorie:  

- funzionali, sono i requisiti che descrivono le funzionalità che il sistema deve svolgere;
- non funzionali, sono i requisiti che esprimono dei vincoli o delle caratteristiche di qualità; si suddividono in due ulteriori categorie:
    - i parametri esterni, rappresentati dalla qualità complessiva per gli utenti del prodotto, denotando la correttezza, l'affidabilità, la robustezza e l'usabilità complessiva;
    - i parametri interni, indicati come la qualità software quindi per il riuso del codice, la verifica, la manutenibilità e la modularità del prodotto;
- i requisiti di dominio esprimono le caratteristiche che il sistema deve soddisfare, in un determinato dominio di utilizzo, provenendo dal dominio applicativo; se questi requisiti venissero a mancare, il sistema risula inusabile.

    # 11. Definizione del problema (da sostituire con 1.1)  

    Nel negozio, viene ancora eseguita la procedura di carico/scarico della merce ancora su carta, avendo le conseguenti problematiche di praticità di spazio, di organizzazione e di tempo per la revisione delle scorte restanti in magazzino. Un'altro punto molto importante è la possibilità di avere uno storico aggiornato costantemente sul fatturato totale (per singolo articolo) con le relative scontistiche e il margine di guadagno su ogni codice articolo. Infine, per rendere il tutto più semplice, cerco di rendere l'interfaccia complessiva comunque sempre dettagliata, per dare sempre le informazioni necessarie ed essere intuitiva.

    # 12. Utenti coinvolti (da sostituire con 1.2)  

    Il sistema verrà usato dal titolare dell'azienda e al massimo dai suoi dipendenti; nessun esterno avrà la possibilità di entrare nel sistema; verrà creato un ecosistema chiuso, in modo da mantenere la confidenzialità dei dati e la riservatezza delle varie specifiche.

    # 13. Elicitazione e scoperta dei requisisti (da sostituire con 1.3)  

    Dopo diversi confronti con il cliente, siamo convenuti per creare una Web Application, che contenga le seguenti specifiche:  
    a. la scheda per il login, che sarà controllata sulla base di un login tramite firebase, per la verifica dell'utente che si dovrà connettere con una password ed un id;  
    b. la scheda successiva mostrerà i vari reparti ed a lato ci saranno i pulsanti CARICO per inserire, SCARICO, INVENTARIO, RIAVVIO e monitor di sistema;   
    c. la scheda per il processo di carico e scarico, verrà richiesto o da tastiera o da smartphone il codice dell'articolo (il codice a barre mandato dal produttore) e il numero da aggiungere o da togliere a magazzino;  
    d. la scheda per l'inventario dotato di un trasformatore in pdf e modalità di stampa per avere sempre la possibilità di avere un cartaceo del magazzino;
    e. la scheda di monitor di sistema per spegnere o controllare il carico del processore, i watt consumati e la ram in uso (andrà ad essere abilitato con un successivo login per colui che fa manutenzione del sistema);  
    f. la scheda di cassa, per creare il pagamento (simulando la cassa fisica), solo creando l'inserimento dei dati da tastiera ed inserendo il pagamento contate o bancomat, però con l'aggiunta del fatto che si possano effettivamente scalare i prodotti;  
    e. una applicazioni con una scheda, in dettaglio la scheda per il riconoscimento del codice a barre, mostrando a display quando riconosciuto, il nome dell'articolo, con la possibilità di inserire la taglia.

    # 14. Raccolta dei requisiti di sistema  

    Per la raccolta dati è stato fatta la sintesi con il titolare dell'attività coinvolta, definendo tutte le specifiche che necessita avere dal sistema.  
    