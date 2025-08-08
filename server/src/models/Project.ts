import { Schema, model } from 'mongoose';
import { IProject } from '../types/project.types';

const projectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    budget: { type: Number, required: true },
    status: { type: String, enum: ['ongoing', 'completed', 'on-hold'], default: 'ongoing' },
  },
  { timestamps: true }
);

export const Project = model<IProject>('Project', projectSchema);
