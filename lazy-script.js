const lazyImgELs = document.querySelectorAll('[data-lazy-img]');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

const showImg = (img) => {
    img.src = img.getAttribute('data-lazy-img');
}

const handleImg = (myImg, observer) => {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            showImg(myImgSingle.target)
        }
    })
}

const observer = new IntersectionObserver(handleImg, options);


lazyImgELs.forEach(img => {
    observer.observe(img)
})

$('div[data-preview-slider]').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 2500,
    hover: false,
    draggable: false,
})

const lazyPreviewImgELs = document.querySelectorAll('[data-lazy-img-preview]');

lazyPreviewImgELs.forEach(img => {

    img.onload = () => {
        const newImg = new Image();
        newImg.src = img.getAttribute('data-lazy-img-preview');

        newImg.onload = () => {
            img.src = newImg.src;
        }
    }
})