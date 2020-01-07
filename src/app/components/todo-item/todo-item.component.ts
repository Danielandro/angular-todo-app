import { Component, OnInit, Input } from "@angular/core";
import Todo from "src/app/models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  // add Input decorator to pass data
  @Input() todo: Todo;
  ngOnInit() {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  }

  // onToggle
  onToggle(todo) {
    todo.completed = !todo.completed;
    console.log(todo);
  }

  // onDelete
  onDelete(todo) {
    console.log("Deleted");
  }
}
