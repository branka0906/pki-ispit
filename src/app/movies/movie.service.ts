import {Movie} from "./movie.model";

export class MovieService {
    private movies : Movie [] = [
        {
            id: '1',
            ime: 'Truman šou',
            trajanje: 103,
            zanr: 'komedija',
            datumPrikazivanja: new Date ('2025-01-18'),
            slikaUrl: 'assets/Trumanshow.jpg',
            opis: 'Film govori o životu čoveka koji je nesvestan da živi u smišljenoj rijaliti emisiji, koju širom sveta gleda oko milijardu ljudi. Truman postaje sumnjičav po pitanju stvarnosti i upušta se u otkrivanje istine o svom životu.',
            reziser: 'Piter Vir',
            glumci: ['Džim Keri','Lora Lini', 'Ed Haris' ],
            datumIzlaska: 1998,
            cenaKarte: 980,
            recenzijeKorisnika: 8.5
        },
        {
         id: '2',
         ime: 'Sneč', 
         trajanje: 104,
         zanr: 'komedija/triler',
         datumPrikazivanja: new Date ('2025-01-19'),
         slikaUrl: 'assets/snatch.jpg', 
         opis: 'Nakon što je ukrao 86-karatni (17,2 g) dijamant u pljački u Antverpenu, Frenki „Četiri prsta” odlazi u London da vidi trgovca dijamanata, Daga „Glavu”, u ime njujorškog draguljara „Rođaka Avija”. Jedan od drugih pljačkaša savetuje Frenkija da nabavi pištolj.', 
         reziser: 'Gaj Riči', 
         glumci: ['Bred Pit', 'Džejson Stejtam', 'Vini Džouns', 'Alan Ford'], 
         datumIzlaska: 2000, 
         cenaKarte: 600, 
         recenzijeKorisnika: 8.2
        }, 
        { id: '3',
          ime: 'Prestiž', 
          trajanje: 130, 
          zanr: 'triler/NF', 
          datumPrikazivanja: new Date ('2025-02-19'), 
          slikaUrl: 'assets/prestiz.jpg', 
          opis: 'Priča prati Roberta Angiera i Alfreda Bordena, protivničke iluzioniste u Londonu na prelazu iz 19. u 20. veka. Opsesivni osmišljavanjem najboljeg trika upuštaju se u nemilosrdno rivalstvo s tragičnim posledicama.', 
          reziser: 'Kristofer Nolan', 
          glumci: ['Kristijan Bejl', 'Hju Džekmen', 'Majkl Kejn', 'Skarlet Džohanson'], 
          datumIzlaska: 2006, 
          cenaKarte: 650, 
          recenzijeKorisnika: 9.3
        },
        {
            id: '4',
            ime: 'Sedam',
            trajanje: 127,
            zanr: 'triler',
            datumPrikazivanja: new Date ('2025-01-20'),
            slikaUrl: 'assets/Seven.jpg',
            opis: 'Radnja filma prati Dejvida Milsa, detektiva koji se udružuje sa penzionisanim Vilijamom Samersetom da bi pronašao serijskog ubicu koji koristi sedam smrtnih grehova kao motiv u svojim ubistvima.',
            reziser: 'Dejvid Finčer',
            glumci: ['Morgan Friman', 'Bred Pit', 'Gvinet Paltrou'],
            datumIzlaska: 1995,
            cenaKarte: 550,
            recenzijeKorisnika: 7.1
        },
        {
            id: '5',
            ime: 'Forest Gamp',
            trajanje: 142,
            zanr: 'komedija',
            datumPrikazivanja: new Date ('2025-01-20'),
            slikaUrl: 'assets/forestgamp.jpg',
            opis: 'Priča prikayuje nekoliko decenija života Foresta Gampa, usporenog i dobrog čoveka iz Alabame.Rođen i odrastao u Alabami, Forest Gamp je oduvek voleo da trči i veoma je brz. Naivan i dobrodušan, u nizu simpatičnih i smešnih situacija, neposredni je svedok brojnih istorijskih događaja, kao i nehotični inicijator nekih poznatih popularnih fenomena. A njegova jedina želja jeste da osvoji srce svoje stare ljubavi.',
            reziser:'Robert Zemekis',
            glumci: ['Tom Henks', 'Robin Rajt','Gari Sinis'],
            datumIzlaska: 1994,
            cenaKarte: 500,
            recenzijeKorisnika: 7.2
        },
        {
            id: '6',
            ime: 'Dok nisam srela tebe',
            trajanje: 110,
            zanr: 'ljubavni',
            datumPrikazivanja: new Date ('2025-01-20'),
            slikaUrl: 'assets/mebeforeyou.jpg',
            opis: 'Luiza "Lu" Klark (Emilija Klark) živi u šarmantnom engleskom gradiću na selu. Bez jasnog pravca u životu, neobična i kreativna 26-godišnjakinja ide s posla na posao kako bi pomogla svojoj bliskoj porodici da sastavi kraj s krajem. Ali njen veseli pogled na svet stavljen je na probu kad se suoči s poslednjim izazovom u karijeri.',
            reziser: 'Tea Šarok',
            glumci: ['Sem Klaflin', 'Emilija Klark', 'Metju Luis'],
            datumIzlaska: 2016,
            cenaKarte: 500,
            recenzijeKorisnika: 6.5
        },
        {
            id: '7',
            ime: 'Fantastični gospodin Lisac',
            trajanje: 87,
            zanr: 'dečji',
            datumPrikazivanja: new Date ('2025-01-19'),
            slikaUrl: 'assets/mr.fox.jpg',
            opis: 'Priča prati gospodina Lisca, šarmantnog, ali nestašnog porodičnog čoveka, koji pokušava da se vrati svom starom, opasnom životu krađe hrane od trojice beskrupuloznih farmera: Bogisa, Banca i Bina. Međutim, njegovi poduhvati ugrožavaju ne samo njegovu porodicu već i celu zajednicu životinja.',
            reziser: 'Ves Anderson',
            glumci: ['Dzordz Kluni', 'Bil Mari','Džejson Švracman'],
            datumIzlaska: 2009,
            cenaKarte: 480,
            recenzijeKorisnika: 7.3
        },
        {
            id: '8',
            ime: 'Kad je Hari sreo Sali',
            trajanje: 96,
            zanr: 'ljubavni',
            datumPrikazivanja: new Date ('2025-01-21'),
            slikaUrl: 'assets/harisali.jpg',
            opis: 'Film istražuje pitanje da li muškarci i žene mogu biti samo prijatelji, prateći složeni odnos Harija i Sali kroz više od decenije slučajnih susreta, prijateljstva i romantičnih iskušenja.',
            reziser:'Rob Rajner',
            glumci: ['Meg Rajan', 'Bili Kristal', 'Bruno Kirbi'],
            datumIzlaska: 1989,
            cenaKarte: 500,
            recenzijeKorisnika: 6.8
        },
        {
            id: '9',
            ime: 'Međuzvezdani',
            trajanje: 169,
            zanr: 'NF',
            datumPrikazivanja: new Date ('2025-01-22'),
            slikaUrl: 'assets/Interstellar.jpg',
            opis: ' Radnja se odvija u bliskoj budućnosti, kada Zemlja postaje sve manje pogodna za život. Bivši pilot NASA-e, Kuper (Metju Mekonahi), pridružuje se timu naučnika na opasnoj misiji kroz crvotočinu u potrazi za novim domom za čovečanstvo',
            reziser: 'Kristofer Nolan',
            glumci: ['Metju Mekonahi', 'Džesika Častejn', 'En Hatavej'],
            datumIzlaska: 2014,
            cenaKarte: 600,
            recenzijeKorisnika: 7.8
        },
        {
            id: '10',
            ime: 'Blejd',
            trajanje: 120,
            zanr: 'horor',
            datumPrikazivanja: new Date ('2025-01-23'),
            slikaUrl: 'assets/blejd1.jpg',
            opis: ' Blejd (Vesli Snajps) je polu-čovek, polu-vampir, poznat kao "Dnevni hodač", koji poseduje sve snage vampira, ali nijednu njihovu slabost. On koristi svoje jedinstvene moći da se bori protiv mračnih sila, štiteći čovečanstvo od pretnji iz senki.',
            reziser: 'Stiven Norington',
            glumci: ['Vesli Snajps', 'Kris Kristoferson', 'Stiven Dorf'],
            datumIzlaska: 1998,
            cenaKarte: 480 ,
            recenzijeKorisnika: 6.3
        },
        {
            id: '11',
            ime: 'Prokletnici',
            trajanje: 153,
            zanr: 'ratni',
            datumPrikazivanja: new Date ('2025-01-23'),
            slikaUrl: 'assets/prokletnici.jpg',
            opis: 'Radnja se odvija tokom Drugog svetskog rata i prati dve paralelne priče: osvetu francuske Jevrejke Šošan Drajfus (Melani Loran), koja planira da uništi nacističku elitu, i grupu američkih vojnika, poznatih kao "Prokletnici", predvođenih harizmatičnim poručnikom Aldom Rejnom (Bred Pit), koji sprovode brutalne napade na naciste u okupiranoj Francuskoj.',
            reziser: 'Kventin Tarantino',
            glumci: ['Kventin Tarntino', 'Kristof Valc', 'Bred Pit'],
            datumIzlaska: 2009,
            cenaKarte: 650,
            recenzijeKorisnika: 7.1
        },
        {
            id: '12',
            ime: 'Crveni',
            trajanje: 123,
            zanr: 'akcija',
            datumPrikazivanja: new Date ('2025-01-25'),
            slikaUrl: 'assets/crveni.jpg',
            opis: 'Radnja prati Kaluma Drifta (Džonson), šefa obezbeđenja Severnog pola, koji se udružuje sa hakerom Džekom O Malijem (Evans) kako bi pronašli otetog Deda Mraza (Dž. K. Simons) na Badnje veče.',
            reziser:'Džejk Kasdan',
            glumci: ['Dvejn Džonson', 'Kirnan Šipka', 'Kris Evans'],
            datumIzlaska: 2024,
            cenaKarte: 400,
            recenzijeKorisnika: 6.4
        },
        {
            id: '13',
            ime: 'Grof Monte Kristo',
            trajanje: 178,
            zanr: 'istorijski',
            datumPrikazivanja: new Date ('2025-01-23'),
            slikaUrl: 'assets/grofmontekristo.jpg',
            opis: 'Radnja prati Edmonda Dantesa, mladog mornara koji biva nepravedno optužen za izdaju i zatvoren na ostrvu If. Nakon 14 godina uspeva da pobegne, pronalazi skriveno blago i vraća se u društvo kao misteriozni Grof Monte Kristo, s namerom da se osveti onima koji su ga izdali.',
            reziser: 'Matje Delaport',
            glumci: ['Pjer Nine', 'Bastijen Bujon', 'Anais Demustje'],
            datumIzlaska: 2024,
            cenaKarte: 300,
            recenzijeKorisnika: 7.6
        },
        {
            id: '14',
            ime: 'Frida',
            trajanje: 123 ,
            zanr: 'biografija',
            datumPrikazivanja: new Date ('2025-01-21'),
            slikaUrl: 'assets/frida.jpg',
            opis: 'Radnja se fokusira na ključne trenutke Fridine životne priče, uključujući njen težak oporavak od saobraćajne nesreće koja je ostavila trajne posledice na njeno telo, njen brak sa Diegom, kao i ljubavne afere i političke angažmane koji su oblikovali njen rad',
            reziser: 'Džuli Tejmor',
            glumci: ['Salma Hajek', 'Alfred Molina','Edvard Norton'],
            datumIzlaska: 2002,
            cenaKarte: 450,
            recenzijeKorisnika: 7.3
        },
        {
            id: '15',
            ime: 'Velika Lepota',
            trajanje: 142,
            zanr: 'drama',
            datumPrikazivanja: new Date ('2025-01-28'),
            slikaUrl: 'assets/velikalepota.jpg',
            opis: 'Radnja prati Jepija Gambardelu (Toni Servillo), uspešnog novinara i socijalitea koji je većina svog života proveo u Rimu, obilazeći luksuzne zabave i uživajući u životnoj ekstravaganciji. Na pragu 65. godine, Jepi se suočava sa pitanjem o stvarnoj vrednosti svog postojanja i smislu života',
            reziser: 'Paolo Sorentino',
            glumci: ['Toni Servilo', 'Karlo Verdone', 'Sabrina Ferili'],
            datumIzlaska: 2013,
            cenaKarte: 480,
            recenzijeKorisnika: 7.3
        },
    ]

