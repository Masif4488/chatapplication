import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  getChatByRoom(room) {
    // tslint:disable-next-line: no-shadowed-variable
    console.log('yeyeyeyeyey');

    return new Promise((resolve , reject) => {
      this.http.get('/chat/' + room).pipe(map(res => res.json())).subscribe(res => {
        console.log('bbbbbb');
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  saveChat(data) {
     // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve , reject) => {
      this.http.post('/chat', data)
      .pipe(map(res => res.json()))
      .subscribe(res => {
        console.log('aaaaaaa');
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
