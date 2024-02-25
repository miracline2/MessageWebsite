import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CardData } from '../model';

@Component({
  selector: 'app-letter-card',
  templateUrl: './letter-card.component.html',
  styleUrls: ['./letter-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class LetterCardComponent implements OnInit {
  ngOnInit(): void {
    this.cards = this.cardData.map((card) => ({
      ...card,
      state: 'default',
    }));
  }
 
  cards:any
  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default",
  };

  cardClicked( card:any) {
    if ( card.state === "default") {
      card.state = "flipped";
    } else {
      card.state = "default";
    }
  }

 cardData = [
    {
      id:1,
      faceFront:'/../assets/hand.jpg',
      faceBack:'/../assets/holdhand.jpg'

    },
    {
      id:2,
      faceFront:'/../assets/mirrorselfie.jpg',
      faceBack:'/../assets/loveQuote1.jpg'

    },
    {
      id:3,
      faceFront:'/../assets/selfiee.jpg',
      faceBack:'/../assets/lovequote2.jpg'

    },
    {
      id:4,
      faceFront:'/../assets/vdocall.jpg',
      faceBack:'/../assets/lovequote3.jpg'

    },
  ]

}
