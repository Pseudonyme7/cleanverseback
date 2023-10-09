import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from 'src/DTOs/create-publication.dto';
import { supabase, TABLE_NAMES } from 'supabase.config';


@Injectable()
export class PublicationsService {
    async createPublication(createPublicationDto: CreatePublicationDto): Promise<any> {
        const { title, level, message } = createPublicationDto;
    
        const { data, error } = await supabase
            .from(TABLE_NAMES.PUBLICATION) 
            .upsert([{ title, level, message }]);
    
        if (error) {
            throw error;
        }
    
        return data;
    }
    

  async getAllPublications(): Promise<any[]> {
    const { data, error } = await supabase.from(TABLE_NAMES.PUBLICATION).select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async updatePublication(id: number, updatedData: any): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.PUBLICATION)
      .update(updatedData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  async getPublicationById(id: number): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.PUBLICATION)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async deletePublicationById(id: number): Promise<void> {
    const { error } = await supabase.from(TABLE_NAMES.PUBLICATION).delete().eq('id', id);

    if (error) {
      throw error;
    }
  }
}

