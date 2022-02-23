import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private readonly token: string;

    constructor() {
        if(localStorage.getItem('user_role') === 'student') {
            this.token = localStorage.getItem('ctdevStudentToken') as string;
        }
        else {
            this.token = localStorage.getItem('ctdevAdminToken') as string;
        }
     }
    
    isAuthenticated(): boolean {
        return !!this.token;
    }
  
    getToken(): string {
        return this.token;
    }
}
