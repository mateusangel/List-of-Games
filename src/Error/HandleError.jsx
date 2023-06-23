export class HandleError extends Error {
  constructor(msg, status = null) {
    super(msg);
    this.msg = msg;
    this.status = status;
    this.name = "HandleError";
  }
}

export class CustomError extends Error {
  constructor(msg, status = null) {
    super(msg);
    this.msg = msg;
    this.status = status;
    this.name = "CustomError";
  }
}
export class Errorr extends Error {
  constructor(msg, status = null) {
    super(msg);
    this.msg = msg;
    this.status = status;
    this.name = "Errorr";
  }
}
