import { Request, Response } from 'express';
import { Employee } from '../models/Employee';
import { IEmployee } from '../types/employee.types';

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee: IEmployee = req.body;
    const newEmployee = await Employee.create(employee);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: 'Error creating employee', error: err });
  }
};

export const getEmployees = async (_: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching employees', error: err });
  }
};
