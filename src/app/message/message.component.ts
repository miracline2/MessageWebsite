import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  question : any
  gif :any
  noBtn : any;
  yesBtn:any;

  message = 'Hey Vishnu!! Are You Ready To Create More Memories With Me?'

 ngOnInit(): void {
  this.question= document.querySelector(".question");
 this. noBtn=document.querySelector(".noButton");
 this. gif = document.querySelector(".gif");
 this. yesBtn = document.querySelector(".yesButton");
}
answerYes(){
  if(this.yesBtn){
    this.message = 'Aww!! I Love You 😍🥰'
  }
  this.gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif"
  
}
answerNo(){
  const noBtnRect = this.noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  this.noBtn.style.left = randomX + "px";
  this.noBtn.style.top = randomY + "px";
}


}
