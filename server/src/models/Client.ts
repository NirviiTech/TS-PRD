import { Schema, model } from 'mongoose';
import { IClient } from '../types/client.types.js';

const clientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

export const Client = model<IClient>('Client', clientSchema);
