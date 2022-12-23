import app from '../src/index.js'
import dotenv from 'dotenv'
dotenv.config()

app.listen(process.env.PORT || "3000");