import { Component, OnInit } from "@angular/core";
import Todo from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  Todos: Todo[];

  ngOnInit() {
    this.Todos = this.todoService.getTodos();
  }
}
