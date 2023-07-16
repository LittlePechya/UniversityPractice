document.addEventListener('DOMContentLoaded', function () {
    const thumbnailImages = document.querySelectorAll('.small-image');
    const bigImage = document.querySelector('.big-image');

    thumbnailImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            const thumbnailSrc = image.getAttribute('src');
            const zoomedSrc = thumbnailSrc.replace('small', '');
            bigImage.src = zoomedSrc;
        });
    });
});
