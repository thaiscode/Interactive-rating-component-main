const submit = document.querySelector('.section__btn')
const rate = document.querySelector('.section2__rate')
const state1 = document.querySelector('.section')
const state2 = document.querySelector('#section2')
let btn 

submit.addEventListener('click', onSubmit)

function onSubmit() {
      if (btn == undefined) {
            alert('Please select a number.')
      } else {
            state1.style.display = 'none'
            state2.style.display = 'flex'
      }   
} 

function onRating(num) {
      btn = num
      rate.innerHTML = `You selected ${btn} out of 5`
}
