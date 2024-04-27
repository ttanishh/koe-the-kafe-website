const slides = document.querySelectorAll(".cntnt")
var counter=0;
slides.forEach(
    (slide,index) => {
        slide.style.left = '${index*100}%'
    }
)

const goPrev = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
};

const goNext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
};


const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform='translateX(-${counter*100}%)'
        }
    )
}

const autoSlide = () => {
    goNext();
    setTimeout(autoSlide, 2000); // Adjust the delay (in milliseconds) as needed
};

//autoSlide();