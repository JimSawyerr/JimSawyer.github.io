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
   alert("I'm not gonna lie \nI will stay by your side\nEven in your lows and highs\nI will not gonna say good bye\n\nYou don't need to ask why\nI want to treat you right\nLet me be your guiding light\nLike a star shining bright")
    
window.location.href = "beshie.html"
}
