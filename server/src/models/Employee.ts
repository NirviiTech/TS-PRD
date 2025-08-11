import { Schema, model } from 'mongoose';
import { IEmployee } from '../types/employee.types.js';

const employeeSchema = new Schema<IEmployee>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    joinDate: { type: Date, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Employee = model<IEmployee>('Employee', employeeSchema);
