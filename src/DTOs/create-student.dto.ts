// create-student.dto.ts

export class CreateStudentDto {
  readonly username: string;
  readonly isactive: boolean;
  readonly ispublic: boolean;
  readonly idInstitute: number;
  readonly email: string;
  readonly userType: 'student'
  readonly password: string;
}
