var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}



// navbar
// document.getElementById('toggle-menu').addEventListener('click', function() {
//   document.getElementById('menu-area').classList.toggle('active');
// });


function showSidebar()
{
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='flex';
  const show=document.querySelector('#show')
  show.style.display=('none');
  const hide=document.querySelector('#hide');
  hide.style.display=('block')
}


function hideSidebar()
{
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
  const show=document.querySelector('#show')
  show.style.display=('block');
  const hide=document.querySelector('#hide');
  hide.style.display=('none')
  
}


// slider ke script
const slides = document.querySelectorAll(".cntnt")
var counter=0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`
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
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}

const autoSlide = () => {
    goNext();
    setTimeout(autoSlide, 2000); // Adjust the delay (in milliseconds) as needed
};

//autoSlide();