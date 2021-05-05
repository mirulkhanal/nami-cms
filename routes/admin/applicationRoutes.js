const router = require('express').Router()
// const { verifyLogin, verifyAdmin } = require('../../middlewares/authMiddleware')
const db = require('../../models/db')

router.get('/', (req, res) => {
  db.query(
    'SELECT * FROM applications where enrolled=false',
    (err, results) => {
      if (err)
        return res.send(501).send({
          error: err.message,
        })
      res.send({
        results,
      })
    }
  )
})
router.patch('/accept', (req, res) => {
  const studentID = req.body.studentID
  console.log(studentID)
  if (!studentID) {
    return res.status(400).send({
      error: 'Please Provide student ID',
    })
  }
  db.query(
    'UPDATE applications SET enrolled=true WHERE studentID = ?',
    [studentID],
    (err) => {
      if (err) {
        return res.status(501).send({
          error: err.message,
        })
      }
      res.send({
        message: 'Successfully enrolled the student',
      })
    }
  )
})
module.exports = router
