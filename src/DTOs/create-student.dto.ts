// create-student.dto.ts

export class CreateStudentDto {
  readonly username: string;
  readonly isPublic: boolean;
  readonly isActive: boolean;
  readonly idInstitute: number;
  readonly email: string;
  readonly password: string;
  readonly isTeacher: boolean;
}
