import mongoose from 'mongoose';


const reviewSchema = mongoose.Schema({
    name:{type: String, required: true},
    rating:{type: Number, required: true},
    comment:{type: String, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},{
    timestamps: true
})

const influencerSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        required : true
    },
    bio:{
        type: String,
        required : true
    },
    city:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    image:{
        type: String,
        required : true
    },
    category:[{
        type: String,
        required : true
    }],
    fbAccount:{
        type: String,
        required : true
    },
    fbFriends:{
        type: Number,
        required : true
    },
    instAccount:{
        type: String,
        required : true
    },
    instFollowers:{
        type: Number,
        required : true
    },
    youtubeAccount:{
        type: Boolean,
        required : true,
        default: false
    },
    youtubeSubscribers:{
        type: Number,
        required : true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
}, {
    timestamps: true
})


const influencer = mongoose.model('Influencer', influencerSchema)

export default influencer