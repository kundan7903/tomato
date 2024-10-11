import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://kundankr10904:o4y7ls2NPVfytbTR@cluster0.o3cdv5r.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}