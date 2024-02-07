document.querySelector('.container-percent .question-circle').addEventListener('click', function() {
    this.previousElementSibling.classList.remove('disable')
    this.classList.add('disable')
    setTimeout(()=>{
        document.querySelector('.container-percent').classList.add('hide')
        document.querySelector('.cow').classList.add('hide')
        document.querySelector('.container-main').classList.remove('hide')
    }, 2000)
    setTimeout(()=>{
        document.getElementById('first-modal').classList.remove('hide')
    }, 3500)

})

document.querySelector('#first-modal .button-next').addEventListener('click', function() {
    this.parentElement.classList.add('hide')
    showAllButtons()
})

let buttonsDelay = 200
let buttonsDelayStep = 200
function showAllButtons() {    
    document.querySelectorAll('.open-window').forEach(el=>{
        setTimeout(()=>{el.classList.add('show')}, buttonsDelay)
        buttonsDelay = +buttonsDelay + +buttonsDelayStep
    })
}

let timerClose
document.querySelectorAll('.open-window').forEach(el=>{
    el.addEventListener('click', function() {
        clearTimeout(timerClose)
        setTimeout(()=>{document.getElementById('second-modal').classList.remove('hide')}, 50)
        updateModal(el.dataset.number)
        timerClose = setTimeout(()=>{document.getElementById('second-modal').classList.add('hide')}, 10000)
    })
})
document.querySelectorAll('.close-modal').forEach(el=>{
    el.addEventListener('click', function() {
        clearTimeout(timerClose)
        this.closest('.modal').classList.add('hide')
    })
})

function resetPage() {
    let elem = document.querySelector('.container-percent .question-circle')
    elem.previousElementSibling.classList.add('disable')
    elem.classList.remove('disable')
    document.querySelector('.container-percent').classList.remove('hide')
    document.querySelector('.cow').classList.remove('hide')
    document.querySelector('.container-main').classList.add('hide')    
    document.getElementById('first-modal').classList.add('hide')
}


let icon = document.querySelector('#second-modal .icon')
let title = document.querySelector('#second-modal .title')
let inner = document.querySelector('#second-modal .inner')

function updateModal(num) {
    console.log(icon, icon)
    icon.src = `images/round-icon${num}.svg`
    title.src = `images/modal/t${num}.svg`
    inner.src = `images/modal/bl${num}.svg`
}