// types.ts
export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'complete' | 'incomplete';
    due_date: string;
  }
  