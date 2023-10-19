import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateTraceAudioDto } from 'src/DTOs/create-traceAudio.dto';
  import { TraceAudioService } from './trace-audio.service';
  import { TraceAudio } from 'src/Entities/traceAudio';


@Controller('traceAudio')
export class TraceAudioController {
  
        constructor(private readonly traceAudioService: TraceAudioService) {}
      
        @Get()
        async findAll(): Promise<TraceAudio[]> {
          return this.traceAudioService.getAllTraceAudios();
        }
      
        @Post()
        async createUser(@Body() createTraceAudioDto: CreateTraceAudioDto): Promise<any> {
          // Call the UserService to create the user
          const createdTraceAudio = await this.traceAudioService.createTraceAudio(createTraceAudioDto);
          return createdTraceAudio;
        }
      
        @Put(':id')
        async updateTraceAudio(@Param('id') id: number, @Body() updatedData: any) {
          return this.traceAudioService.updateTraceAudio(id, updatedData);
        }
      
        @Get(':id')
        async getTraceAudioById(@Param('id') id: number) {
          return this.traceAudioService.getTraceAudioById(id);
        }
      
        @Delete(':id')
        async deleteTraceAudioById(@Param('id') id: number) {
          await this.traceAudioService.deleteTraceAudioById(id);
          return { message: 'trace audio deleted successfully' };
        }
      }



