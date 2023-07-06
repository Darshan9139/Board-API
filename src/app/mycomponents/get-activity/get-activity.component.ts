import { Component,Input } from '@angular/core';
import { ApiCallService } from '../../myservices/api-call.service'

@Component({
  selector: 'app-get-activity',
  templateUrl: './get-activity.component.html',
  styleUrls: ['./get-activity.component.css']
})
export class GetActivityComponent {
  
  @Input() activity:any
  constructor(private activityCall:ApiCallService){}

  GetRandomActivity(){
    this.activityCall.getActivityWithoutPara().subscribe(data=>(
      console.log(data)
    ))
  }
}
