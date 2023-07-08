import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCallService } from '../../myservices/api-call.service'

@Component({
  selector: 'app-search-activity',
  templateUrl: './search-activity.component.html',
  styleUrls: ['./search-activity.component.css']
})

export class SearchActivityComponent {
  SelectedCategory: string = "recreational"
  participants: number = 1
  Categories = ["education", "recreational", "social", "DIY", "charity", "cooking", "relaxation", "music", "busywork"]
  Activity: any;
  constructor(private activityCall: ApiCallService) { }

  ngOnInit() {
    this.GetRandomActivity()
  }

  async SearchActivity() {
    this.activityCall.getActivity(this.SelectedCategory, this.participants).subscribe(data=>(this.Activity=data))
  
  }
  GetRandomActivity() {
    this.activityCall.getActivityWithoutPara().subscribe(data=>(this.Activity=data))
  }
}
