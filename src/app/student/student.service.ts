import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { Chat } from '../shared/types/chat';
import { Complaint } from '../shared/types/complaint';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    readonly url: string;

    constructor(private readonly _http: HttpClient) { 
        this.url = API;
    }

    authComplaint(data: { cid: number, password: string }): Observable<{ token: string }> {
        return this._http.post<{ token: string }>(`${this.url}/authComplaint`, data);
    }

    fetchComplaint(): Observable<Complaint> {
        return this._http.get<Complaint>(`${this.url}/fetchComplaint`);
    }

    sendMessage(_data: { cid: number, message: string }): Observable<Chat> {
        return this._http.post<Chat>(`${this.url}/sendMessage`, _data);
    }
}
