import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentDto } from 'src/DTO/create-student.dto';
import { StudentsService } from './students.service';
import { Student } from 'src/Entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.getAllStudents();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateStudentDto): Promise<any> {
    // Call the UserService to create the user
    const createdUser = await this.studentsService.createStudent(createUserDto);
    return createdUser;
  }
}
