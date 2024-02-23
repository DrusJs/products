document.querySelector('.container-percent .question-circle').addEventListener('click', function() {
    this.previousElementSibling.classList.remove('disable')
    this.classList.add('disable')
    document.querySelector('.question').classList.remove('hide')
    setTimeout(()=>{
        document.querySelector('.container-percent').classList.add('hide')
        document.querySelector('.container-main').classList.remove('hide')
    }, 2000)
    setTimeout(()=>{
        document.querySelector('.main-zoom-text').classList.remove('hide')
        inactivityTime()
    }, 2500)
})

document.querySelector('.question').addEventListener('click', function() {
    this.classList.add('hide')
    document.querySelector('.container-main').classList.add('bg')
    document.querySelector('.cow').classList.add('hide')
    document.querySelector('.main-zoom-text').classList.add('hide')
    document.querySelector('.container-main').classList.remove('zoom')
    setTimeout(()=>{
        document.getElementById('first-page').classList.remove('hide')
    }, 2000)
})

document.querySelector('#first-page').addEventListener('click', function() {
    this.classList.add('hide')
    setTimeout(()=>{
        document.querySelector('#first-modal').classList.remove('hide')
    }, 300)
    
})
document.querySelector('#first-modal').addEventListener('click', function() {
    this.classList.add('hide')
    showAllButtons()
})

let buttonsDelay = 200
let buttonsDelayStep = 200
function showAllButtons() {    
    document.querySelectorAll('.open-window').forEach(el=>{
        setTimeout(()=>{el.classList.add('show')}, buttonsDelay)
        buttonsDelay = +buttonsDelay + +buttonsDelayStep
    })
    document.querySelector('.back-button').classList.remove('hide')
    buttonsDelay = 200
    buttonsDelayStep = 200
    setTimeout(()=>{
        document.querySelectorAll('.open-window').forEach(el=>{
            setTimeout(()=>{el.classList.add('anim')}, buttonsDelay)
            buttonsDelay = +buttonsDelay + +buttonsDelayStep
        })
    }, 3000)
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
    inactivityTime(false)
    elem.previousElementSibling.classList.add('disable')
    elem.classList.remove('disable')
    document.querySelector('.container-percent').classList.remove('hide')
    document.querySelector('.cow').classList.remove('hide')
    document.querySelector('.container-main').classList.add('hide')  
    document.querySelector('.container-main').classList.remove('bg')   
    document.querySelector('.container-main').classList.add('zoom')     
    document.querySelector('#first-modal').classList.add('hide')   
    document.querySelector('#first-page').classList.add('hide')
    document.querySelector('.question').classList.remove('hide')
    document.querySelectorAll('.open-window').forEach(el=>{
        el.classList.remove('show')
        el.classList.remove('anim')
    })
    document.querySelector('.back-button').classList.add('hide')
    buttonsDelay = 200
    buttonsDelayStep = 200
}

document.querySelector('.back-button').addEventListener('click', ()=>{
    activeTimer = false
    resetPage()
})



let icon = document.querySelector('#second-modal .icon')
let title = document.querySelector('#second-modal .title')
let inner = document.querySelector('#second-modal .inner')

function updateModal(num) {
    icon.src = `images/round-icon${num}.svg`
    title.src = `images/modal/t${num}.svg`
    inner.src = `images/modal/bl${num}.svg`
    if (+num == 3) {
        title.classList.add('small')
    } else {
        title.classList.remove('small')
    }
}

let activeTimer = false

function inactivityTime(set=true) {
    let time = setTimeout(fn, 60000)
    if (set) {
        document.addEventListener('mousemove', resetTimer)
        document.addEventListener('keypress', resetTimer)
        activeTimer = true
    } else {
        document.removeEventListener('mousemove', resetTimer)
        document.removeEventListener('keypress', resetTimer)
        clearTimeout(time)
        activeTimer = false
    }

  
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(fn, 60000)
    }
  
    function fn() {
        if (activeTimer) {
            resetPage()
        }
    }
}
  