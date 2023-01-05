const button = document.querySelector('button')
const categories = [...document.querySelectorAll('.categories')]
let genre = document.querySelector('.genre')
let joke = document.querySelector('.joke')
let toolTip = document.querySelector('.tooltip')



categories.map(category => {
     category.addEventListener('click',()=>{
        genre.textContent = category.getAttribute('value')
    })
})

button.addEventListener('click',()=>{
    let genreString = genre.textContent
    genre.textContent === 'genre'?toolTipText():getJoke(genreString)
})


async function getJoke(category){
    try{
        const results = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        const data = await results.json()
        joke.innerHTML = `<p>${data.value}</p>`
    }catch(error){
        console.log(error)
    }
}

function toolTipText(){
    let tool = toolTip.children[0]
    tool.style.visibility = 'visible'
    setTimeout(() => {
        tool.style.visibility = 'hidden'
      }, 3000)
      
}