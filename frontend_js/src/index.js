const api_url = 'http://localhost:3000'
console.log("hello world")

// test that we can get data from the backend
//const URL = 'http://localhost:3000';
//fetch(`${URL}/test`)
//  .then(response => response.json())
//  .then(parsedResponse => console.log(parsedResponse));
// ^^ 200 noice




//fetch the api controller with the ideas
fetch(`${api_url}/ideas`)
  .then(response => response.json())
  //calling a function to display on html
  .then(data => dummyIdeas(data))
  .catch(err => console.log(err));


//fetch image of the post it do and place it in the grid as a background
function fetchBlob(){
 let img_url = 'asset/post-it'

 fetch(url)
 .then(response => response.blob())
 .then(pic => girdPic(pic))
 .catch(err => console.log(err));

 let postNote = URL.createObjectURL(pic)

 dummyIdeas(postNote, data);
}

function dummyIdeas(data) {
  //showing ideas in a grid as layout for the page
  let something = document.getElementById('placeholder');
  for (let i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.className += "grid-item"
    div.innerHTML = 'Hey Check this out: ' + data[i].title + '<br> ' + data[i].body;
    something.appendChild(div);
    
  }
  
}


//showing the post it note to show it behind the text
