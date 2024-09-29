import { Schema, model, models, Document } from "mongoose";

interface RoomParams {
    roomType: "1 in a room" | "2 in a room" | "3 in a room" | "4 in a room" | string ,
    numberOfTenantsPerRoomType: number,
    price: number
}

interface PaymentAccountParams {
    acceptedModes: "mobile money" | "bank" | "cash",
    accountNumber: string,
    bank?: string;
    bankBranch?: string;
    accountHolder: string;
}

interface FacilityParams extends Document {
    name: string,
    school: string,
    location?: string,
    description?: string,
    manager: Schema.Types.ObjectId | string,
    tenants: Schema.Types.ObjectId | string,
    photos: string[],
    facilityType: "hostel" | "apartment" | "homestel",
    rooms: RoomParams,
    contact: string,
    paymentInfo: PaymentAccountParams
  }

const FacilitySchema = new Schema<FacilityParams>({
    name: {type: String,required: [true, "Please provide your email."],},
    manager: {type: Schema.Types.ObjectId, ref: "Manager"},    
    description: {type: String,},    
    contact: {type: String,},    
    photos: [{type: String,}],    
    location: {type: String,},    
    paymentInfo: {type: String, required: [true, "provide payment information"]},    
    school: {type: String, required: [true, "Please provide school of affiliation."]},
    tenants: [] 
}, { timestamps: true });

const Facility = models?.Facility || model("Facility", FacilitySchema);
export default Facility