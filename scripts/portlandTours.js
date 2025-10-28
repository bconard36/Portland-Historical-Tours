// Hero Image Cycler for Main Page 
const IMAGES = [
  "images/portland_landscape.png",
  "images/Portland%20Historical%20Tours.jpg",
  "images/StJohnsBridge.jpg",
  "images/portland_aerial.jpg",
  "images/portland_clear_sky.jpg",
  "images/portland_old_town_sign.webp"
]

/** 
 * Create a counter object that cycles through a list of images.
 * @param {function} callback - Function to call whenever the counter changes.
 * @returns {object} Object with update, and get methods.
 */
function makeACycler(callback) {
  let counter = 0;

  function next() {
    counter++;
    callback(counter); // Calls function passed to counter 
  }

  function get() {
    return counter;
  }

  return {
    next: next,
    get
  };
}

/**
 * Initializes the image cycler to display images
 * @param {Array} images - Array of image URLs to cycle through.
 * @param {HTMLElement} img - The <img> element to update.
 */
let currentImageCounter;
function imageCycler(images, img) {

  currentImageCounter = makeACycler(function(count) {
    let index = count % images.length; // Wrap around index 
  
    img.src = images[index];
    
  });

  currentImageCounter.next();

}

document.addEventListener("DOMContentLoaded", () => {
  let heroImg = document.querySelector("#hero img");
  imageCycler(IMAGES, heroImg);
  setInterval(() => currentImageCounter.next(), 3000);
})
