import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors'

import users from './data/user.js'
import User from './Models/userModel.js'
import Influencer from './Models/InfluencerModel.js'
import Report from './Models/ReportModel.js'

import connectDB from './config/db.js'
import influencers from './data/influencer.js'
import reports from './data/report.js'


dotenv.config();

connectDB();

const importDataToDb = async() =>{
    try {
        await User.deleteMany();
        await Influencer.deleteMany();
        await Report.deleteMany();

        const createdUser = await User.insertMany(users)
        const influencer1 = createdUser[1]._id;
        const influencer2 = createdUser[2]._id;
        
        const influencerProfile1 = influencers[0];
        const influencerProfile2 = influencers[1];
        influencerProfile1.user = influencer1;
        influencerProfile2.user = influencer2;

        const influencerProfiles = [ influencerProfile1, influencerProfile2]
        const createdInfluencers = await Influencer.insertMany(influencerProfiles);

        const report1 = reports[0];
        const report2 = reports[1];
        
        report1.user = createdUser[0]._id;
        report1.name = createdUser[0].name;
        report1.influencer = createdInfluencers[0]._id;
        report1.infName = createdInfluencers[0].name;
        report1.email = createdUser[0].email;

        report2.user = createdUser[3]._id;
        report2.name = createdUser[3].name;
        report2.influencer = createdInfluencers[1]._id;
        report2.infName = createdInfluencers[1].name;
        report2.email = createdUser[3].email;


        const reportedProfile = [report1, report2 ]

        await Report.insertMany(reportedProfile)

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