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



function dummyIdeas(data) {
  //showing ideas in a grid as layout for the page
  const main = document.querySelector('main');
  const killSwitch = document.querySelector('button');
  

  //iterating over the Json to display the ideas on the page in a grid
  for (let i = 0; i < data.length; i++) {

    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');

    heading.textContent = data[i].title;
    para.textContent = data[i].body;


    

    
    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    
  }
  

  killSwitch.onclick = hotSwap

  function hotSwap(e){
    
    e.preventDefault();


    
    if (main.style.display === "none") {
      main.style.display = "flex";
    } else {
      main.style.display = "none";
    }

    
  }
    




//before moving on the next core phase and make a new js file for the functions
/**
 * need to make sure that:
 * 
 * i can change the elements in the main tag to somthing else without loading the page or refreshing the page(this sounds easy but probably will give me trouble for no reason.)
 * next challenge: make the page SPA
 */



}