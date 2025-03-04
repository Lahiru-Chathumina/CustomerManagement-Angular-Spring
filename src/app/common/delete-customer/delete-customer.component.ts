import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})

export class DeleteCustomerComponent {
  public customer: any = {
    name: "",
    id: "",
    email: ""
  };

  constructor(private http: HttpClient) {}


  deleteCustomer(id: string) {

    console.log(this.customer)
    this.http.delete("http://localhost:8080/customer/${id}`", this.customer).subscribe(
      data => {
        alert("Customer Delete");
      }
    );
  }
}
