const listItems = document.querySelectorAll("li")
const photos = document.querySelectorAll("img")
listItems.forEach((li, i) => {
    li.addEventListener('mouseenter', () => {
        photos[i].classList.add('intro')
    })
    li.addEventListener('mouseleave', () => {
        photos[i].classList.remove('intro')
    })
    li.addEventListener('mousemove', (e) => {
        photos[i].style.left = e.clientX * .5 - 200+ 'px'
        photos[i].style.top = e.clientY * .5 - 200 + 'px'
    })
})