const router = require('express').Router()
const db = require('../../models/db')
const { v4: uuidv4 } = require('uuid')
const { validateEmail } = require('../../functions/helpers')

router.post('/', (req, res) => {
  const studentID = uuidv4()
  const name = req.body.name
  const address = req.body.address
  const email = req.body.email
  const contact = req.body.contact
  const moduleID = req.body.moduleID
  const enrolled = false

  if (!name || !email || !address || !contact || !moduleID || !studentID) {
    return res.status(400).send({
      error: 'Please enter all required fields',
    })
  }
  if (!validateEmail(email)) {
    return res.status(400).send({
      error: 'The Email address is invalid',
    })
  }
  console.log(studentID)
  db.query(
    'INSERT INTO applications (studentID,name,address,email,contact,moduleID,enrolled) VALUES(?,?,?,?,?,?,?)',
    [studentID, name, address, email, contact, moduleID, enrolled],
    (err) => {
      if (err) {
        return res.status(501).send({
          error: err.message,
        })
      }
      return res.status(201).send({
        message: 'Application has been sent for review to the Administrator',
      })
    }
  )
})
module.exports = router
