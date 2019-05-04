export class User {
  id: number;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  createDate: Date;
  modifiedDate: Date;
  country: string;
  eyeColor: string;
  phoneNumber: string;
  age: number;
  tall: number;

  constructor(id: number,
              name: string,
              lastName: string,
              userName: string,
              email: string,
              password: string,
              country: string,
              eyeColor: string,
              phoneNumber: string,
              age: number,
              tall: number
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.createDate = null;
    this.modifiedDate = null;
    this.country = country;
    this.eyeColor = eyeColor;
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.tall = tall;
  }
}
