import app from './server';
import { MongoClient } from 'mongodb';

const port = process.env.PORT || 8000;


MongoClient.connect(process.env.FOOD_DB_URI,{ poolSize: 50, useNewUrlParser: true },)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    // await MoviesDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  });