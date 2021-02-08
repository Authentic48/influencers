import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors'

import users from './data/user.js'
import User from './Models/userModel.js'
import Influencer from './Models/InfluencerModel.js'
import connectDB from './config/db.js'
import influencers from './data/influencer.js'


dotenv.config();

connectDB();

const importDataToDb = async() =>{
    try {
        await User.deleteMany();
        await Influencer.deleteMany();
        const createdUser = await User.insertMany(users)
        const influencer1 = createdUser[1]._id;
        const influencer2 = createdUser[2]._id;
        
        const influencerProfile1 = influencers[0];
        const influencerProfile2 = influencers[1];
        influencerProfile1.user = influencer1;
        influencerProfile2.user = influencer2;
        
        const influencerProfiles = [ influencerProfile1, influencerProfile2]
        await Influencer.insertMany(influencerProfiles);
    
        console.log(`Data imported To db`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`Error is coming from Importing the data to the db ${error.message}`. red.inverse);
        process.exit(1)
    }
}

const destroyDataFromDb = async() =>{
    try {
        await User.deleteMany();
        await Influencer.deleteMany();

        console.log('Data destroy from db'.blue.inverse)
        process.exit()
    } catch (error) {
        console.log(`Error is coming from Destroing the data to the db ${error.message}`. red.inverse);
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyDataFromDb();
}else{
    importDataToDb();
}