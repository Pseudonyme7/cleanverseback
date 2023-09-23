import { Injectable } from '@nestjs/common';
import { supabase } from 'supabase.config';

@Injectable()
export class UserService {
  async createUser(username: string, password: string): Promise<any> {
    const { data, error } = await supabase
      .from('users')
      .upsert([{ username, password }]);

    if (error) {
      throw error;
    }

    return data;
  }

  // Add more Supabase-related methods as needed...
}
