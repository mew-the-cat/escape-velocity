export class AlertText {
  header: string;
  body: string;
  variant: string;

  constructor(header: string, body: string, variant: string) {
    this.header = header;
    this.body = body;
    this.variant = variant;
  }
}
