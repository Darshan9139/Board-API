import { Component,Input } from '@angular/core';
import { ApiCallService } from '../../myservices/api-call.service'

@Component({
  selector: 'app-get-activity',
  templateUrl: './get-activity.component.html',
  styleUrls: ['./get-activity.component.css']
})
export class GetActivityComponent {
  
  @Input() ActivityName:String;
  constructor(private activityCall:ApiCallService){}

  // GetRandomActivity(){
  //   this.ActivityName=this.activityCall.getActivityWithoutPara();
  // }
}
