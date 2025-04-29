class CommonHouse {
  public newspaper: string;
  public chairs: number;
  private poolTable: number;

  constructor(newspaper: string, chairs: number, poolTable: number) {
    this.newspaper = newspaper;
    this.chairs = chairs;
    this.poolTable = poolTable;
  }

  getPoolTable() {
    return this.poolTable;
  }
}

class House1 extends CommonHouse {
  private bike: string;
  constructor(
    newspaper: string,
    chairs: number,
    poolTable: number,
    bike: string
  ) {
    super(newspaper, chairs, poolTable);
    this.bike = bike;
  }

  printPoolTable() {
    console.log(this.getPoolTable());
  }
}

var obj: House1 = new House1("Times of India", 10, 2, "Honda");
obj.printPoolTable();
