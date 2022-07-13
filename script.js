function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}


document.getElementById('forms').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
  //   document.getElementById('output').innerHTML = JSON.stringify(data);
  str = JSON.stringify(data);
  console.log(str);
});


// function debounce(func, timeout = 300){
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
//   function saveInput(){
//     console.log('Saving data');
//   }
//   const processChange = debounce(() => saveInput());

var button = document.getElementById("dbnc");
const debounce = (func, delay) => {
  let debounceTimer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(debounceTimer)
    debounceTimer
      = setTimeout(() => func.apply(context, args), delay)
  }
}
button.addEventListener('click', debounce(function () {
  alert("This is executing after evrey 5 seconds");
}, 5000));


function changebut() {
  document.getElementById("act").style.backgroundColor = "grey";
}
