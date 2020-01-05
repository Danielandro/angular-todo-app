import { Component, OnInit } from "@angular/core";
import Todo from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor() {}
  Todos: Todo[];
  ngOnInit() {
    this.Todos = [
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
