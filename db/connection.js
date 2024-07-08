import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://Divyanshi09:RXSleI1pVB3OZkmg@newcluster.rv4ds6u.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
