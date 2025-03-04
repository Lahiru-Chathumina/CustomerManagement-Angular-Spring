import { Routes } from '@angular/router';
import { AddCustomerComponent } from './common/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './common/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './common/delete-customer/delete-customer.component';
import { BodyComponent } from './common/body/body.component';
import { FooterComponent } from './common/footer/footer.component';

export const routes: Routes = [
    {
        path:"home",
        component:BodyComponent
    },
    {
        path:"AddCustomer",
        component:AddCustomerComponent
    },
    
    {
        path:"updateCustomer",
        component:UpdateCustomerComponent
    },
   {
    path:"DeleteCustomer",
    component:DeleteCustomerComponent

   }


];
