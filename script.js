function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `It is ${hour} o'clock.`
    if (hour >= 0 && hour < 12){
        img.src = 'Images/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if(hour >= 12 && hour <= 18){
        img.src = 'Images/afternoon.png'
        document.body.style.background = '#b98446f'
    } else {
        img.src = 'Images/night.png'
        document.body.style.background = '#515154'
    }
}