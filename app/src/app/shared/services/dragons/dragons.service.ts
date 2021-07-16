import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dragon } from '../../interfaces/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private httpClient: HttpClient) { }

  createDragon(dragon: Dragon) : Observable<Dragon> {
    return this.httpClient.post(environment.apiUrl, dragon) as Observable<Dragon>;
  }

  editDragon(dragon: Dragon, id: string) {
    return this.httpClient.put(`${environment.apiUrl}/${id}`, dragon) as Observable<Dragon>;
  }

  getDragons() : Observable<Dragon[]> {
    return this.httpClient.get(environment.apiUrl) as Observable<Dragon[]>;
  }

  getDragon(id: string) : Observable<Dragon>{
    return this.httpClient.get(`${environment.apiUrl}/${id}`) as Observable<Dragon>;
  }

  deleteDragon(id: string) : Observable<Dragon>{
    return this.httpClient.delete(`${environment.apiUrl}/${id}`) as Observable<Dragon>;
  }
}
