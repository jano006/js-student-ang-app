import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentEditComponent } from './components/students-edit/students-edit.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent, StudentEditComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'angular-app';
}
