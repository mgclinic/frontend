import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private apiUrl = environment.apiUrl + 'sliders';

  constructor(private http: HttpClient) {}

  getSliders(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getSliderById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createSlider(slider: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, slider);
  }

  updateSlider(id: string, slider: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, slider);
  }

  deleteSlider(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
