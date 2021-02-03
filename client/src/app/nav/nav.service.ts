import {Injectable} from '@angular/core';
import {publishReplay, refCount} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NavService {

  _navData: Observable<any>;
  _listData: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  getNavData(): Observable<any> {
    if (!this._navData) {
      this._navData = this.httpClient.get(environment.serverUrl + 'application')
        .pipe(publishReplay(), refCount());
    }
    return this._navData;
  }

  getListData(): Observable<any> {
   if (!this._listData) {
        this._listData = this.httpClient.get(environment.serverUrl + 'test')
          .pipe(publishReplay(), refCount());
      }
    return this._listData;
  }
}
