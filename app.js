'use strict'

const express = require('express')
const app = express()
const port = 8080

const got = require('got')
const path = require('path')

// darksky key
const key = 'ba242167352d24e9f8b00d44251424d2'

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

app.listen(port, () => console.log(`Weather app is listening on port ${port}!`))

const youversion = require('./src/bible/bibleApi.js')
app.get('/BibleToday', (req, res) => {
	youversion.todayverse((error, result) => {
		console.log(result)
		res.send(JSON.parse(result).verse.text);
	})
})

app.get('/BibleToday2', (req, res) => {
	youversion.todayverse((error, result) => {
		console.log('Called BibleToday2 succeed, sending index.html');
		res.sendFile(path.join(__dirname, 'src/bible/', 'index.html'));
	})
})

app.get('/weather2', (req, res) => {
	console.log('Called weather2 succeed, sending index.html');
	res.sendFile(path.join(__dirname, 'src/weather/', 'index.html'));
})

