import { Request, Response } from 'express';
import { Project } from '../models/project.model';
import { IProject } from '../types/project.types';

export const createProject = async (req: Request, res: Response) => {
  try {
    const project: IProject = req.body;
    const newProject = await Project.create(project);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: 'Error creating project', error: err });
  }
};

export const getProjects = async (_: Request, res: Response) => {
  try {
    const projects = await Project.find().populate('clientId');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err });
  }
};
