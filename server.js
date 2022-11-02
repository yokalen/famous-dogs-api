const express = require('express');
const app = express();
const PORT = 4000

const famousDogs = {
    'beethoven': {
        'breed': 'St. Bernard',
        'movie': 'Beethoven'
    },
    'clifford': {
        'breed': 'Labrador Retriever',
        'movie': 'Clifford\'s Really Big Movie'
    },
    'fly': {
        'breed': 'Border Collie',
        'movie': 'Babe'
    },
    'petey': {
        'breed': 'American Staffordshire Terrier',
        'movie': 'The Little Rascals'
    },
    'lassie': {
        'breed': 'Collie',
        'movie': 'Lassie Come Home'
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
        'breed': 'American Cocker Spaniel',
        'movie': 'Lady and the Tramp'
    },
    'scooby-Doo': {
        'breed': 'Great Dane',
        'movie': 'Scooby-Doo Where Are You?'
    },
    'snoopy': {
        'breed': 'Beagle',
        'movie': 'Snoopy, Come Home!'
    },
    'winn-dixie': {
        'breed': 'Berger Picard',
        'movie': 'Because of Winn-Dixie'
    },
    'buddy': {
        'breed': 'Golden Retriever',
        'movie': 'Air Bud'
    },
    'hooch': {
        'breed': 'French Mastiff',
        'movie': 'Turner and Hooch'
    },
    'milo': {
        'breed': 'Jack Russell',
        'movie': 'The Mask'
    },
    'toto': {
        'breed': 'Cairn Terrier',
        'movie': 'The Wizard of Oz'
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