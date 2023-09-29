import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from 'src/DTOs/create-student.dto';
import { supabase } from 'supabase.config';

@Injectable()
export class StudentsService {

  async createStudent(createStudentDto: CreateStudentDto): Promise<any> {
    const { username, isactive, ispublic, idInstitute, email, userType, password } = createStudentDto;

   
    const { data, error } = await supabase
      .from('STUDENT')
      .upsert([{ username, isactive, idInstitute, email, userType, password }]);

    if (error) {
      throw error;
    }

    return data;
  }

  async getAllStudents(): Promise<any[]> {
    const { data, error } = await supabase.from('STUDENT').select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async updateStudent(id: number, updatedData: any): Promise<any> {
    const { data, error } = await supabase
      .from('STUDENT')
      .update(updatedData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  async getStudentById(id: number): Promise<any> {
    const { data, error } = await supabase
      .from('STUDENT')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async deleteStudentById(id: number): Promise<void> {
    const { error } = await supabase.from('STUDENT').delete().eq('id', id);

    if (error) {
      throw error;
    }
  }

  async findOneByEmailStudent(email: string): Promise<any> {
    const { data, error } = await supabase
      .from('STUDENT')
      .select('*')
      .eq('email', email)

    if (error) {
      throw error;
    }

    return data;
  }

}
