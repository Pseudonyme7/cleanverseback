import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateTeacherDto } from 'src/DTOs/create-teacher.dto';
  import { TeachersService } from './teachers.service';
  import { Teacher } from 'src/Entities/teacher.entity';
  
  @Controller('teachers')
  export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}
  
    @Get()
    async findAll(): Promise<Teacher[]> {
      return this.teachersService.getAllTeacher();
    }
  
    @Post()
    async createUser(@Body() createUserDto: CreateTeacherDto): Promise<any> {
      // Call the UserService to create the user
      const createdUser = await this.teachersService.createTeacher(createUserDto);
      return createdUser;
    }
  
    @Put(':id')
    async updateTeacher(@Param('id') id: number, @Body() updatedData: any) {
      return this.teachersService.updateTeacher(id, updatedData);
    }
  
    @Get(':id')
    async getTeacherById(@Param('id') id: number) {
      return this.teachersService.getTeacherById(id);
    }
  
    @Delete(':id')
    async deleteTeacherById(@Param('id') id: number) {
      await this.teachersService.deleteTeacherById(id);
      return { message: 'Student deleted successfully' };
    }
  }
