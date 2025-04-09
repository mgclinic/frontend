import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private apiUrl = environment.apiUrl + 'testimonials';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTestimonialById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTestimonial(testimonial: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, testimonial);
  }

  updateTestimonial(id: string, testimonial: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, testimonial);
  }

  deleteTestimonial(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
