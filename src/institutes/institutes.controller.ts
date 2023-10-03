import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateInstituteDto } from 'src/DTOs/create-institute.dto';
  import { InstitutesService } from './institutes.service';
  import { Institute } from 'src/Entities/institute.entity';

@Controller('institutes')
export class InstitutesController {
    constructor(private readonly institutesService: InstitutesService) {}

    @Get()
    async findAll(): Promise<Institute[]> {
      return this.institutesService.getAllInstitutes();
    }
    
    @Post()
    async createAudio(@Body() createInstituteDto: CreateInstituteDto): Promise<any> {
      // Call the Publication Service to create the publication
      const createdInstitute = await this.institutesService.createInstitute(createInstituteDto);
      return createdInstitute;
    }
    @Put(':id')
    async updateInstitute(@Param('id') id: number, @Body() updatedData: any) {
      return this.institutesService.updateInstitute(id, updatedData);
    }
  
    @Get(':id')
    async getInstituteById(@Param('id') id: number) {
      return this.institutesService.getInstituteById(id);
    }
  
    @Delete(':id')
    async deleteInstituteById(@Param('id') id: number) {
      await this.institutesService.deleteInstituteById(id);
      return { message: 'Institue deleted successfully' };
    }
}