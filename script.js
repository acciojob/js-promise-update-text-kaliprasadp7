//your JS code here. If required.
let fc = new Promise((resolve) => {
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)
	document.getElementById("output").innerHTML="Hello, world!";
})