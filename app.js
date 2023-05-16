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
   alert("HOYYYY LALA!!!, you know what I've had an incredible time playing valorant with you, and I've really enjoyed your vibe when we're hanging out.. It feels like we're on the same wavelength. But please remember, there's absolutely no pressure at all, and if you're not comfortable with the idea, I completely understand. Let me know what you think!")
    

}
