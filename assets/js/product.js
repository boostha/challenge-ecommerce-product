const productImages = [
  {
    title: "product 1",
    imageSrc: "images/image-product-1.jpg",
    width: 120,
  },
  {
    title: "product 2",
    imageSrc: "images/image-product-2.jpg",
    width: 120,
  },
  {
    title: "product 3",
    imageSrc: "images/image-product-3.jpg",
    width: 120,
  },
  {
    title: "product 4",
    imageSrc: "images/image-product-4.jpg",
    width: 120,
  }
]

const productThumbnail = document.querySelector('.product-thumbnail')



let output = ''
productImages.forEach(function(picture) {
  output += `
  <img src="${picture.imageSrc}" alt="${picture.title}" width="${picture.width}" class="product-image">
  `
})

productThumbnail.innerHTML = output

const productImage = productThumbnail.querySelectorAll('img')
const selectProduct = document.querySelector('.selected-product')

productImage.forEach(image => {
  image.addEventListener('click', function(){
    productImage.forEach(img => img.classList.remove('product-active'))
    this.classList.add('product-active')
    selectProduct.innerHTML = `<img src="${this.src}" alt="${this.alt}" width="600" class="product-image"></img>`
  })
})