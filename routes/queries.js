const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

const getAuthors = (req,res,next)=>{
  knex('authors').then(data=>{
    data.map(author=>{
      delete author.created_at
      delete author.updated_at
    })
    res.status(200).send(data)
  })
  .catch(err=>{
    next(err)
  })
}
const getAuthorsId = (req,res,next)=>{
  knex('authors').where({id:req.params.id}).first()
  .then(author=>{
    res.status(200).send(author)
  })
}
const getArticles = (req,res,next)=>{
  knex('articles').then(articles=>{
    articles.map(article=>{
      delete article.content
      delete article.media
      delete article.updated_at
    })
    res.status(200).send(articles)
  })
}
const getArticlesId = (req,res,next)=>{
  knex('articles').where({id: req.params.id}).first()
  .then(article=>{
    res.status(200).send(article)
  })
  .catch(err=>{
    next(err)
  })
}
const postAuthor = (req,res,next)=>{
  console.log(req.body);
  knex('authors').where({email:req.body.username}).first()
  .then(user=>{
    console.log(user);
    bcrypt.compare(req.body.password, user.password, function(err, ver) {
        ver ? res.status(200).send({id:user.id}): res.sendStatus(401)
    })
  })
}
const postAuthors = (req,res,next)=>{
  var salt = bcrypt.genSaltSync(6)
  var hash = bcrypt.hashSync(req.body.password, salt);
  //console.log('hash',hash);
  knex('users').insert({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:hash,
    admin:req.body.admin
  },'*')
  .then(user=>{
    res.status(204).send({id:user[0].id})
  })
}
module.exports ={
  getAuthors,
  getAuthorsId,
  getArticles,
  getArticlesId,
  postAuthor,
  postAuthors
}
