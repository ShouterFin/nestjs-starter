export class Pet {
    id: number;
    name: string;
    description: string;
    date_of_birth: Date;
  
    constructor(id: number, name: string, description: string, date_of_birth: Date) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.date_of_birth = date_of_birth;
    }
  }