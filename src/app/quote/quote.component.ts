import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    public  maxUpvote;

  quotes:Quotes[] = [
    new Quotes('Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches..','William GoldMan', 'Owino',new Date(2021,1,3),0,0),
    new Quotes('I love you right up to the moon—and back.','Sam McBratney', 'Frank',new Date(2021,1,24),0,0),
    new Quotes('You have bewitched me, body and soul, and I love, I love, I love you. I never wish to be parted from you from this day on..','Kneeper Roberts', 'Vincent',new Date(2020,11,31),0,0),
    new Quotes(' I love you. I believe in you completely. You are my dearest one. My reason for life.','Ian McEwan', 'Juma',new Date(2021,1,9),0,0),
  ];
  
  addNewQuote(quote)
  {
    quote.completeDate = new Date(quote.duration)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteName}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upVote(index)
  {
     this.quotes[index].upvotes = this.quotes[index].upvotes+1;

     if(this.quotes[index].upvotes>2)
     {
        this.maxUpvote=Quotes[index].upvotes;
     }
  }

  downVote(index)
  {
     this.quotes[index].downvotes = this.quotes[index].downvotes-1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
