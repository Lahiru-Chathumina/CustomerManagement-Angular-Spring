import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],   //import RouterLink
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'] 
})
export class NavComponent {

}
