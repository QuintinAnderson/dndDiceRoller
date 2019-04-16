import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-die-input',
  templateUrl: './die-input.component.html',
  styleUrls: ['./die-input.component.css']
})
export class DieInputComponent implements OnInit {

  selectedValue: number;
  currentRoll: number = 0;
  rolls = [];
  total: number = 0;
  generateDieRolls(value: number) {
    this.total = 0;
    if (value) {
      for(let i=value; i>=1; i--){
        this.currentRoll = Math.floor(Math.random() * this.selectedValue) + 1;
        this.rolls.push(this.currentRoll);
      }
      for(let i=0; i<this.rolls.length; i++) {
        this.total = this.total + this.rolls[i];
        }
      }
    }

  constructor() { }
  ngOnInit() {
  }

}
