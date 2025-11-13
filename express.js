require('dotenv').config();
const express = require('express');

const HelpRequestRouter = require('./routers/helpRequests.router.js')
const VolunteerRouter = require('./routers/volunteers.router.js')
const LocationRouter = require('./routers/locations.router.js')
const PriorityRouter = require('./routers/priorities.router.js')
const StatusRouter = require('./routers/statuses.router.js')


const app = express();

const host = process.env.HOST_NAME;
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/helpRequests',HelpRequestRouter)
app.use('/api/volunteers',VolunteerRouter)
app.use('/api/locations',LocationRouter)
app.use('/api/priorities',PriorityRouter)
app.use('/api/statuses',StatusRouter)

app.use((err, req, res, next) => {
    console.error("Error occurred:", err.message);
    res.status(500).json({
        message: 'An error occurred, please try later...',
        error: err.message
    });
});

app.listen(port, host, () => {
    
    console.log(`express server is running at http://${host}:${port}`);
})