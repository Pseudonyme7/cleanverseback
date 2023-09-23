// create-student.dto.ts

export class CreateStudentDto {
  readonly username: string;
  readonly isactive: boolean;
  readonly ispublic: boolean;
  readonly password: string;
}