    private recomended: Movie []= [
        {
            id: '1',
            ime: 'Truman šou',
            trajanje: 103,
            zanr: 'komedija',
            datumPrikazivanja: new Date ('2025-01-18'),
            slikaUrl: 'assets/Trumanshow.jpg',
            opis: 'Film govori o životu čoveka koji je nesvestan da živi u smišljenoj rijaliti emisiji, koju širom sveta gleda oko milijardu ljudi. Truman postaje sumnjičav po pitanju stvarnosti i upušta se u otkrivanje istine o svom životu.',
            reziser: 'Piter Vir',
            glumci: ['Džim Keri','Lora Lini', 'Ed Haris' ],
            datumIzlaska: 1998,
            cenaKarte: 980,
            recenzijeKorisnika: 8.5
        },
        {
         id: '2',
         ime: 'Sneč', 
         trajanje: 104,
         zanr: 'komedija/triler',
         datumPrikazivanja: new Date ('2025-01-19'),
         slikaUrl: 'assets/snatch.jpg', 
         opis: 'Nakon što je ukrao 86-karatni (17,2 g) dijamant u pljački u Antverpenu, Frenki „Četiri prsta” odlazi u London da vidi trgovca dijamanata, Daga „Glavu”, u ime njujorškog draguljara „Rođaka Avija”. Jedan od drugih pljačkaša savetuje Frenkija da nabavi pištolj.', 
         reziser: 'Gaj Riči', 
         glumci: ['Bred Pit', 'Džejson Stejtam', 'Vini Džouns', 'Alan Ford'], 
         datumIzlaska: 2000, 
         cenaKarte: 600, 
         recenzijeKorisnika: 8.2
        }, 
        { id: '3',
          ime: 'Prestiž', 
          trajanje: 130, 
          zanr: 'triler/NF', 
          datumPrikazivanja: new Date ('2025-02-19'), 
          slikaUrl: 'assets/prestiz.jpg', 
          opis: 'Priča prati Roberta Angiera i Alfreda Bordena, protivničke iluzioniste u Londonu na prelazu iz 19. u 20. veka. Opsesivni osmišljavanjem najboljeg trika upuštaju se u nemilosrdno rivalstvo s tragičnim posledicama.', 
          reziser: 'Kristofer Nolan', 
          glumci: ['Kristijan Bejl', 'Hju Džekmen', 'Majkl Kejn', 'Skarlet Džohanson'], 
          datumIzlaska: 2006, 
          cenaKarte: 650, 
          recenzijeKorisnika: 9.3
        },
        {
            id: '4',
            ime: 'Sedam',
            trajanje: 127,
            zanr: 'triler',
            datumPrikazivanja: new Date ('2025-01-20'),
            slikaUrl: 'assets/Seven.jpg',
            opis: 'Radnja filma prati Dejvida Milsa, detektiva koji se udružuje sa penzionisanim Vilijamom Samersetom da bi pronašao serijskog ubicu koji koristi sedam smrtnih grehova kao motiv u svojim ubistvima.',
            reziser: 'Dejvid Finčer',
            glumci: ['Morgan Friman', 'Bred Pit', 'Gvinet Paltrou'],
            datumIzlaska: 1995,
            cenaKarte: 550,
            recenzijeKorisnika: 7.1
        },
        {
            id: '5',
            ime: 'Forest Gamp',
            trajanje: 142,
            zanr: 'komedija',
            datumPrikazivanja: new Date ('2025-01-20'),
            slikaUrl: 'assets/forestgamp.jpg',
            opis: 'Priča prikayuje nekoliko decenija života Foresta Gampa, usporenog i dobrog čoveka iz Alabame.Rođen i odrastao u Alabami, Forest Gamp je oduvek voleo da trči i veoma je brz. Naivan i dobrodušan, u nizu simpatičnih i smešnih situacija, neposredni je svedok brojnih istorijskih događaja, kao i nehotični inicijator nekih poznatih popularnih fenomena. A njegova jedina želja jeste da osvoji srce svoje stare ljubavi.',
            reziser:'Robert Zemekis',
            glumci: ['Tom Henks', 'Robin Rajt','Gari Sinis'],
            datumIzlaska: 1994,
            cenaKarte: 500,
            recenzijeKorisnika: 7.2
        },
        {
            id: '6',
            ime: 'Dok nisam srela tebe',
            trajanje: 110,
            zanr: 'ljubavni',
            datumPrikazivanja: new Date ('2025-01-20'),
            slikaUrl: 'assets/mebeforeyou.jpg',
            opis: 'Luiza "Lu" Klark (Emilija Klark) živi u šarmantnom engleskom gradiću na selu. Bez jasnog pravca u životu, neobična i kreativna 26-godišnjakinja ide s posla na posao kako bi pomogla svojoj bliskoj porodici da sastavi kraj s krajem. Ali njen veseli pogled na svet stavljen je na probu kad se suoči s poslednjim izazovom u karijeri.',
            reziser: 'Tea Šarok',
            glumci: ['Sem Klaflin', 'Emilija Klark', 'Metju Luis'],
            datumIzlaska: 2016,
            cenaKarte: 500,
            recenzijeKorisnika: 6.5
        },
        {
            id: '7',
            ime: 'Fantastični gospodin Lisac',
            trajanje: 87,
            zanr: 'dečji',
            datumPrikazivanja: new Date ('2025-01-19'),
            slikaUrl: 'assets/mr.fox.jpg',
            opis: 'Priča prati gospodina Lisca, šarmantnog, ali nestašnog porodičnog čoveka, koji pokušava da se vrati svom starom, opasnom životu krađe hrane od trojice beskrupuloznih farmera: Bogisa, Banca i Bina. Međutim, njegovi poduhvati ugrožavaju ne samo njegovu porodicu već i celu zajednicu životinja.',
            reziser: 'Ves Anderson',
            glumci: ['Dzordz Kluni', 'Bil Mari','Džejson Švracman'],
            datumIzlaska: 2009,
            cenaKarte: 480,
            recenzijeKorisnika: 7.3
        },
        {
            id: '8',
            ime: 'Kad je Hari sreo Sali',
            trajanje: 96,
            zanr: 'ljubavni',
            datumPrikazivanja: new Date ('2025-01-21'),
            slikaUrl: 'assets/harisali.jpg',
            opis: 'Film istražuje pitanje da li muškarci i žene mogu biti samo prijatelji, prateći složeni odnos Harija i Sali kroz više od decenije slučajnih susreta, prijateljstva i romantičnih iskušenja.',
            reziser:'Rob Rajner',
            glumci: ['Meg Rajan', 'Bili Kristal', 'Bruno Kirbi'],
            datumIzlaska: 1989,
            cenaKarte: 500,
            recenzijeKorisnika: 6.8
        },
        {
            id: '9',
            ime: 'Međuzvezdani',
            trajanje: 169,
            zanr: 'NF',
            datumPrikazivanja: new Date ('2025-01-22'),
            slikaUrl: 'assets/Interstellar.jpg',
            opis: ' Radnja se odvija u bliskoj budućnosti, kada Zemlja postaje sve manje pogodna za život. Bivši pilot NASA-e, Kuper (Metju Mekonahi), pridružuje se timu naučnika na opasnoj misiji kroz crvotočinu u potrazi za novim domom za čovečanstvo',
            reziser: 'Kristofer Nolan',
            glumci: ['Metju Mekonahi', 'Džesika Častejn', 'En Hatavej'],
            datumIzlaska: 2014,
            cenaKarte: 600,
            recenzijeKorisnika: 7.8
        },
        {
            id: '10',
            ime: 'Blejd',
            trajanje: 120,
            zanr: 'horor',
            datumPrikazivanja: new Date ('2025-01-23'),
            slikaUrl: 'assets/blejd1.jpg',
            opis: ' Blejd (Vesli Snajps) je polu-čovek, polu-vampir, poznat kao "Dnevni hodač", koji poseduje sve snage vampira, ali nijednu njihovu slabost. On koristi svoje jedinstvene moći da se bori protiv mračnih sila, štiteći čovečanstvo od pretnji iz senki.',
            reziser: 'Stiven Norington',
            glumci: ['Vesli Snajps', 'Kris Kristoferson', 'Stiven Dorf'],
            datumIzlaska: 1998,
            cenaKarte: 480 ,
            recenzijeKorisnika: 6.3
        }

    ]
    private soon: Movie []=[
            {   id: '1', 
                ime: 'Tenet', 
                trajanje: 150, 
                zanr: 'NF/Akcija', 
                datumPrikazivanja: new Date ('2025-05-19'), 
                slikaUrl: 'assets/tenet.jpg', 
                opis: 'Radnja prati protagonista (Džon David Vašington), tajnog agenta koji ulazi u svet međunarodnih špijunaže kako bi sprečio globalnu katastrofu.', 
                reziser: 'Kristofer Nolan', 
                glumci: ['Elizabet Debicki', 'Džon Dejvid Vošington', 'Robert Patinson'], 
                datumIzlaska: 2025, 
                cenaKarte: 800, 
                recenzijeKorisnika: 0 },
                {
                 id: '2', 
                 ime: 'Dina 1', 
                 trajanje: 155, 
                 zanr: 'NF', 
                 datumPrikazivanja: new Date ('2025-05-20'), 
                 slikaUrl: 'assets/dina1.jpg', 
                 opis: 'Radnja se dešava na planeti Arrakis, koja je ključna za svemirsku moć zbog svojih resursa - začina. Glavni junak, Pol Atreides (Timoti Šalame), mladi naslednik plemićke porodice, mora da se suoči sa pretnjama koje dolaze iz svih pravaca, uključujući politiku, izdaju i borbu za vlast.', 
                 reziser: 'Deni Vilnev', 
                 glumci: ['Timoti Šalame', 'Rebeka Ferguson', 'Oskar Ajzak'], 
                 datumIzlaska: 2025, 
                 cenaKarte: 600, 
                 recenzijeKorisnika: 0  
                },
                {
                id: '3', 
                ime: 'Dina 2', 
                trajanje: 166, 
                zanr: 'NF', 
                datumPrikazivanja: new Date ('2025-06-28'), 
                slikaUrl: 'assets/Dina2.jpg', 
                opis: 'U drugom delu, film istražuje Polovu potragu za osvetom, kao i njegovu borbu s unutrašnjim dilemama i njegovom sudbinom kao vođe. S obzirom na uspeh prvog dela, očekuje se da će ovaj film nastaviti duboko razrađivati političke intrige i teme ekološke borbe.', 
                reziser: 'Deni Vilnev', 
                glumci: ['Timoti Šalame', 'Zendeja', 'Rebeka Ferguson'], 
                datumIzlaska: 2025, 
                cenaKarte: 800, 
                recenzijeKorisnika: 0
            },
            {
                id: '4', 
                ime: 'Sonik', 
                trajanje: 99, 
                zanr: 'dečji/komedija', 
                datumPrikazivanja: new Date ('2025-06-26'), 
                slikaUrl: 'assets/sonik.jpg', 
                opis: 'Glavni lik je Sonic (glas Ben Švarc), brzi plavi jež koji beži iz svoje domovine na Zemlju, gde ga lovi zli naučnik Dr. Robotnik (Jim Carrey). Sonic se udružuje sa ljudskim prijateljem, policajcem Tomom (Džejms Marsden), kako bi zaustavio Robotnikove zle planove. ', 
                reziser: 'Pet Kejsi', 
                glumci: ['Džejms Marsden', 'Džim Keri'], 
                datumIzlaska: 2025, 
                cenaKarte: 600, 
                recenzijeKorisnika: 0
            },
            {
                id: '5', 
                ime: 'Betmen', 
                trajanje: 166, 
                zanr: 'triler/noar', 
                datumPrikazivanja: new Date ('2025-06-26'), 
                slikaUrl: 'assets/betmen.jpg', 
                opis: ' Film prati mladog Batmana dok istražuje seriju zločina u Gothamu, počinjene od strane misterioznog serijskog ubice, Riddlera (Pol Dano). Kroz svoj detektivski rad, Batman se suočava sa dubokim pitanjima o svom identitetu, moralnosti i mestu u svetu', 
                reziser: 'Met Rivs', 
                glumci: ['Robert Patinson', 'Zoi Kravic', 'Pol Dejno'], 
                datumIzlaska: 2025, 
                cenaKarte: 800, 
                recenzijeKorisnika: 0
            }



        

            
    ]

    getMovies(): Movie []{
        return this.movies;
    }
    getRecomended () {
        return this.recomended;
    }
    getSoon (){
        return this.soon;
    }
    getFilteredMovies(search: string): Movie [] {
        return this.movies.filter (movie => movie.ime.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
}