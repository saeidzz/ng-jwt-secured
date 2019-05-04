import {InstantMessage} from './InstantMessage.model';

export class MyResponse {
  instantMessage: InstantMessage;
  body: Object;

  constructor(
    instantMessage: InstantMessage,
    body: Object) {
    this.instantMessage = instantMessage;
    this.body = body ;
  }
}
