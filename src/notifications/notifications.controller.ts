import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateNotificationDto } from 'src/DTOs/create-notification.dto';
  import { NotificationsService } from './notifications.service';
  import { Notification } from 'src/Entities/notification.entity';

@Controller('notifications')
export class NotificationsController {
  

    constructor(private readonly notificationsService: NotificationsService) {}
  
    @Get()
    async findAll(): Promise<Notification[]> {
      return this.notificationsService.getAllNotifications();
    }
  
    @Post()
    async createUser(@Body() createNotificationDto: CreateNotificationDto): Promise<any> {
      // Call the UserService to create the user
      const createdNotification = await this.notificationsService.createNotification(createNotificationDto);
      return createdNotification;
    }
  
    @Put(':id')
    async updateNotification(@Param('id') id: number, @Body() updatedData: any) {
      return this.notificationsService.updateNotification(id, updatedData);
    }
  
    @Get(':id')
    async getNotificationById(@Param('id') id: number) {
      return this.notificationsService.getNotificationById(id);
    }
  
    @Delete(':id')
    async deleteNotificationById(@Param('id') id: number) {
      await this.notificationsService.deleteNotificationById(id);
      return { message: 'Student deleted successfully' };
    }
  }
  