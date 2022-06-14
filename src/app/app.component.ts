import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Produto} from './Produto';
import 'rxjs/add/operator/toPromise';

function onSubmit(form: any, NgForm: NgForm) {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  produto: any = {
    name: null,
    size: null,
    price: null,
    description: null,

  }

  constructor(private _http: HttpClient) {
  private let headers = new Headers({'Content-Type': 'application/json'});
  let form:any;
    onSubmit(form: NgForm): Promise <Produto> {
      return this._http.post('http://127.0.0.1:8000/api/produtos',
        JSON.stringify(form.value), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

  }
  private handleError(error: this.any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  }



