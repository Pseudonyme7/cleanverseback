// student.entity.ts
export enum UserType {
  STUDENT = 'student',
  TEACHER = 'teacher',
}
export class Student {
  id: number;
  username: string;
  ispublic: boolean;
  isactive: boolean;
  idInstitute: number;
  userType: UserType;
  password: string;
  // Add other properties as needed
}
