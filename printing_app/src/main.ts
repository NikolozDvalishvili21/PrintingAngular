import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';
import routes from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';

// Bootstrap the application with modern configuration
bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideRouter(routes), // Provide the router with your defined routes
  ],
}).catch((err) => console.error(err));
