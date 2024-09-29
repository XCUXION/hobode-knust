import { Schema, model, models, Document } from "mongoose";


export interface ManagerParams extends Document {
    email: string;
    password?: string;
    facilities: string[] | Schema.Types.ObjectId;
  }

const ManagerSchema = new Schema<ManagerParams>({
    email: {type: String,required: [true, "Please provide the email."],},
    password: {type: String,},    
    facilities: [{type: Schema.Types.ObjectId, ref: "Facility", required: [true, "Please provide the passcode."],maxlength: [6, "passcode cannot be less than 100 characters"]}],
}, { timestamps: true });

const Manager = models?.Manager || model("Manager", ManagerSchema);
export default Manager