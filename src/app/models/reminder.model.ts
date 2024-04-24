import { Status } from './status.model';

export class Reminder {
  shortDescription: string;
  fullDescription: string;
  creationDateTime: Date;
  completionDateTime: Date;
  status: Status;

  constructor(
    shortDescription: string,
    fullDescription: string,
    creationDateTime: Date,
    completionDateTime: Date,
    status: Status
  ) {
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.creationDateTime = creationDateTime;
    this.completionDateTime = completionDateTime;
    this.status = status;
  }
}
