import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000;
const DB_URL = 'mongodb+srv://MiguelRoudriges:1a2b3c4d5e@cluster0.9qp06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true})
        app.listen(PORT, ()=> console.log('SERVER STARTED ON PORT ' + PORT ) )
    } catch (error) {
        console.log(error)
    }
}

startApp();