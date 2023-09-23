import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from 'src/DTOs/create-student.dto';
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

  async updateStudent(id: number, updatedData: any): Promise<any> {
    const { data, error } = await supabase
      .from('Students')
      .update(updatedData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  async getStudentById(id: number): Promise<any> {
    const { data, error } = await supabase
      .from('Students')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async deleteStudentById(id: number): Promise<void> {
    const { error } = await supabase.from('Students').delete().eq('id', id);

    if (error) {
      throw error;
    }
  }
}
