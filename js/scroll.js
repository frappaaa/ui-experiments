// pick the h1 tag

const h1 = document.querySelector("h1")

// and when i scroll, calculate how big the font size should be

window.addEventListener("scroll", function() {
    const pixels = window.pageYOffset

    const fontWeight = pixels * 0.4 + 100
    const fontWidth = pixels * 0.4 + 100

    h1.style.fontVariationSettings = ` "wght" ${fontWeight}, "wdth" ${fontWidth} `
})