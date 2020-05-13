'use strict'

const express = require('express')
const app = express()
const port = 8080

const got = require('got')
const path = require('path')

// darksky key
const key = 'ba242167352d24e9f8b00d44251424d2'
const bibleapi = require('./src/bible/bibleApi.js')
app.use(express.static('public'))

app.get('/', (req, res) => res.send('Weather app is running'))

app.get('/weather', (req, res) => {
    got(`https://api.darksky.net/forecast/${key}/29.7604,-95.3698`)
	.then(response => {
		console.log('Called darksky api succeed.')
		const msg = JSON.parse(response.body)
		res.send(msg.hourly.summary)
	})
	.catch(error => {
		console.log(error)
		res.send(`Call failed with error: ${error}`)
	})
})

app.get('/BibleToday', (req, res) => {
	bibleapi.todayverse((error, result) => {
		console.log('Called BibleToday');
		console.log(result)
		res.send(JSON.parse(result).verse.text);
	})
})

app.get('/BibleToday2', (req, res) => {
	youversion.todayverse((error, result) => {
		console.log('Called BibleToday2');
		res.sendFile(path.join(__dirname, 'src/bible/', 'index.html'));
	})
})

app.get('/Sanantone', (req, res) => {
	got(`https://api.darksky.net/forecast/${key}/29.548407,-98.563371`)
	.then(response => {
		console.log('Called darksky api succeed.')
		const msg = JSON.parse(response.body)
		res.send(msg.hourly.summary)
	})
	.catch(error => {
		console.log(error)
		res.send(`Call failed with error: ${error}`)
	})
})

//  test first webapp
app.get('/test', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/test/', 'index.html'));
});

app.listen(port, () => console.log(`Weather app is listening on port ${port}!`))
