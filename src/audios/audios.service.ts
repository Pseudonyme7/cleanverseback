import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from 'src/DTOs/create-audio.dto';
import { supabase, TABLE_NAMES } from 'supabase.config';
import { Logger } from '@nestjs/common'; 

@Injectable()
export class AudiosService {
  async createAudio(createAudioDto: CreateAudioDto): Promise<any> {
    const {
        isResponse,
        payload,
        idInstitute,
        idStudent,
    } = createAudioDto;


    const { data, error } = await supabase
      .from(TABLE_NAMES.AUDIO)
      .upsert([
        {
          isResponse,
          payload,
          idInstitute,         
          idStudent,
        },
      ]);

    if (error) {
      throw error;
    }

    return data;
  }

  async getAllAudios(): Promise<any[]> {
    const { data, error } = await supabase.from(TABLE_NAMES.AUDIO).select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async updateAudio(id: number, updatedData: any): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.AUDIO)
      .update(updatedData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  async getAudioById(id: number): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.AUDIO)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async deleteAudioById(id: number): Promise<void> {
    const { error } = await supabase.from(TABLE_NAMES.AUDIO).delete().eq('id', id);

    if (error) {
      throw error;
    }
  }
}

