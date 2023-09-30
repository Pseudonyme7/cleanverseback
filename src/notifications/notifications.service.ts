import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from 'src/DTOs/create-notification.dto';
import { supabase, TABLE_NAMES } from 'supabase.config';


@Injectable()
export class NotificationsService {
    async createNotification(createNotificationDto: CreateNotificationDto): Promise<any> {
        const { createdAt, idAudio, idStudent, idInstitute, surate, verseStart, verseEnd } = createNotificationDto;
    
        const { data, error } = await supabase
            .from(TABLE_NAMES.NOTIFICATION) 
            .upsert([{ createdAt, idAudio, idStudent, idInstitute, surate, verseStart, verseEnd }]);
    
        if (error) {
            throw error;
        }
    
        return data;
    }
    

  async getAllNotifications(): Promise<any[]> {
    const { data, error } = await supabase.from('NOTIFICATION').select('*');
    if (error) {
      throw error;
    }
    return data;
  }

  async updateNotification(id: number, updatedData: any): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.NOTIFICATION)
      .update(updatedData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  async getNotificationById(id: number): Promise<any> {
    const { data, error } = await supabase
      .from(TABLE_NAMES.NOTIFICATION)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  async deleteNotificationById(id: number): Promise<void> {
    const { error } = await supabase.from(TABLE_NAMES.NOTIFICATION).delete().eq('id', id);

    if (error) {
      throw error;
    }
  }
}




