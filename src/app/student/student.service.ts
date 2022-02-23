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

    fetchComplaint(_data: { cid: number, password: string }): Observable<{ complaint: Complaint, token: string }> {
        return this._http.post<{ complaint: Complaint, token: string }>(`${this.url}/fetchComplaint`, _data);
    }

    sendMessage(_data: { cid: number, message: string }): Observable<Chat> {
        return this._http.post<Chat>(`${this.url}/sendMessage`, _data);
    }
}
