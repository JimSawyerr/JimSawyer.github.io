const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
const i=Math.floor(Math.random()*500)+1 ;
const j=Math.floor(Math.random()*500)+1 ;

b.style.left=i+"px"
b.style.top=j+"px"


}
const a = document.querySelector('button.button--yes')
a.addEventListener("click", Click);
function Click(){
   alert('Thank you leigh<3')
    

}
