const b = document.querySelector('button.button--no');
const a = document.querySelector('button.button--yes');
const container = document.querySelector('.container');

b.addEventListener("click", clickNo);
function clickNo() {
   const position = getRandomPosition();
   const i = position.x;
   const j = position.y;
 
   b.style.left = i + "px";
   b.style.top = j + "px";
 
   displayRandomGIF();
   updateButtonPosition(i, j);
 }
 
 function getRandomPosition() {
   const containerRect = container.getBoundingClientRect();
   const containerWidth = containerRect.width;
   const containerHeight = containerRect.height;
   const buffer = 20; // Buffer zone size in pixels
 
   const randomEdge = Math.floor(Math.random() * 4); // Randomly choose the edge (0, 1, 2, or 3)
   let x, y;
 
   switch (randomEdge) {
     case 0: // Top edge
       x = Math.floor(Math.random() * (containerWidth - buffer * 2)) + buffer;
       y = buffer;
       break;
     case 1: // Right edge
       x = containerWidth - buffer;
       y = Math.floor(Math.random() * (containerHeight - buffer * 2)) + buffer;
       break;
     case 2: // Bottom edge
       x = Math.floor(Math.random() * (containerWidth - buffer * 2)) + buffer;
       y = containerHeight - buffer;
       break;
     case 3: // Left edge
       x = buffer;
       y = Math.floor(Math.random() * (containerHeight - buffer * 2)) + buffer;
       break;
   }
 
   return { x, y };
 }
 
 

 a.addEventListener("click", clickYes);

function clickYes() {
  const gifUrl = "https://media.giphy.com/media/l41lOtw1sHjHcgLWo/giphy.gif"; // Replace with the direct URL of the desired Tenor GIF
  const gifElement = document.createElement("img");
  gifElement.src = gifUrl;
  gifElement.classList.add('yes-gif');
  
  // Append the GIF element to the body or any desired container
  document.body.appendChild(gifElement);

  setTimeout(function() {
    // Remove the GIF element after a certain delay (e.g., 3 seconds)
    gifElement.remove();

    // Show the alert message
    alert("eto fb ko oh add mo. click mo okay");

    // Navigate to the specified URL
    window.location.href = "https://www.facebook.com/JimSawyer0521";
  }, 1500); // Adjust the delay as needed (in milliseconds)
}

 
const gifUrls = [
  "https://media.tenor.com/qMwy9pHiCkEAAAAi/peach-goma-peach-and-goma.gif",
   "https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif",
   "https://media.giphy.com/media/bSm7ui6ExVru4qamhf/giphy.gif",
   "https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif",
   "https://media.giphy.com/media/wkW0maGDN1eSc/giphy.gif",
   "https://media.tenor.com/zD_Vu-5ohlAAAAAC/coffee-morning.gif",
   "https://media.giphy.com/media/QTrG6mjkHEkpFR3DqX/giphy.gif",
   "https://media3.giphy.com/media/iIYtEOyM8oRkodXUUX/giphy.gif?cid=ecf05e47zaizcgngg757obk3yd14t2kras55gbt554kvhe3h&ep=v1_gifs_related&rid=giphy.gif&ct=g"
 
 ];
 
 let gifIndex = 0;
 
 function displayRandomGIF() {
   const gifUrl = gifUrls[gifIndex];
   const gif = document.createElement('img');
   gif.src = gifUrl;
   gif.classList.add('random-gif');
 
   gif.onload = function () {
     const containerRect = container.getBoundingClientRect();
     const containerWidth = containerRect.width;
     const containerHeight = containerRect.height;
 
     const randomX = Math.floor(Math.random() * (containerWidth - gif.width));
     const randomY = Math.floor(Math.random() * (containerHeight - gif.height));
 
     gif.style.left = randomX + "px";
     gif.style.top = randomY + "px";
   };
 
   const existingGifs = document.querySelectorAll('.random-gif');
   existingGifs.forEach(existingGif => existingGif.remove());
 
   container.appendChild(gif);
 
   gifIndex++;
   if (gifIndex === gifUrls.length) {
     gifIndex = 0;
   }
 }
 
 
 
