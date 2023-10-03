import { Injectable } from '@nestjs/common';
import { CreateInstituteDto } from 'src/DTOs/create-institute.dto';
import { supabase, TABLE_NAMES } from 'supabase.config';


@Injectable()
export class InstitutesService {
    async createInstitute(createInstituteDto: CreateInstituteDto): Promise<any> {
        const { name } = createInstituteDto;
    
        const { data, error } = await supabase
            .from(TABLE_NAMES.INSTITUTE) 
            .upsert([{ name }]);
    
        if (error) {
            throw error;
        }
    
        return data;
    }
    

  async getAllInstitutes(): Promise<any[]> {
    const { data, error } = await supabase.from('INSTITUTE').select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async updateInstitute(id: number, updatedData: any): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.INSTITUTE)
      .update(updatedData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  async getInstituteById(id: number): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.INSTITUTE)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async deleteInstituteById(id: number): Promise<void> {
    const { error } = await supabase.from(TABLE_NAMES.INSTITUTE).delete().eq('id', id);

    if (error) {
      throw error;
    }
  }
}




