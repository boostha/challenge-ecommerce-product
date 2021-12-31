const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const quantityCount = document.querySelector('.quantity-count')
const navCartBox = document.querySelector('.nav-cart')
const navCart = document.querySelector('.cart')


quantityCount.innerHTML = '0'
let count = 0

minus.addEventListener('click', function(){
  if(count === 0) {
    quantityCount.innerHTML = '0'
  } else {
    count -= 1
    quantityCount.innerHTML = count
    return count
  }
})

plus.addEventListener('click', function(){
  count += 1
  quantityCount.innerHTML = count
  return count
})


navCart.addEventListener('click', () => {
  navCartBox.classList.toggle('display-none')
})


