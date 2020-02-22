
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
	methods: {
		addTodo: function() {
			var inputValue = document.getElementById("getValue").value;
			var beforeClearValue = document.getElementById("tobtn").innerHTML = inputValue;
			var afterClearVaue = document.getElementById("getValue").value = '';
		}
	}
})