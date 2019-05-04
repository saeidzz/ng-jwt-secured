export class InstantMessage {
  message: string;
  status: string;

  constructor(
    status: string,
    message: string) {
    this.message = message;
    this.status = status;
  }
}
