import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleService } from './sample.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'php-ng-ingtrn';

  constructor(private http: HttpClient) {}

  onClickk() {  
    let data = {
      name: "Kamalraj",
      age: "24",
      skill: "techie"
    }
    console.log(this.http.post("https://test.blackitechs.in/getContacts/getContacts.php", data).subscribe((val: any) => {
      console.log("Value :", val)
    }));
  }

}
