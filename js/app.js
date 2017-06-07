var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
    }
};


//Create a new object to use with the onclick for the buttons

var handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = "";
        view.displayTodos();
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
          
            var todoTextWithCompetion = "";
            
            if(todoList.todos[i].completed === true) {
                todoTextWithCompetion = "(x) " + todoList.todos[i].todoText;
            } else {
                todoTextWithCompetion = "( ) " + todoList.todos[i].todoText;
            }
            
            todoLi.textContent = todoTextWithCompetion;
            
            todosUl.appendChild(todoLi);    //Append the li to the ul element
        }
    }
}