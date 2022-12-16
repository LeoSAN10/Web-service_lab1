const db = require('../db')

class DriverController {
    async createDriver(req, res){
        const {model, yearOfCar} = req.body;
        const newDriver = await db.query(`INSERT INTO driver (model, yearOfCar) VALUES ($1, $2) RETURNING *`, [model,  yearOfCar]);
        res.json(newDriver.rows[0]);
    }

    async getDrivers(req, res){
        const users = await db.query(`SELECT * FROM driver`);
        res.json(users.rows);
    }

    async getOneDriver(req, res){
        const id = req.params.id;
        const driver = await db.query(`SELECT * FROM driver WHERE id=$1`, [id]);
        res.json(driver.rows[0]);
    }

    async updateDriver(req, res){
        const {id, model, yearOfCar} = req.body;
        const accountant = await db.query(
            `UPDATE driver SET model= $1, yearOfCar=$2 WHERE id = $3 RETURNING *`, [model, yearOfCar, id]
        );
        res.json(accountant.rows[0]);
    }

    async deleteDriver(req, res){
        const id = req.params.id;
        const driver = await db.query(`DELETE FROM driver WHERE id=$1`, [id]);
        res.json(driver.rows[0]);
    }
}

module.exports = new DriverController()
