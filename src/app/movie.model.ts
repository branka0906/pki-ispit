export interface Movie {
    id: string;
    ime: string;
    trajanje: number;
    zanr: string;
    datumPrikazivanja: Date;
    slikaUrl: string;
    opis: string;
    reziser: string;
    glumci: string[];
    datumIzlaska: number;
    cenaKarte: number;
    recenzijeKorisnika: number;
}
