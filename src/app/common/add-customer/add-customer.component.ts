import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [HttpClientModule ,FormsModule,CommonModule],
  templateUrl:'./add-customer.component.html',
  styleUrl:'./add-customer.component.css'
})
// =========================================================================================================================
export class AddCustomerComponent {
public customer:any={
  name:"",
  email:"",
  address:"",
  phone:""

};
// ============================================================================================================================
constructor( private http:HttpClient){}
// ==============================================================================================================================
          addCustomer(){
            console.log(this.customer)
            this.http.post("http://localhost:8080/add",this.customer).subscribe(data=>{
              alert("customer add");
            });

            }
}
