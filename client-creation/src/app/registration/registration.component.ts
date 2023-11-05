import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private http: HttpClient) {}
  password!: string;
  repeatPassword!: string;
  isClientCreated = false;

  ngOnInit() {
    this.getClientStaticData();
  }

  getClientStaticData() {
    this.http.get('assets/client-static-data.json').subscribe((data) => {
      console.log(data);
    });
  }

  onButtonClick() {
    this.isClientCreated = true;
  }
}
