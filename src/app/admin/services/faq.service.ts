import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private baseUrl = environment.apiUrl + 'faqs';

  constructor(private http: HttpClient) { }

  getFaqs() {
    return this.http.get(this.baseUrl);
  }

  getFaqById(id: string) {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  createFaq(payload: any) {
    return this.http.post(this.baseUrl, payload);
  }

  updateFaq(id: string, payload: any) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteFaq(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
