const mongoose=require('mongoose')
let BookSchema={id:Number,name:String,price:Number}
let Customer={name:String,password:String,score:Number}

mongoose.model("Book",BookSchema)
mongoose.model("Customer",Customer)


