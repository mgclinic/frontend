import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private baseUrl = environment.apiUrl + 'enquiries';

  constructor(private http: HttpClient) { }

  getEnquiries() {
    return this.http.get(this.baseUrl);
  }

  getEnquiryById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEnquiry(payload: any) {
    return this.http.post(this.baseUrl, payload);
  }

  updateEnquiry(id: string, payload: any) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteEnquiry(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
