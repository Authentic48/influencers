import mongoose from 'mongoose'

const reportSchema = mongoose.Schema({

    name:{ type: String, required: true },
    email:{ type: String, required: true },
    description:{ type: String, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    influencer:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Influencer'
    },
    infName:{ type: String, required: true },
},{
    timestamps: true
})


const report = mongoose.model('Report', reportSchema)

export default report
