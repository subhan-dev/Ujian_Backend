const conn = require('../connection/index');
const router = require('express').Router();

// add movcat
router.post('/movcat', (req, res) => {
    const sql = `insert into movcat set ?`
    const sql2 = `select mc.id, mv.nama as Judul, c.nama as categori from movcat mc join movies mv on mc.movie_id = mv.id join categories c on mc.category_id = c.id having mc.id = ?`

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

// delete movcat
router.delete('/movcat/:id', (req, res) => {
    const sql = `delete from movcat where id = '${req.params.id}'`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send({
            messege: 'Ok',
            result: result
        })
    })
})

// get movcat
router.get('/movcat', (req, res) => {
    const sql = `select mc.id, mv.nama as Judul, c.nama as Categori from movcat mc join movies mv on mc.movie_id = mv.id join categories c on mc.category_id = c.id`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send({
            messege: 'Ok',
            data: result
        })
    })
})

module.exports = router
