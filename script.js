const btn = document.getElementById("btn")
const para = document.getElementById("joke")
btn.addEventListener("click", getjoke)



const apikey = "M6HyJ2YcGrtTkQdZszJDZg==ttuLYZQd9VBgUjxU"

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const apiop = {
    method: "GET",
    headers:  { 'X-Api-Key': apikey},
}

async function getjoke(){
    try {
    para.innerHTML= "Please waiting..."
    btn.innerHTML = "Loading.."
    btn.disabled = true 
    const res = await fetch(url,apiop)
    const data = await res.json()
    para.innerHTML = data[0].joke
    btn.disabled = false 
    btn.innerHTML = "another joke"
    
    } catch (error) {
        para.innerHTML = "Error occurs"
    }
    
}