export var QuotesList = []

export class Quote {
  private id: number;
  public created: Date;
  public detailsVisible: boolean;
  public quoteLikes: number;
  public quoteDislikes: number;

  constructor(public creator: string, public qouteName: string, public description: string) {
    this.id = QuotesList.length + 1
    this.created = new Date()
    this.detailsVisible = false
    this.quoteLikes = 0
    this.quoteDislikes = 0
  }
}
