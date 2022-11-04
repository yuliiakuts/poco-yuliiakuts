function changePicture() {
    let image_ = document.querySelector('section:hover');
    image_.style.cursor = "pointer";
    let image = image_.querySelector('img');
    image.addEventListener('click', function(){
        console.log('Hello');
        image.style.display = "none";
        let info = image_.querySelector('article');
        info.style.display = "block";
    })
}

function restorePictire(){
    let image_ = document.querySelector('section:hover');
    console.log(image_);
    let image = image_.querySelector('img');
        console.log(image);
        image.style.display = "block";
        let info = image_.querySelector('article');
        info.style.display = "none";
}

