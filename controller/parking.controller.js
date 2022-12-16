const db = require('../db');
class ParkingController {

    async createParking(req, res){
        const {parkingNum, isFree, price, driver_id} = req.body;
        const newPost = await db.query(
            `INSERT INTO parking (parkingNum, isFree, price, driver_id) VALUES ($1, $2, $3, $4) RETURNING *`, [parkingNum, isFree, price, driver_id]
        );
        res.json(newPost.rows[0]);

    }

    async getParkingsByDriver (req, res){
        const {id} = req.query;
        const getParkings = await db.query(`SELECT parkingNum, isFree, price FROM parking WHERE driver_id=$1`, [id]);
        res.json(getParkings.rows);

    }

}

module.exports = new ParkingController();
