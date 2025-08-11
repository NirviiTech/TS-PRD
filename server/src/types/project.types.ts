import { Document, Types } from 'mongoose';

export interface IProject extends Document {
  name: string;
  clientId: Types.ObjectId; 
  startDate: Date;
  endDate?: Date;
  budget: number;
  status: 'ongoing' | 'completed' | 'on-hold';
}
