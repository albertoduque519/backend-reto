/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const i18n = require('i18n')
const methodOverride = require('method-override')
const morgan = require('morgan')
const helmet = require('helmet')
const raygun = require('raygun')
const cors = require('cors')
const routes = require('./routes/index')
const { handleError } = require('./helpers/error')

const app = express()
const { PORT, HOST } = process.env

i18n.configure({
	locales: ['en', 'es'],
	directory: `${__dirname}/locales`,
})
const raygunClient = new raygun.Client().init({ apiKey: process.env.RAIGUN_API })
app.use(i18n.init)
app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use('/', routes)
app.use(raygunClient.expressHandler)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	handleError(err, res)
})

app.listen(PORT)
console.log(`Running on. http://${HOST}:${PORT}`)

module.exports = app
