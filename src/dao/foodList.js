import {ObjectId} from "bson";

let foodList;
export default class FoodListDao {
    static async getCollection(conn) {
        if (foodList) {
            return
        }
        try {
            foodList = await conn.db(process.env.FOOD_NS).collection('food_list');
        } catch (e) {
            console.error(`Unable to establish a collection handle in Food: ${e}`);
        }
    }
    static async insertFoodList(list) {
        try {
            console.log('insert foodlist modafuck');
            list = list.map((pos) => {
                if (pos.hasOwnProperty('offset')) {
                    pos._id = pos.offset;
                    delete pos.offset;
                }
                if (pos.hasOwnProperty('id')) {
                    pos.ndbno = pos.id;
                    delete pos.id;
                }
                pos._id = ObjectId(pos._id);

                console.log(pos);
                return pos;
            });

            foodList.insertMany(list);
        } catch (e) {
            console.error(`Unable to update collection in Food List: ${e}`)
        }
    }
}