import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateAudioDto } from 'src/DTOs/create-audio.dto';
  import { AudiosService } from './audios.service';
  import { Audio } from 'src/Entities/audio.entity';

@Controller('audios')
export class AudiosController {
    constructor(private readonly audiosService: AudiosService) {}

    @Get()
    async findAll(): Promise<Audio[]> {
      return this.audiosService.getAllAudios();
    }
    
    @Post()
    async createAudio(@Body() createAudioDto: CreateAudioDto): Promise<any> {
      // Call the Publication Service to create the publication
      const createdAudio = await this.audiosService.createAudio(createAudioDto);
      return createdAudio;
    }
    @Put(':id')
    async updateAudio(@Param('id') id: number, @Body() updatedData: any) {
      return this.audiosService.updateAudio(id, updatedData);
    }
  
    @Get(':id')
    async getAudioById(@Param('id') id: number) {
      return this.audiosService.getAudioById(id);
    }
  
    @Delete(':id')
    async deleteAudioById(@Param('id') id: number) {
      await this.audiosService.deleteAudioById(id);
      return { message: 'Audio deleted successfully' };
    }
}



