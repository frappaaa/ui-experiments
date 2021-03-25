let hours = document.querySelectorAll('.hour')

const update = function(){
    hours.forEach(hour => {
        //Display orario diverso per la singola timezone
        let timezone = hour.getAttribute('data-timezone')
        let now = luxon.DateTime.now().setZone(timezone)
        hour.textContent= now.toFormat('HH:mm:ss')

        //colore diverso per fine della giornata
        let timeDay= parseInt(now.toFormat('H'))
        if(timeDay<9 || timeDay>18){
            hour.style.color = 'red'
        }
    })
}

setInterval(function() {
    update()
}, 1000)