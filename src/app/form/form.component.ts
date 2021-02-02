import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quotes("","","",new Date(),0,0);
  
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote()
  {
    this.addQuote.emit(this.newQuote);
    this.newQuote= new Quotes("","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
