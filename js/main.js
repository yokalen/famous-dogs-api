document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const dogName = document.querySelector('input').value
    try{
        //use api to find the breed by the name
        const response = await fetch(`/api/${dogName}`)
        const data = await response.json()
        const capitalName = dogName[0].toUpperCase() + dogName.slice(1)
        console.log(data)
        const breed = data.breed;
        if(breed === 'Unknown'){
            document.querySelector('h2').innerText = `${capitalName} is unknown!`
        }else{
            document.querySelector('h2').innerText = `${capitalName} is a ${breed}!`
        console.log(breed)
        };
        let breedName;
        if(breed === 'German Shepherd'){
            breedName = breed.toLowerCase().split(' ').join('');
        }else if(breed === 'St. Bernard'){
            breedName = breed.toLowerCase().split('. ').join('');
        }else{
            breedName = breed.toLowerCase().split(' ').reverse().join('/')
        }
        
        console.log(breedName)
        
        //get dog photos from the dog ceo api and place the photos in the DOM
        const resImg = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random/3`)
        if(resImg.ok){
            const imgData = await resImg.json()
            console.log(imgData.message[0])
            document.querySelector('#first').src = imgData.message[0] 
            console.log(imgData.message[0])
            document.querySelector('#second').src = imgData.message[1] 
            console.log(imgData.message[0])
            document.querySelector('#third').src = imgData.message[2] 
        }else{
            document.querySelectorAll('img').forEach(img => img.src = 'https://i.imgur.com/giuR0SI.png')
        }
    }catch(error){
        console.log(error)
    }
}

