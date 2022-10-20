// function changePicture(){
//     let image = document.querySelector('img:hover');
//     image.style.cursor = "pointer";
//     let img_attr = image.getAttribute('src');
//     let img_gif = img_attr.replace('photo_main', 'photo_gif');
//     image.setAttribute('src', img_gif); 
//     image.addEventListener('mouseout', function(){ 
//         let img_attr = image.getAttribute('src');
//         // console.log("src = " + img_attr);
//         let img_main = img_attr.replace('photo_gif', 'photo_main' );
//         //console.log("src = " + img_main);
//         image.setAttribute('src', img_main);   
//     });   
//     image.addEventListener('click', function(){ 
//         console.log(image);
//         image.style.display = "none";
//         // info.style.display = "block";
//     });
// }

function changePicture() {
    let image_ = document.querySelector('section:hover');
    image_.style.cursor = "pointer";
    let image = image_.querySelector('img');
    let img_attr = image.getAttribute('src');
    let img_gif = img_attr.replace('photo_main', 'photo_gif');
    image.setAttribute('src', img_gif); 
    image_.addEventListener('mouseout', function(){ 
        let image = image_.querySelector('img');
        let img_attr = image.getAttribute('src');
        // console.log("src = " + img_attr);
        let img_main = img_attr.replace('photo_gif', 'photo_main' );
        //console.log("src = " + img_main);
        image.setAttribute('src', img_main);   
    });   
    enimage.addEventLister('click', function(){ 
        let image = image_.querySelector('img');
        console.log(image);
        image.style.display = "none";
        let info = image_.querySelector('article');
        info.style.display = "block";
    });
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

