const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// routes
const authRoutes = require('./routes/auth/authRoutes')
const userRoutes = require('./routes/admin/userRoutes')
const courseRoutes = require('./routes/admin/courseRoutes')
const studentRoutes = require('./routes/admin/studentRoutes')
const noticeRoutes = require('./routes/admin/noticeRoutes')
const tutorRoutes = require('./routes/admin/tutorRoutes')
const moduleRoutes = require('./routes/admin/modulesRoutes')
const attendanceRoutes = require('./routes/tutor/attendanceRoutes')
const assignmentRoutes = require('./routes/tutor/assignmentRoutes')
const applyRoutes = require('./routes/student/applyRoutes')
const applicationRoutes = require('./routes/admin/applicationRoutes')
// custom middlewares import
const {
  verifyLogin,
  verifyAdmin,
  verifyStudent,
  verifyTutor,
} = require('./middlewares/authMiddleware')

// express app initialization
const app = express()

// middlewares
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
)
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/apply', applyRoutes)
// app.use('/home', homeRoutes)
app.use('/users', verifyLogin, verifyAdmin, userRoutes)
app.use('/courses', verifyLogin, verifyAdmin, courseRoutes)
app.use('/students', verifyLogin, verifyAdmin, studentRoutes)
app.use('/notices', verifyLogin, verifyAdmin, noticeRoutes)
app.use('/tutors', verifyLogin, verifyAdmin, tutorRoutes)
app.use('/modules', moduleRoutes)
app.use('/attendance', verifyLogin, verifyTutor, attendanceRoutes)
app.use('/assignments', verifyLogin, verifyTutor, assignmentRoutes)
app.use('/applications', verifyLogin, verifyAdmin, applicationRoutes)

// 404 error handling
app.use((req, res) => {
  res.status(400).send({
    error: 'Inavlid request, please check the URL and try again',
  })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
  if (err) {
    throw err
  }
  console.log(`[Server] started at port ${PORT}`)
})
