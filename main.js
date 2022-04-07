let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('.ul')
let btn = document.querySelector('button')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  let inputVal = input.value
    let li = document.createElement('li')
    li.classList.add('number')
    
  li.innerHTML = inputVal
  setInterval(() => {
      if (li.innerHTML > 0) {
    
      li.innerHTML--
    }
    if (li.innerHTML == 0) {
      li.classList.add('li-hide')
    }
    }, 1000);

  
    ul.appendChild(li)
    input.value = ''
})