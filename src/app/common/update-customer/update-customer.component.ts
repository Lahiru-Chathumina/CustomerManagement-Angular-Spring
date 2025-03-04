import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-customer',
  imports:[HttpClientModule,FormsModule,CommonModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})

export class UpdateCustomerComponent {
  public customer: any = {
    name: "",
    id: "",
    email: ""
  };

  constructor(private http: HttpClient) {}

  updated() {
    console.log(this.customer)
    this.http.put("http://localhost:8080/update", this.customer).subscribe(
      data => {
        alert("Customer updated");
      }
    );
  }
}
