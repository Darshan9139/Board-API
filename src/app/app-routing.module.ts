import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './mycomponents/document/document.component';
import { SearchActivityComponent } from './mycomponents/search-activity/search-activity.component';

const routes: Routes = [{path:"document", component:DocumentComponent},
{path:"SearchActivity",component:SearchActivityComponent},
{path:"",component:SearchActivityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
