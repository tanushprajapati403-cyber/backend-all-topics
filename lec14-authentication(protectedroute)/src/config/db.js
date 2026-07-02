const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://tanushprajapati403_db_user:dnfumDcpSfP0jGK9@ac-smfvhua-shard-00-00.e88idmn.mongodb.net:27017,ac-smfvhua-shard-00-01.e88idmn.mongodb.net:27017,ac-smfvhua-shard-00-02.e88idmn.mongodb.net:27017/?ssl=true&replicaSet=atlas-hr32lg-shard-0&authSource=admin&appName=fs-35backend",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in mongodb", error);
  }
};

module.exports = connectDB;
