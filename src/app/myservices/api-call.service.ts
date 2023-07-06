import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
  
  API_Url = "http://www.boredapi.com/api/activity/"

  getActivity(Category: string, Count: number) {
    return this.http.get(this.API_Url,
      {
        params: 
        {
          type: Category.toLocaleLowerCase(),
          participants: Count
        }
      }
    )
  }
  getActivityWithoutPara(){
    return this.http.get(this.API_Url)
  }

}


