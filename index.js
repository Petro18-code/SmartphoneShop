function h1() {
    let changeH1 = document.querySelector('h1')
    changeH1.innerText = "Petro's Phone Shop"
}

function changeBackgroundgColor() {
    const changeBgColor = document.querySelector("body")
    changeBgColor.style.backgroundColor = "green"
}

function changeAddress() {
    const address = document.querySelector("#address")
    address.innerText = "Viale della Primavera, 194"
}

function addClass() {
    let aTags = document.querySelectorAll('a')
    for(let i = 0; i < aTags.length; i++) {
        aTags[i].classList.add("classe")
    }
}

function toggleClass() {
    let imgs = document.querySelectorAll('.images')
    for(let i = 0; i < imgs.length; i++) {
        const img = imgs[i]
        img.classList.toggle('hidden')
    }
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}

function setRandomColor() {
    const randomColor = getRandomColor()
    let prices = document.querySelectorAll('.price')
    for(let i = 0; i < prices.length; i++) {
        let singlePrice = prices[i]
        singlePrice.style.color = randomColor
    }

}