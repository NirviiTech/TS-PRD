
export interface IProject {
    _id?: string;
    name: string;
    clientId: string;
    startDate: Date;
    endDate?: Date;
    budget: number;
    status: 'ongoing' | 'completed' | 'on-hold';
    createdAt?: Date;
    updatedAt?: Date;
  }
  