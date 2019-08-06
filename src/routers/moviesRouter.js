const conn = require('../connection/index');
const router = require('express').Router();

// add movies
router.post('/movies', (req, res) => {
    const sql = `insert into movies set ?`
    const sql2 = `select nama, tahun, deskripsi from movies where id = ?`

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

// edit movies
router.patch('/movies/:id', (req, res) => {
    const sql = `update movies set ? where id = '${req.params.id}'`
    const sql2 = `select nama, tahun, deskripsi from movies where id = '${req.params.id}'`
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

// delete movies
router.delete('/movies/:id', (req, res) => {
    const sql = `delete from movies where id = '${req.params.id}'`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send({
            messege: 'Ok',
            result: result
        })
    })
})

// get movies
router.get('/movies', (req, res) => {
    const sql = `select * from movies`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send({
            messege: 'Ok',
            data: result
        })
    })
})

module.exports = router