class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  public constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected key: Key;
  protected door: boolean = false;
  protected tenants: Person[] = [];

  public comeIn(person: Person): void {
    if (this.door) {
      [...this.tenants, person];
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public constructor(key: Key) {
    super();
    this.key = key;
  }

  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
