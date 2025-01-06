import { Injectable } from "@angular/core";

export interface User {
    id: number;
    ime: string;
    prezime: string;
    address: string;
    contact: string;
    date: Date;
    email: string;
    password: string;
   
    
    
}

@Injectable ()

export class UserService {

    static userlist: Array<User> = [
        {
            id: 1,
            ime: 'Branka',
            prezime: 'Krcijevic',
            date: new Date ('2024-12-29 13:53'),
            address: 'Neka adresa',
            contact: '061111111',
            email: "bkrcijevic@gmail.com",
            password: "11111111"


        },

        {
            id: 2,
            ime: 'Petar',
            prezime: 'Petrovic',
            address: 'Neka adresa 2',
            contact: '061222222',
            date: new Date ('2024-12-29 13:54'),
            email: "petar@gmail.com",
            password: "22222222"
            
      },
      {
        id: 3,
        ime: 'Marko',
        prezime: 'Markovic',
        address: 'Neka adresa 3',
        contact: '061333333',
        date: new Date ('2024-12-29 13:55'),
        email: "marko@gmail.com",
        password: "33333333"
      },
      {
        id: 4,
        ime: 'Darko',
        prezime: 'markovic',
        address: 'Neka adresa 4',
        contact: '061444444',
        date: new Date ('2024-12-29 13:56'),
        email: "darko@gmail.com",
        password: "44444444"
      }

    ];

    currentUser: User | null = null;

    constructor () {
        this.currentUser = UserService.userlist[0];
    }

    getUserName (user: User): string {
        return user.email;
    }
    getUserById (id: number): User {
        var foundUser!: User;

    UserService.userlist.forEach( user => {
        if(user.id == id){
            foundUser = user;
        }
    });
    this.currentUser = foundUser;
    return foundUser;
    }
    getUser(userEmail: string): User {
        this.currentUser = UserService.userlist.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }
    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.userlist.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined; 
    }
    registerUser(ime: string, prezime: string, email: string, password: string, date: Date, address: string, contact: string): User {
        var maxId: number = 0;

        UserService.userlist.forEach(user => {
            if(maxId < user.id){
                maxId = user.id;
            }
        });

        var id = ++maxId;
        var user: User ={
            id, ime, prezime, email, password, date, contact, address
        };

        UserService.userlist.push(user);
        this.currentUser = user;
        console.log(user);

        return user;
    }
}