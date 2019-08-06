const conn = require('../connection/index');
const router = require('express').Router();

// add categories
router.post('/categories', (req, res) => {
    const sql = `insert into categories set ?`
    const sql2 = `select nama from categories where id = ?`

    conn.query(sql, req.body, (err, result) => {
        if(err) return res.send(err)

        conn.query(sql2, result.insertId, (err, result2) => {
            if(err) return res.send(err)
            res.send({
                messege: 'Ok',
                data: result2[0]
            })
        })
    })
})

// edit categories
router.patch('/categories/:id', (req, res) => {
    const sql = `update categories set ? where id = '${req.params.id}'`
    const sql2 = `select nama from categories where id = '${req.params.id}'`
    conn.query(sql, req.body, (err, result) => {
        if(err) return res.send(err)

        conn.query(sql2, (err, result2) => {
            if(err) return res.send(err)

            res.send({
                messege: 'Ok',
                data: result2[0]
            })
        })
    })
})

// delete categories
router.delete('/categories/:id', (req, res) => {
    const sql = `delete from categories where id = '${req.params.id}'`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send({
            messege: 'Ok',
            result: result
        })
    })
})

// get categories
router.get('/categories', (req, res) => {
    const sql = `select * from categories`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send({
            messege: 'Ok',
            data: result
        })
    })
})

module.exports = router