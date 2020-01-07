import { Injectable } from "@angular/core";

// injectable decorator allows service to be injected into components
@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  // get the Todos
  getTodos() {
    return [
      {
        id: 1,
        title: "Do laundry",
        completed: false
      },
      {
        id: 1,
        title: "Buy cheese",
        completed: true
      },
      {
        id: 1,
        title: "Fetch water",
        completed: false
      }
    ];
  }
}
