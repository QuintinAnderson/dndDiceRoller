import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dieInput',
  templateUrl: './dieInput.component.html',
  styleUrls: ['./dieInput.component.css']
})
export class DieInputComponent implements OnInit {

  dice = [
    {die: "d4", sides: 4},
    {die: "d6", sides: 6},
    {die: "d8", sides: 8},
    {die: "d10", sides: 10},
    {die: "d12", sides: 12},
    {die: "d20", sides: 20},
    {die: "d100", sides: 100}
  ];

  selectedDie: string;
  selectedDieValue: number;
  currentRoll: number = 0;
  rolls = [];
  total: number = 0;
  generateDieRolls(value: number) {
    this.clearTotal()
    for(let i=0; i<7; i++)
      if (this.dice[i].die == this.selectedDie)
        this.selectedDieValue = this.dice[i].sides;
    this.total = 0;
    if (value) {
      for(let i=value; i>=1; i--){
        this.currentRoll = Math.floor(Math.random() * this.selectedDieValue) + 1;
        this.rolls.push(this.currentRoll);
      }
      for(let i=0; i<this.rolls.length; i++) {
        this.total = this.total + this.rolls[i];
        }
      console.log(this.rolls)
      }
    }
  clearTotal() {
    this.total = 0;
    this.rolls = [];
  }

  constructor() { }
  ngOnInit() {
  }

}
