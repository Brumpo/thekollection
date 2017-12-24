const express = require('express')
const router = express.Router()
const knex = require('../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const queries = require('./queries.js')

router.get('/articles',queries.getArticles)

router.get('/articles/:id',queries.getArticlesId)

router.get('/authors',queries.getAuthors)

router.get('/authors/:id',queries.getAuthorsId)

router.post('/author',queries.postAuthor)

router.post('/authors',queries.postAuthors)

module.exports = router
