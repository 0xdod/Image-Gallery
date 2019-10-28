function changeImage(e){
    let src = e.target.getAttribute("src")
    image.setAttribute("src", src)
}
const image = document.querySelector('#image img');
const thumbnails = document.querySelectorAll("#thumbnail img");
console.log(thumbnails)
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click',changeImage))