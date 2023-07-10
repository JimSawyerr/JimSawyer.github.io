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
   alert(" Just take you'r time to heal beshiee. i'll stay here. im glad that i met you cuz of you im happy again wag mo muna ako friend zone okay. im gonna take a risk sayo hehe lets vibe together beshiee <3 ")
    
window.location.href = "beshie.html"
}
