// teacher.entity.ts
export enum UserType {
    STUDENT = 'student',
    TEACHER = 'teacher',
  }
export class Teacher {
    id: number;
    username: string;
    isactive: boolean;
    idInstitute: number;
    email: string;
    password: string;
    userType: UserType;
    // Add other properties as needed
  }