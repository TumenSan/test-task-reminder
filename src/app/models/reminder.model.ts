import { ReminderStatus } from './status.model';

export class Reminder {
  id: number;
  status: ReminderStatus;
  shortDescription: string;
  fullDescription: string;
  creationDateTime: Date;
  completionDateTime: Date;

  constructor(
    id: number,
    status: ReminderStatus,
    shortDescription: string,
    fullDescription: string,
    creationDateTime: Date,
    completionDateTime: Date
  ) {
    this.id = id;
    this.status = status;
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.creationDateTime = creationDateTime;
    this.completionDateTime = completionDateTime;
  }
}
