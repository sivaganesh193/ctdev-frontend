import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { Chat } from '../shared/types/chat';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private readonly url: string;

    constructor(private readonly _http: HttpClient) { 
        this.url = API;
    }

    sendMessage(data: { cid: number, message: string }): Observable<Chat> {
        return this._http.post<Chat>(`${this.url}/sendMessage`,data);
    }
}
