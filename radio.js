
const track = document.querySelector(".carousel-track"); 
//<<holds array from .carousel-track
const slides = Array.from(track.children); 
////<<holding array children in Track aka .carousel-track

const nextBtn = document.querySelector(".carousel-right-btn");
const prevBtn = document.querySelector(".carousel-left-btn"); 
const carouselNav = document.querySelector(".carousel-nav"); 
//<<holds array of the radio buttons /children re .carousel-indicator
const radioDotsNav = Array.from(carouselNav.children);//here accessing Array >children in carousel-nav n

////\\\
////sizing of img/ .carousel-slides.
/////\\\\
const slideWidth = slides[0].getBoundingClientRect().width; 
                        //<< getBoundingClientRect() method that returns the relative positioning to viewport.
                        // const slideWidth = slideSize.width; \\\//<<<total size height and width

////\\\
//ARRANGES slides beside each other
////\\\
const setSlidePosition = (slide, index) => { //for eacxh slide rin the function>>
    slide.style.left = slideWidth * index + 'px';//moves left as per px set in slideWidth
};
//calls above function!!>>
slides.forEach(setSlidePosition) //abbreviated version of forEach loopcode 
                                // here runs above function (as above)

 
//!! moves slides on click of Left arrow
//>>........
//
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

    // //>>Hide / Show L & R carousel arrows 
    //>>>
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
                        /////! track holds array item in .carousel-track with class
                        ///.current slide
    const nextSlide = currentSlide.nextElementSibling;
    // //finds next sibling to .current-slide in track
    const currentDot = carouselNav.querySelector(".current-slide")
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide) //here calls function
    updateDots(currentDot, nextDot);
    hideArrows(slides, prevBtn, nextBtn, nextIndex);
})

//>>>>
////dotsNav btn
///>>>>>

carouselNav.addEventListener('click', e => {
    //which indicator clicked on
    const targetDot = e.target.closest("button");//e trackes eh event itself..here includes traget..

    if(!targetDot) return; //return here means exit out of function 
                            //eslse if it is a button == run function

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = carouselNav.querySelector(".current-slide");
    const targetIndex = radioDotsNav.findIndex(dot => dot === targetDot); //<<loops thorugh each item in array...for each dit in dots
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide); //here calls function

    updateDots(currentDot, targetDot);
    // console.log(targetIndex)

    hideArrows(slides, prevBtn, nextBtn, targetIndex)
    
    //     prevBtn.classList.add("is-hidden");
    //     nextBtn.classList.remove("is-hidden");

    // if (targetIndex === 0) {
    //     prevBtn.classList.add("is-hidden");
    //     nextBtn.classList.remove("is-hidden");
    // } else if (targetIndex === slides.length - 1) {
    //     prevBtn.classList.remove('is-hidden');
    //     nextBtn.classList.add('is-hidden');
    // } else {
    //     prevBtn.classList.remove('is-hidden');
    //     nextBtn.classList.remove('is-hidden');
    // }

    // //>>Dots current-slide color indicated on click
    // currentDot.classList.remove("current-slide");
    // targetDot.classList.add("current-slide")
    // ///ends



})

