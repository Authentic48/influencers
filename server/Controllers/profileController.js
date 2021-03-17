
const User = require('../models/userModel.js')
const Influencer = require('../models/influencerModel.js')
const asyncHandler = require('express-async-handler')

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Public
const getProfile = asyncHandler(async (req, res) => {
    
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword ? {
        name :{
          $regex : req.query.keyword,
          $options : 'i'
        }
      } : {}

    const count = await Influencer.countDocuments({ ...keyword })
    const influencers = await Influencer.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1))

    res.json({influencers, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Private/Influencer
const updatedProfile = asyncHandler(async (req, res) => {

    const profile = await Influencer.findById(req.params.id)

    if(profile)
    {
        profile.name = req.body.name || profile.name 
        profile.city = req.body.city || profile.city 
        profile.name = req.body.name || profile.name 
        profile.image = req.body.image || profile.image 
        profile.bio = req.body.bio || profile.bio 
        profile.price = req.body.price || profile.price 
        profile.category = req.body.category || profile.category 
        profile.fbAccount = req.body.fbAccount || profile.fbAccount 
        profile.fbFriends = req.body.fbFriends || profile.fbFriends 
        profile.instAccount = req.body.instAccount || profile.instAccount 
        profile.instFollowers = req.body.instFollowers || profile.instFollowers 
        profile.youtubeAccount = req.body.youtubeAccount || profile.youtubeAccount 
        profile.youtubeSubscribers = req.body.youtubeSubscribers || profile.youtubeSubscribers
        profile.isYoutuber = req.body.isYoutuber || profile.isYoutuber 
        profile.phoneNumber = req.body.phoneNumber || profile.phoneNumber 


        const updatedInfluencer = await profile.save();
  
        res.status(201).json(updatedInfluencer)
    }
        
   
})

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Private/Influencer
const createProfile = asyncHandler(async (req, res) => {
    
    const {name, image, bio, city, price, category, fbAccount, fbFriends, instAccount, instFollowers, youtubeAccount, youtubeSubscribers,isYoutuber, phoneNumber} = req.body;      
    const influencer = new Influencer({
        user: req.user._id,
        city,
        name,
        image,
        bio,
        price,
        category,
        fbAccount,
        fbFriends,
        instAccount,
        instAccount,
        instFollowers,
        youtubeAccount,
        youtubeSubscribers,
        isYoutuber,
        phoneNumber
            
    })  
    
    const createdInfluencer = await influencer.save();
    res.status(201).json(createdInfluencer)

   
})

// @desc    Influencer
// @route   GET /api/influencers/:id
// @access  Public/
const getProfileById = asyncHandler(async (req, res) => {
    
    const influencer = await Influencer.findById(req.params.id)

    const otherInfluencers = await Influencer.find({ _id: { $nin: req.params.id } }).limit(2)
    if(influencer)
    {
      res.json({influencer, otherInfluencers })
    }else{
        res.status(404)
        throw new Error('Profile not found')
    }
})

// @desc    Influencer
// @route   GET /api/influencers/:id
// @access  Public/Admin
const deleteProfile = asyncHandler(async (req, res) => {
    
    const influencer = await Influencer.findById(req.params.id)
    if(influencer){
        await influencer.remove()
        res.json({message : "profile has Been deleted"})
    }else{
        res.status(404)
        res.json({message : "profile Not Found"})
    }
   
})

// @desc    Influencer
// @route   GET /api/influencers/:id
// @access  Private
const revewProfile = asyncHandler(async (req, res) => {
    const {rating, comment} = req.body;

    const influencer = await Influencer.findById(req.params.id)

    if(influencer)
    {
        const alreadyreviewed = influencer.reviews.find(r => r.user.toString() === req.user._id.toString())
        if(alreadyreviewed)
        {
            res.status(400)
            throw new Error('Influencer already reviewed')
        }
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }
        influencer.reviews.push(review)
        influencer.numReviews = influencer.reviews.length
        influencer.rating = influencer.reviews.reduce((acc, item) => item.rating + acc, 0) / influencer.reviews.length

        await influencer.save()
        res.status(201).json({ message: "Review added" })
    }else
    {
        res.status(404)
        res.json({message : "Influencer Not Found"})
    }
   
})

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Public
const getProfiles = asyncHandler(async (req, res) => {
    
   
    const influencers = await Influencer.find({})

    res.json(influencers )
})

module.exports = { getProfiles, revewProfile, deleteProfile, getProfileById, createProfile, updatedProfile, getProfile}


