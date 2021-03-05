const listItems = document.querySelectorAll("li")
const photos = document.querySelectorAll("img")
listItems.forEach((li, i) => {
    li.addEventListener('mouseenter', () => {
        photos[i].classList.add('intro')
    })
    li.addEventListener('mouseleave', () => {
        photos[i].classList.remove('intro')
    })
})