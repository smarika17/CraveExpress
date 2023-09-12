const mongoose = require('mongoose');
// main().catch(err => console.log(err));
const MongoURI='mongodb+srv://malviyasmarika:Dharmendra08@foodcluster0.paqincs.mongodb.net/CraveExpress?retryWrites=true&w=majority'
// const mongoDB =async function main(){
//     await mongoose.connect(MongoURI, {useNewUrlParser : true}, async(err,result)=>{
//         if(err)  console.log("...", err)
//         else{
//             console.log('connencted');
//         }
//     });
// }

const mongoDB =async function main() {
  await mongoose.connect(MongoURI, {useNewUrlParser : true});
  console.log('connencted');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  // const fetched_data= await mongoose.connection.db.collection("food_items")

}



module.exports = mongoDB;