var images = document.images;
var imagesTotalCount = images.length;
var imagesLoaderCount = 0;
var perc = document.getElementById('perc');
var preloader = document.getElementById('preloader');



for(var i = 0; i < imagesTotalCount; i++)
{
    var imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
}



function imageLoaded(){
    imagesLoaderCount++;

    perc.innerHTML = (( (100 / imagesTotalCount) * imagesLoaderCount ) << 0) + '%';
    console.log(perc);
    if (imagesLoaderCount >= imagesTotalCount) {
        setTimeout(function () {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1000);
    }
}











