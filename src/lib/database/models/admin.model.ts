import { Schema, model, models, Document } from "mongoose";


export interface AdminParams extends Document {
    email: string;
    password?: string;
    passcode: string;
  }

const AdminSchema = new Schema<AdminParams>({
    email: {type: String,required: [true, "Please provide the email."],},
    password: {type: String,},    
    passcode: {type: String,required: [true, "Please provide the passcode."],maxlength: [6, "passcode cannot be less than 100 characters"]},
}, { timestamps: true });

const Admin = models?.Admin || model("Admin", AdminSchema);
export default Admin