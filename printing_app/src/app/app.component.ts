import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './Pages/home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'printing_app';
}
