import { Injectable } from '@nestjs/common';
import { CreateTraceAudioDto } from 'src/DTOs/create-traceAudio.dto';
import { supabase, TABLE_NAMES } from 'supabase.config';
import { TraceAudio } from '../Entities/traceAudio';



@Injectable()
export class TraceAudioService {

    async createTraceAudio(createTraceAudioDto: CreateTraceAudioDto): Promise<any> {
        const { dateOfAudio, idAudio, idStudent, idInstitute } = createTraceAudioDto;
    
        const { data, error } = await supabase
            .from(TABLE_NAMES.TRACEAUDIO) 
            .upsert([{ dateOfAudio, idAudio, idStudent, idInstitute }]);
    
        if (error) {
            throw error;
        }
    
        return data;
    }
    

    async getAllTraceAudios(): Promise<any[]> {
        const { data, error } = await supabase.from(TABLE_NAMES.TRACEAUDIO).select('*');
        if (error) {
            throw error;
        }
        return data;
    }

    
    async getTraceAudio(dateDebut: string, dateFin: string): Promise<any[]> {
        const startDate = new Date(dateDebut);
        const endDate = new Date(dateFin);
    
        const { data, error } = await supabase
            .from(TABLE_NAMES.TRACEAUDIO)
            .select('*')
            .gte('dateOfAudio', startDate)
            .lte('dateOfAudio', endDate);
    
        if (error) {
            throw error;
        }
    
        return data;
    }
    
      

    async updateTraceAudio(id: number, updatedData: any): Promise<any> {
        const { data, error } = await supabase
            .from(TABLE_NAMES.TRACEAUDIO)
            .update(updatedData)
            .eq('id', id);

        if (error) {
            throw error;
        }

        return data;
    }


    async getTraceAudioById(id: number): Promise<any> {
        const { data, error } = await supabase
            .from(TABLE_NAMES.TRACEAUDIO)
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw error;
        }

        return data;
    }

    async deleteTraceAudioById(id: number): Promise<void> {
        const { error } = await supabase.from(TABLE_NAMES.TRACEAUDIO).delete().eq('id', id);

        if (error) {
            throw error;
        }
    }
}




