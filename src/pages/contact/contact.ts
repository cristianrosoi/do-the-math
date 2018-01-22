import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  facebookProfile: string = "facebook.com/cristian.rosoi";
  linkedinProfile: string = "linkedin.com/in/cristianrosoi";
  githubProfile: string = "github.com/cristianrosoi";
  email: string = "cristian.rosoi@gmail.com";

}
