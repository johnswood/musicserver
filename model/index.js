
const mongoose=require('mongoose')

let AlbumSchema={
    album_id:Number,
    album_name:String,
    issue_date:Date,
    company : String,
    comment: String,
    singers: [
        {"singer_id":Number,"singer_name":String}
    ],
    songs: [{"song_id":Number,"song_name":String, "time": Number}],
    coverpic: String
}

let SingerSchema={
    singer_id: Number,
    singer_name: String,
    area: String,
    birthday: Date,
    sex: Boolean,
    comment:String,
    photo: String
}

let UserSchema={
    user_id: Number,
    user_name: String,
    password: String,
    real_name: String,
    mobile: String,
    email: String,
    role_id: String,
    photo: String
}

let SnSchema={
    sn_name: String,
    sn: Number
}
mongoose.model("album",AlbumSchema)
mongoose.model("singer", SingerSchema)
mongoose.model("user", UserSchema)
mongoose.model("sn", SnSchema)