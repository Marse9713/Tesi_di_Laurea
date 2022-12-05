<h1> Tesi di Laurea di Raffaele Marseu</h1>

# INTRODUZIONE

La tesi descrive il processo di progettazione e sviluppo di una Restfull Web application (Collector) e una applicazione mobile basata sul linguaggio Flutter (Agent).  
Questa soluzione è nata dalla richiesta di un mio conoscente, necessitante di un sistema per caricare/scaricare i prodotti all'interno del suo magazzino di articoli sportivi, avendo una maggiore digitalizzazione e tracciamente delle sue scorte di prodotti e facilitazione nell'eseguire le operazioni di inventario. Tutte le interfacce sono state analizzate anche da un punto di vista visivo ed intuitivo, quindi rendendola gradevole ma allo stesso tempo facile all'apprendimento. Per tale compito ho chiesto l'aiuto ad una mia conoscente, laureata in design, per poter avere una opinione più professionale rispetto alle competenze che possa avere. Per concludere il sistema sarà fatto lavorare su una piattaforma Debian, per avere un maggior controllo delle risorse e per una maggior stabilità complessiva del sistema.

# CAPITOLO 1: Analisi dei requisiti
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
    
    Insieme a questa Web Application, verrà supportata da una applicazioni scritta in Flutter per dispositivo mobile, contenente una scheda per il riconoscimento del prodotto tramite codice a barre e al momento di riconoscimento verrà mostrato a display il nome dell'articolo, con la possibilità di inserire la taglia.

    # 14. Architettura completa del sistema  (da sostituire con 1.4)

    Tutto il sistema sarà un insieme, composto da un pc fisso, collegato alla rete locale, con collegamento bluetooth al telefono per il rilevamento dello smartphone. Il tutto sarà raggiungibile da un ip scritto dal pc già presente all'interno del negozio. (sostituibile con un url per facilitarne l'uso).

    # 15. Firebase

    Firebase è una piattaforma Google per il controllo degli accessi a un'applicazione web, con la possibile verifica tramite controllo di credenziali e la possibilità di inserimento di una dual factors authentication. 

    # 16. WEB APP

    # 17. APPLICAZIONE MOBILE

    # 18. DATABASE MYSQL

    # 19. Definizione dei requisiti

    1. Per definire tutti i requisiti, del portale e dell'applicazione, abbiamo stipulato le seguenti requisiti:  
    - il portale (Collettore) deve avere diverse suddivisioni per coprire ogni scopo sottocitato:
        - deve poter caricare gli articoli, con il loro prezzo, il tasso di sconto con il quale si acquistano, il prezzo al dettaglio, il margine di guadagno (in percentuale) sulla rivendita di tale oggetto e l'eventuale scontistica fatta sull'oggetto; (4 volte al mese)
        - deve poter scaricare gli articoli, marcando gli introiti ed il margine di guardagno realizzato dal singolo settore, contraddistinto da ogni singolo articolo venduto; (15 volte al giorno)
        - deve avere una sezione dedicata completamente all'inventario, per controllare le giacenze a magazzino dei prodotti; (1 volta al mese)
        - deve poter emulare le varie diciture trasmesse direttamente in cassa per poter emettere scontrini e controllare il tipo di conto possa venir emesso, se pagamento elettronico o pagamento contante, registrando in una struttura cloud i vari scontrini scritti in plain text, tenendo traccia e dando uno storico dei pagamenti; (15 volte al giorno)
        - deve poter tener traccia di tutti gli scontrini, delle spese giornaliere per i prodotti, dei ricavi ed il numero di transazioni eseguite; (3 volte al giorno)
        - deve poter ricercare gli articoli anche da portale senza l'ausilio dello smartphone; (15 volte al giorno)
        - si deve dare la possibilità di modificare, inserire ed eliminare un articolo senza l'ausilio dello smartphone;(5 volte al giorno)
    - l'applicazione per smartphone dovrà:
        - avere una pagina per l'inizializzazione dell'applicazione, controllo del funzionamento e corretto collegamento con l'unità centrale; (20 volte al giorno)
        - avere una pagina dedita al caricamento dei prodotti (carico nuova merce/resi della merce), tramite scansione del codice a barre dei prodotti; (15 volte al mese)
        - avere una pagina dedita allo scaricamento dei prodotti, tramite scansione del codice a barre dei prodotti ed inserimento del numero di articoli da togliere a magazzino; (15 volte al giorno)
        - avere una pagina dedicata all'inventario, per il controllo e il cambiamento dei numeri di prodotti o alla eliminazione dei prodotti se non più presenti; (10 volte al mese)

# 21 IMMAGINE DATAFLOW

# 22 TABELLA DEI REQUISITI

# 31 Design e tamplate per i processi di design e user work flow

# 32 Dettagli implementativi

# 33 Test e verifica del progetto

# 41 Valutazione e raccolta dati da parte dell'utente finale

# 42 Risultati conclusivi 

# 43 Conclusioni

# 51 bibliografia (flutter - google, html, css, js - sams teach yourself html, css and javascript)