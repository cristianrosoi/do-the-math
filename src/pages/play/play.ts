import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
    this.setValues();
    this.score = 0;
  }

  firstNumber: number;
  secondNumber: number;
  resultNumber: number;
  operator: string;
  resultMessage: string;

  score: number;

  getRandomNumber(): number {
    return Math.round(Math.random() * 10);
  }

  setValues(): void {
    this.firstNumber = this.getRandomNumber();
    this.secondNumber = this.getRandomNumber();
    this.resultNumber = this.getRandomNumber() % 2 ? this.firstNumber + this.secondNumber : this.getRandomNumber();
    this.operator = "+";
    this.resultMessage = "";
  }

  checkEcuation(arg: string): void {
    switch(this.operator) {
      case "+":
        if(this.firstNumber + this.secondNumber == this.resultNumber) {
          if(arg == 'correct') {
            this.resultMessage = "Correct!";
            this.score++;
          } else {
            this.resultMessage = "Wrong!";
            this.score--;
          }
        }

        if(this.firstNumber + this.secondNumber != this.resultNumber) {
          if(arg == 'wrong') {
            this.resultMessage = "Correct!";
            this.score++;
          } else {
            this.resultMessage = "Wrong!";
            this.score--;
          }
        }
    }

   if(!this.checkScore()) {
    setTimeout( () => { this.setValues(); }, 1000);
   } else {
     this.resultMessage = "You Won!";
   }
  }

  checkScore(): boolean {
    return this.score > 9;
  }

}