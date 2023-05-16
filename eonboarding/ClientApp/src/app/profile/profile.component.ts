import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUserName: string = '';
  loggedInUserEmail: string = '';
  loggedInUserPhone: string = '';
  loggedInUserAddress: string = '';
  dateOfBirth: string = '';
  gender: string = '';
  nationality: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Fetch the user's profile information from the AuthService or relevant service
    this.loggedInUserName = "Annu";
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
    this.loggedInUserPhone = '1234567';
    this.loggedInUserAddress = '';
    this.dateOfBirth = '19 Nov';
    this.gender = 'Female';
    this.nationality = 'Indian';
  }

}