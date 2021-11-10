//get all images with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');

//optional parameters being set for the Intersectional Observer
const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
}

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);

//Loop through each img and check status and load if necessary
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
  } 
  else {//Load all images if not supported
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }