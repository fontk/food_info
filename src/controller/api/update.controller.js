import express from 'express';
const app = express();
import {
  FoodList
} from '../../database/updates';


export default class UpdateController {
  static async foodListUpdate(req, res) {
    FoodList.update(10, 0).then(result => {
      // res.sendStatus(202);
      res.send(result.list.item);
    }).catch(e => e);
  }
}