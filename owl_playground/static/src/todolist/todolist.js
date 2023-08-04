/** @odoo-module **/

import { Component,useState} from "@odoo/owl";
import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    static template="owl_playground.TodoList";
    static components= {Todo};
    setup(){
        this.id=0;
        this.todoList=useState([]);
        useAutofocus("input");
    }
    addTodo(ev)
    {
        if (ev.keyCode === 13 && ev.target.value != "")
        {
            this.todoList.push({id:this.id++,description:ev.target.value,done:false});
            ev.target.value="";
        }
    }

    toggleState(todoId) {
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.done = !todo.done;
        }
    }
    removeTodo(elemId) {
        const Index= this.todoList.findIndex((elem) => elem.id === elemId);
        if (Index >= 0) {
            this.todoList.splice(Index, 1);
        }
    }
}