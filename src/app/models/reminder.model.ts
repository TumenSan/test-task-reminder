export class Reminder {
  shortDescription: string;
  fullDescription: string;
  creationDateTime: Date;
  completionDateTime: Date;
  status: string;

  constructor(
    shortDescription: string,
    fullDescription: string,
    creationDateTime: Date,
    completionDateTime: Date,
    status: string
  ) {
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.creationDateTime = creationDateTime;
    this.completionDateTime = completionDateTime;
    this.status = status;
  }
}
