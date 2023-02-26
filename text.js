const btn = document.querySelector(".btn");
const idAdvice = document.querySelector(".id-advice")
const texto = document.querySelector(".advices")



function advAPI(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) =>{
         return response.json()
        
    
    }).then((response) =>{
        console.log(response)
        const adv = response.slip.advice;
        const advID = response.slip.id;
        texto.textContent = adv;
        idAdvice.textContent = advID;


    })
    
    .catch((erro) =>{
        return console.log(erro)
    })
}


btn.addEventListener("click",function(){
  async function Init(){
    await advAPI();
  }
 
  Init();

})