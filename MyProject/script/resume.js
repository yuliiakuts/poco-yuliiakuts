let images = [
    {
        sors: "/MyProject/img/photo_small/23.jpg",
        head: "About me",
        text: "<ul><li>Age: 44</li><li>Height: 175sm</li><li>Weight: 79kg</li></ul>"
    },
    {
        sors: "/MyProject/img/photo_small/21.jpg",
        head: "Languages",
        text: "<ul><li>Ukrainian</li><li>English</li><li>French</li></ul>"
    },
    {
        sors: "/MyProject/img/photo_small/25.jpg",
        head: "Skills",
        text: "<ul><li>Driving</li><li>Fishing</li><li>Football</li></ul>"
    }
];

let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let h2Tag = document.getElementsByTagName("h2")[0];
let pTag = document.getElementById("description");
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

imgTag.src=images[counter].sors;
h2Tag.innerHTML=images[counter].head;
pTag.innerHTML=images[counter].text;

prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);

function slideToNext(){
    //console.log(counter+" >");
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter].sors;
        let nextSlideH2 = images[counter].head;
        let nextSlideP = images[counter].text;
        imgTag.src = nextSlide;
        h2Tag.innerHTML = nextSlideH2;
        pTag.innerHTML = nextSlideP;
    }
}

function slideToPrev(){
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter].sors;
        let prevSlideH2 = images[counter].head;
        let prevSlideP = images[counter].text;
        imgTag.src = prevSlide;
        h2Tag.innerHTML = prevSlideH2;
        pTag.innerHTML = prevSlideP;
    }
}

function slide(){
    let currentSlide = images[counter];

}