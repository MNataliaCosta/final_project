carousel = (function(){
  var box = document.querySelector(".gallery");
  var next = box.querySelector(".next");
  var prev = box.querySelector(".prev");


  var counter = 0;
  var photos = document.getElementsByClassName("pic");
  // console.log(photos)
  var amount = photos.length;
  // console.log(amount)
  var current = photos[0];
  // console.log(current)

  // hide all elements and apply the carousel styling
  box.classList.add("active");


  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });

  navigate(0);

  // navigate through the carousel
  function navigate(direction) {
    // hide the old current list item
    current.classList.remove("current");

    counter = counter + direction;
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }

    if (direction === 1 &&
        !photos[counter]) {
      counter = 0;
    }

    current = photos[counter];
    current.classList.add("current");
  }
})();
