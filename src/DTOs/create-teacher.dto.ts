// create-teacher.dto.ts

export class CreateTeacherDto {
    readonly username: string;
    readonly isactive: boolean;
    readonly idInstitute: number;
    readonly email: string;
    readonly password: string;
    readonly isTeacher: boolean;
  }