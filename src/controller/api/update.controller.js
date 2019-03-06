import express from 'express';
const app = express();
import {
  FoodList
} from '../../database/updates';


export default class UpdateController {
  constructor() {

  }
  static async foodListUpdate(req, res) {
    FoodList.update(10, 0).then(result => {
      console.log(process.env.FOOD_DB_URI);
      res.status(202);
      res.send(result.list.item);
    }).catch(e => e);
  }
}