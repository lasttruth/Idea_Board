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

  let finalGroup;
  finalGroup = data
  updateDisplay();
  

  finalGroup = [];


  function updateDisplay(){

    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }


    if (finalGroup.length === 0) {
      const para = document.createElement('p');
      para.textContent = "Whoa there bucko How did you find this page!? Theres Nothing here big Fella";
      main.appendChild('p');
    } else {
      for (let i = 0; i < finalGroup.length; i++) {
        showIdeaList(finalGroup[i]);
        
      }
    }
  }  

  function showIdeaList(data){

    

      const section = document.createElement('section');
      const heading = document.createElement('h2');
      const para = document.createElement('p');
  
      heading.textContent = data.title;
      para.textContent = data.body;
  
  
      
      
      
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
    

  

  function showIdeaDetails(e){

    e.preventDefault();


    //hotSwap(e);
     updateDisplay();
    


  }


//before moving on the next core phase and make a new js file for the functions
/**
 * need to make sure that:
 * 
 * i can change the elements in the main tag to somthing else without loading the page or refreshing the page(this sounds easy but probably will give me trouble for no reason.)
 * next challenge: make the page SPA
 */



}