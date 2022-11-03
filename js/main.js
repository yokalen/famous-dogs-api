document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const dogName = document.querySelector('input').value
    try{
        //use our api to find the breed using the name
        const response = await fetch(`https://famous-dogs-api-fun.herokuapp.com/api/${dogName}`)
        const data = await response.json()

        console.log(data)
        let breed = data.breed;
        document.querySelector('h2').innerText = breed
        console.log(breed)
        let breedName = breed.toLowerCase().split(' ').reverse().join('/')
        console.log(breedName)
        
        //get dog photos from the dog ceo api and place the photos in the DOM
        const resImg = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random/3`)
        const imgData = await resImg.json()

        console.log(imgData.message[0])
        document.querySelector('#first').src = imgData.message[0]
        console.log(imgData.message[0])
        document.querySelector('#second').src = imgData.message[1]
        console.log(imgData.message[0])
        document.querySelector('#third').src = imgData.message[2]
        // document.getElementById('first').src = imgData.message[0]
        // document.getElementById('second').src = imgData.message[1]
        // document.getElementById('third').src = imgData.message[3]

        
    }catch(error){
        console.log(error)
    }
}

