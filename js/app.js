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
    }
};