// create-notification.dto.ts

export class CreateNotificationDto {
    readonly createdAt: string;
    readonly idAudio: number;
    readonly idStudent: number;
    readonly idInstitute: number;
    readonly surate: string;
    readonly verseStart: string;
    readonly verseEnd: string;
  }