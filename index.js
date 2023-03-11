const btnEl = document.getElementById("btn")
const jokeEl=document.getElementById("joke")
const apikey="6HV2lyYvetuL74h/49CvXw==zGHnx4lakbmqP3bV"
  
const options={
    method:"GET",
    headers:{
        "X-APi-key":apikey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getJoke(){

    try {
        jokeEl.innerText="Uploading...";
    btnEl.disabled=true;
    btnEl.innerText="Loading...";
const  response=await fetch(apiURL,options);
const data= await response.json();
btnEl.disabled=false;
btnEl.innerText="Tell me a joke";
jokeEl.innerText=data[0].joke;

        
    } catch (error) {
        jokeEl.innerText="An error happened";
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
      console.log(error);  
    }
    
}

btnEl.addEventListener("click",getJoke)