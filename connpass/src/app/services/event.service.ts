import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  search(keywords: string[]): Observable<Object> {
    let params = new HttpParams().append('order', '2').append('count', '100')
    keywords.forEach(kwd => (params = params.append('keyword', `${kwd}`)))

    // return this.http.get('/connpass/api/event', { params: params })
    return this.http.get('https://connpass.com/api/v1/event', { params: params })
  }
}
