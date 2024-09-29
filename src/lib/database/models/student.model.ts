import { Schema, model, models, Document } from "mongoose";


export interface StudentParams extends Document {
    name: string;
    school: string;
    programme?: string;
    year?: string;
    contact: string;
    photo: string;
    email: string;
    password?: string;
  }

const StudentSchema = new Schema<StudentParams>({
    email: {type: String,required: [true, "Please provide your email."],},
    password: {type: String,},    
    programme: {type: String,},    
    contact: {type: String,},    
    year: {type: String,},    
    photo: {type: String,},    
    name: {type: String, required: [true, "Please provide your name."]},    
    school: {type: String, required: [true, "Please provide your school."]},    
}, { timestamps: true });

const Student = models?.Student || model("Student", StudentSchema);
export default Student