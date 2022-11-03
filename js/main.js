document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const dogName = document.querySelector('input').value
    try{
        const response = await fetch(`https://famous-dogs-api-fun.herokuapp.com/api/${dogName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.breed
    }catch(error){
        console.log(error)
    }
}