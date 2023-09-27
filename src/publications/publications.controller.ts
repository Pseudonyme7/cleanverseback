import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreatePublicationDto } from 'src/DTOs/create-publication.dto';
  import { PublicationsService } from './publications.service';
  import { Publication } from 'src/Entities/publication.entity';

@Controller('publications')
export class PublicationsController {
    constructor(private readonly publicationsService: PublicationsService) {}

    @Get()
    async findAll(): Promise<Publication[]> {
      return this.publicationsService.getAllPublications();
    }
    
    @Post()
    async createPublication(@Body() createPublicationDto: CreatePublicationDto): Promise<any> {
      // Call the Publication Service to create the publication
      const createdPublication = await this.publicationsService.createPublication(createPublicationDto);
      return createdPublication;
    }
    @Put(':id')
    async updatePublication(@Param('id') id: number, @Body() updatedData: any) {
      return this.publicationsService.updatePublication(id, updatedData);
    }
  
    @Get(':id')
    async getPublicationById(@Param('id') id: number) {
      return this.publicationsService.getPublicationById(id);
    }
  
    @Delete(':id')
    async deletePublicationById(@Param('id') id: number) {
      await this.publicationsService.deletePublicationById(id);
      return { message: 'Publication deleted successfully' };
    }
}



