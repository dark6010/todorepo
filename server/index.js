const { loadNuxt, build } = require('nuxt')

const express = require('express')
const app = express()

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

var todo = require('../routes/todoRoutes');
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://admin:admin@cluster0.uabxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json())
  app.use('/api', todo);

  // Render every route with Nuxt
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()