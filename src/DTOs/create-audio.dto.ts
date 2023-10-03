// create-audio.dto.ts

export class CreateAudioDto {
    readonly isResponse: boolean;
    readonly payload: string;
    readonly idInstitute: number;
    readonly idStudent: number;
  }