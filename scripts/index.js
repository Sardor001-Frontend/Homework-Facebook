const users_arr = JSON.parse(localStorage.getItem('users')) || [];

reload(users_arr);

function reload(arr) {
	for (let item of arr) {
		document.body.innerHTML += `
			<h2 class= "lord">${item.name}</h2>
			<a href="/user.html?id=${item.id}">
				<button class= "show">show</button>
			</a>
			<hr class= "line">
			<style>
			h2 {
				text-align: center;
				font-family: sans-serif;
			}
			
			button {
				width: 180px;
    			height: 45px;
    			background-color: blue;
    			color: white;
    			font-size: 16px;
    			border: none;
    			cursor: pointer;
    			border-radius: 5px;
				margin-left: 661px;
			}

			.line {
				width: 450px;
			}
			</style>
		`
	}
}



