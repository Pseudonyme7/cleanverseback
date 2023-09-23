import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from 'src/DTO/create-student.dto';
import { supabase } from 'supabase.config';

@Injectable()
export class StudentsService {
  async createStudent(createStudentDto: CreateStudentDto): Promise<any> {
    const { username, isactive, ispublic, password } = createStudentDto;

    // Use Supabase to insert a new user into your table (adjust the table name)
    const { data, error } = await supabase
      .from('Students') // Replace 'users' with your Supabase table name
      .upsert([{ username, isactive, ispublic, password }]);

    if (error) {
      throw error;
    }

    return data;
  }

  async getAllStudents(): Promise<any[]> {
    const { data, error } = await supabase.from('Students').select('*');
    if (error) {
      throw error;
    }
    return data;
  }
}
