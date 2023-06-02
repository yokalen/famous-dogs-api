const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 4000

app.use(cors())
app.use(express.static(__dirname));

const famousDogs = {
    'balto': {
        'breed': 'Husky',
        'movie': 'Balto'
    },
    'beethoven': {
        'breed': 'St. Bernard',
        'movie': 'Beethoven'
    },
    'buddy': {
        'breed': 'Golden Retriever',
        'movie': 'Air Bud'
    },
    'chance': {
        'breed': 'Staffordshire Bullterrier',
        'movie': 'Homeward Bound: The Incredible Journey'
    },
    'clifford': {
        'breed': 'Labrador',
        'movie': 'Clifford\'s Really Big Movie'
    },
    'cujo': {
        'breed': 'St. Bernard',
        'movie': 'Cujo'
    },
    'doug':{
        'breed': 'Golden Retriever',
        'movie': 'Up'
    },
    'fly': {
        'breed': 'Border Collie',
        'movie': 'Babe'
    },
    'hachi': {
        'breed': 'Akita',
        'movie': 'Hachi: A Dog\'s Tale'
    },
    'hooch': {
        'breed': 'Bull Mastiff',
        'movie': 'Turner and Hooch'
    },
    'lady': {
        'breed': 'Cocker Spaniel',
        'movie': 'Lady and the Tramp'
    },
    'lassie': {
        'breed': 'Collie',
        'movie': 'Lassie Come Home'
    },
    'marley': {
        'breed': 'Labrador',
        'movie': 'Marley & Me'
    },
    'max': {
        'breed': 'Malinois',
        'movie': 'Max'
    },
    'milo': {
        'breed': 'Russell Terrier',
        'movie': 'The Mask'
    },
    'old yeller': {
        'breed': 'Labrador',
        'movie': 'Old Yeller'
    },
    'otis': {
        'breed': 'Pug',
        'movie': 'The Adventures of Milo and Otis'
    },
    'petey': {
        'breed': 'Staffordshire Bullterrier',
        'movie': 'The Little Rascals'
    },
    'pongo': {
        'breed': 'Dalmatian',
        'movie': '101 Dalmatians'
    },
    'rin tin tin': {
        'breed': 'German Shepherd',
        'movie': 'The Adventures of Rin Tin Tin'
    },
    'samantha': {
        'breed': 'German Shepherd',
        'movie': 'I Am Legend'
    },
    'scooby': {
        'breed': 'Great Dane',
        'movie': 'Scooby-Doo Where Are You?'
    },
    'scooby doo': {
        'breed': 'Great Dane',
        'movie': 'Scooby-Doo Where Are You?'
    },
    'scrappy': {
        'breed': 'Great Dane',
        'movie': 'Scooby-Doo Where Are You?'
    },
    'scrappy doo': {
        'breed': 'Great Dane',
        'movie': 'Scooby-Doo Where Are You?'
    },
    'shadow': {
        'breed': 'Golden Retriever',
        'movie': 'Homeward Bound: The Incredible Journey'
    },
    'slinky': {
        'breed': 'Dachshund',
        'movie': 'Toy Story'
    },
    'snoopy': {
        'breed': 'Beagle',
        'movie': 'Snoopy, Come Home!'
    },
    'togo': {
        'breed': 'Husky',
        'movie': 'Togo'
    },
    'toto': {
        'breed': 'Cairn Terrier',
        'movie': 'The Wizard of Oz'
    },
    'wishbone': {
        'breed': 'Russell Terrier',
        'movie': 'Wishbone'
    },
    'unknown': {
        'breed': 'Unknown',
        'movie': 'Unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:dogName', (req, res) => {
    const dogName = req.params.dogName.toLowerCase()
    if(famousDogs[dogName]){
        res.json(famousDogs[dogName])
    }else{
        res.json(famousDogs['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})