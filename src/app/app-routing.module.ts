import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LetterCardComponent } from './letter-card/letter-card.component';

const routes: Routes = [
  {path:'message',component:MessageComponent},
  {path:'',component:FrontpageComponent},
  {path:'cardLetter',component:LetterCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
