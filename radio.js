
const track = document.querySelector(".carousel-track"); 
const slides = Array.from(track.children); 
const nextBtn = document.querySelector(".carousel-right-btn");
const prevBtn = document.querySelector(".carousel-left-btn"); 
const carouselNav = document.querySelector(".carousel-nav"); 
const radioDotsNav = Array.from(carouselNav.children);//here accessing Array >children in carousel-nav n


////>>sizing of img/ .carousel-slides.
const slideWidth = slides[0].getBoundingClientRect().width; 
                       

//>>slides beside each other
const setSlidePosition = (slide, index) => { //for eacxh slide rin the function>>
    slide.style.left = slideWidth * index + 'px';//moves left as per px set in slideWidth
};

//calls above function!!>>
slides.forEach(setSlidePosition) //abbreviated version of forEach loopcode 
                              

 

//>> moves slides on click of Left arrow//\\
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
   currentSlide.classList.remove("current-slide"); //removes current slide class and alows move to next slide  
    targetSlide.classList.add("current-slide"); //moves to next slid.
}


    // //>>Dots current-slide color indicated on click
        const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove("current-slide");
        targetDot.classList.add("current-slide");
        }
    // ///ends

    ////>>Hide / Show L & R carousel arrows 
    const hideArrows = (slides, prevBtn, nextBtn, targetIndex) => { 
        
        if (targetIndex === 0) {
         prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }

} 
//>>
//>>previous btn//>>>>>>>
///
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide"); 
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = carouselNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

        
    //functions called 
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideArrows(slides, prevBtn, nextBtn, prevIndex);
});
//// ends prevBtn function



// >>>
///nextSlide---
///
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide"); 
    const nextSlide = currentSlide.nextElementSibling; // //finds next sibling to .current-slide in track
    const currentDot = carouselNav.querySelector(".current-slide")
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    //functions called here
    moveToSlide(track, currentSlide, nextSlide) 
    updateDots(currentDot, nextDot);
    hideArrows(slides, prevBtn, nextBtn, nextIndex);
})

//>>>>
////dotsNav btn
///>>>>>

carouselNav.addEventListener('click', e => {
    //which indicator clicked on
    const targetDot = e.target.closest("button");
    if(!targetDot) return; //return here means exit out of function 
                            //else if it is a button == run function

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = carouselNav.querySelector(".current-slide");
    const targetIndex = radioDotsNav.findIndex(dot => dot === targetDot); //<<loops thorugh each item in array...for each dit in dots
    const targetSlide = slides[targetIndex];
    
    //functions called 
    moveToSlide(track, currentSlide, targetSlide); 
    updateDots(currentDot, targetDot);
    hideArrows(slides, prevBtn, nextBtn, targetIndex)
  


})

