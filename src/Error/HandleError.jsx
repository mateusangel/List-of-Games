export class HandleError extends Error {
  constructor(msg, status) {
    super(msg);
    this.msg = msg;
    this.status = status;
  }
}
