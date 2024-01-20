import mongoose, { Schema } from "mongoose";
const expansionSchema = new Schema(
  {
    internetNO: String,
    province: String,
    latlongCust: String,
    latlongSP: String,
    custName: String,
    channel: String,
    amount: String,
    tm: String,
    custZone: String,
    problem: String,
    dealer: String,
    contact: String,
  },
  {
    timeStamp: true,
  }
);

const Expansion =
  mongoose.models.Expansion || mongoose.model("Expansion", expansionSchema);
export default Expansion;
