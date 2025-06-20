const express  = require('express')
const cors = require('cors')
const summaryRoutes = require('./routes/summaryRoutes')
const authRoutes = require('./routes/authRoutes')
const testRoutes = require('./routes/testRoutes');
const passingRoutes = require('./routes/testPassingRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const progressRoutes = require('./routes/progressRoutes')
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Server is running")
})

app.use('/api/auth', authRoutes);
app.use('/api/summary', summaryRoutes);
app.use('/api/test', testRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/test/passing' , passingRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/analytics' , analyticsRoutes)

module.exports = app