# STEPS

## Express Server

<li> app = express()
<li> app.listen(port, ()=>{})

## Add Middleware for all routes

<li> app.use(express.json(limit)) //body parser
<li> app.use(cookieParser())
<li> app.use(cors({}))

## Databases connection

### Mongo DB connection

<li> import mongoose from "mongoose"
<li> mongoose.connect(mongo_url)

### Redis connection

<li> import Redis from "ioredis"
<li> new Redis(redis_url)

### cloudinary connection

## Defining Custom Error Handler

### Extended Error Class

<li> Added statusCode

### Added Error MiddleWare

<li> To handle all error at one place

### Added catchAsync

<li> TO avoid wrting try catch on all places
