 //async wait
 async function fetchText() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let json = await response.json();
    console.log(json);
 }
 
 fetchText();
 

//promises
const fetchData = new Promise((resolve, reject)=>{
  const details = fetch('https://jsonplaceholder.typicode.com/todos/1')
	resolve(details)
})
const fetchData2 = msg=>{
	return new Promise((resolve, reject)=>{
	resolve(msg.json())
})
}
const text = ()=>{
fetchData
.then(msg=>{
	fetchData2(msg)
  .then(message=>console.log(message))
  .catch(error=>console.log(error))
})
.catch(error=>{
console.log(error.message)
})
}
text()
