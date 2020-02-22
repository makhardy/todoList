
// Through JAvaScript --------------------------------------------

// function addTodo() {
// 	var inputValue = document.getElementById("getValue").value;
// 	var beforeClearValue = document.getElementById("tobtn").innerHTML = inputValue;
// 	alert(beforeClearValue);
// 	var afterClearVaue = document.getElementById("getValue").value = '';
// 	alert(afterClearVaue);
// }


// ---------------------Vue js----------------------------------//

new Vue({
  el: '#app1',
  data: {
    newTodoText: '',
    todos: [],
    nextTodoId: 0
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
      	id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    removeItem: function(index) {
    	this.todos.splice(index, 1);
    }
  }
})