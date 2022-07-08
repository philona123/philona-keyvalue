const weather = true;
const date = new Promise((resolve, reject) => {
	if(weather) {
  	const dateDetails = {
    	name:"starbucks",
      location:"delhi"
    
    };
    resolve(dateDetails)
  }
  else{
  	reject(new Error('Bad weather, so cancel date'))
  }
});


const orderUber = dateDetails => {
	return new Promise((resolve, reject) => {
  	const message= `get me an uber to ${dateDetails.location}, we are going on a date`;
    resolve(message)
  });

}

const myDate = ()=>{
	date
  .then((done)=>{
  	console.log('we are going on a a date');
    
    console.log(done);
    orderUber(done).then(message => {console.log(message)})
  	}
    )
  .catch(error =>
  console.log(error.message)
  )
};
console.log("hi there");
setTimeout(()=>{
console.log("bye")
},0);
myDate();


