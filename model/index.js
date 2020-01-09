
const mongoose=require('mongoose')

let AlbumSchema={
    album_id:Number,
    album_name:String,
    public_time:String,
    week : Number,
    price: Number,
    cover: String,
    singers: [
        {"singer_id":Number,"singer_name":String}
    ]
}

mongoose.model("album",AlbumSchema)