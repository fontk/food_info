import { Router } from 'express';
import UpdateController from '../controller/api/update.controller';

const router = new Router();

// associate put, delete, and get(id)
// router.route("/").get(UpdateController.showUpdates);
router.route('/food-list').get(UpdateController.foodListUpdate);


export default router;