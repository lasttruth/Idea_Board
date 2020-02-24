const api_url = 'http://localhost:3000'
console.log("hello world")

// test that we can get data from the backend
//const URL = 'http://localhost:3000';
//fetch(`${URL}/test`)
//  .then(response => response.json())
//  .then(parsedResponse => console.log(parsedResponse));
// ^^ 200 noice





fetch(`${api_url}/ideas`)
  .then(response => response.json())
  .then(data => dummyIdeas(data))
  .catch(err => console.log(err));

function dummyIdeas(data) {
  let something = document.getElementById('placeholder');
  for (let i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Hey Check this out: ' + data[i].title + '<br> ' + data[i].body;
    something.appendChild(div);
    
  }
  
}

