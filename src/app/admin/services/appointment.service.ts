import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  private baseUrl = environment.apiUrl + 'appointments';

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get(this.baseUrl);
  }

  getAppointmentById(id: string) {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  createAppointment(payload: any) {
    return this.http.post(this.baseUrl, payload);
  }

  updateAppointment(id: string, payload: any) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteAppointment(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }




}
