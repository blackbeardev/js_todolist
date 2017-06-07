var todoList = {
    todos: [],
    displayTodos: function() {
        if(this.todos.length === 0) {
            console.log("You have no todos");
        } else {
            console.log("My todos: ");
            for(var i = 0; i < this.todos.length; i++) {
                if(this.todos[i].completed === true) {
                    console.log(this.todos[i].todoText + " " + "(x)");
                } else {
                    console.log(this.todos[i].todoText + " " + "()");
                }
            }   
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var completedTodos = 0;
        var totalTodos = this.todos.length;
        
        //Get the number of completed todos
        for(var i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        
        //if everything is true, make everything false
        if(completedTodos === totalTodos) {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            } 
        } else {
            //If everything isn't true, Make everything true
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};


//Create a new object to use with the onclick for the buttons

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function() {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = "";
    }
};

//Create a new object for viewing the todos.
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        //Clear the unordered list before the new li elements are added.
        todosUl.innerHTML = "";
        
        for(var i = 0; i < todoList.todos.length; i++) {

            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            
            var todoTextWithCompetion = "";
            
            if(todo.completed === true) {
                todoTextWithCompetion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompetion = "( ) " + todo.todoText;
            }
            
            todoLi.textContent = todoTextWithCompetion;
            
            todosUl.appendChild(todoLi);    //Append the li to the ul element
        }
    }
}