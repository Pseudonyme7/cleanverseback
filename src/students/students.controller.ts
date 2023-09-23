import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto } from 'src/DTOs/create-student.dto';
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

  @Put(':id')
  async updateStudent(@Param('id') id: number, @Body() updatedData: any) {
    return this.studentsService.updateStudent(id, updatedData);
  }

  @Get(':id')
  async getStudentById(@Param('id') id: number) {
    return this.studentsService.getStudentById(id);
  }

  @Delete(':id')
  async deleteStudentById(@Param('id') id: number) {
    await this.studentsService.deleteStudentById(id);
    return { message: 'Student deleted successfully' };
  }
}
