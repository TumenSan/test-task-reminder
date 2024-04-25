import { Status } from './status.model';

export class Reminder {
  id: number;
  shortDescription: string;
  fullDescription: string;
  creationDateTime: Date;
  completionDateTime: Date;
  status: Status;

  constructor(
    id: number,
    shortDescription: string,
    fullDescription: string,
    creationDateTime: Date,
    completionDateTime: Date,
    status: Status
  ) {
    this.id = id;
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.creationDateTime = creationDateTime;
    this.completionDateTime = completionDateTime;
    this.status = status;
  }
}
