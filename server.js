const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 4000

app.use(cors())
app.use(express.static(__dirname));

const famousDogs = {
    'beethoven': {
        'breed': 'St. Bernard',
        'movie': 'Beethoven'
    },
    'clifford': {
        'breed': 'Labrador',
        'movie': 'Clifford\'s Really Big Movie'
    },
    'doug':{
        'breed': 'Golden Retriever',
        'movie': 'Up'
    },
    'fly': {
        'breed': 'Border Collie',
        'movie': 'Babe'
    },
    'lassie': {
        'breed': 'Collie',
        'movie': 'Lassie Come Home'
    },
    'petey': {
        'breed': 'Staffordshire Bullterrier',
        'movie': 'The Little Rascals'
    },
    'marley': {
        'breed': 'Labrador',
        'movie': 'Marley & Me'
    },
    'rin tin tin': {
        'breed': 'German Shepherd',
        'movie': 'The Adventures of Rin Tin Tin'
    },
    'samantha': {
        'breed': 'German Shepherd',
        'movie': 'I Am Legend'
    },
    'slinky': {
        'breed': 'Dachshund',
        'movie': 'Toy Story'
    },
    'lady': {
        'breed': 'Cocker Spaniel',
        'movie': 'Lady and the Tramp'
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
    'scrappy': {
        'breed': 'Great Dane',
        'movie': 'Scooby-Doo Where Are You?'
    },
    'snoopy': {
        'breed': 'Beagle',
        'movie': 'Snoopy, Come Home!'
    },
    'buddy': {
        'breed': 'Golden Retriever',
        'movie': 'Air Bud'
    },
    'hooch': {
        'breed': 'Bull Mastiff',
        'movie': 'Turner and Hooch'
    },
    'lucky': {
        'breed': 'Dalmatian',
        'movie': '101 Dalmatians'
    },
    'milo': {
        'breed': 'Russell Terrier',
        'movie': 'The Mask'
    },
    'otis': {
        'breed': 'Pug',
        'movie': 'The Adventures of Milo and Otis'
    },
    'toto': {
        'breed': 'Cairn Terrier',
        'movie': 'The Wizard of Oz'
    },
    'balto': {
        'breed': 'Husky',
        'movie': 'Balto'
    },
    'togo': {
        'breed': 'Husky',
        'movie': 'Togo'
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