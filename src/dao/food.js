import {ObjectId} from "bson";

let food;
export default class FoodDao {
    static async getCollection(conn) {
        if (food) {
            return
        }
        try {
            food = await conn.db(process.env.FOOD_NS).collection('food');
            console.log(`The luls ${food}`);
        } catch (e) {
            console.error(`Unable to establish a collection handle in Food: ${e}`)
        }
    }
    static async insertFood(foodDoc) {
        try {
            food.insertMany(foodDoc)
        } catch (e) {
            console.error(`Unable to insert collection in Food: ${e}`)
        }
    }
}