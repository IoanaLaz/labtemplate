export class Client {
    id: number;
    name: String;
    birthday: Date;
    sex: String;
    adress: String;
    createdAt: String;
    updatedAt: String;

    constructor(id?: number, name?: String,birthday?: Date,sex?: String,adress?:String, createdAt?:String, updateAt?:String) {
         this.id = id;
         this.name = name;
         this.birthday=birthday;
         this.sex = sex;
         this.adress=adress;
         this.createdAt = createdAt;
         this.updatedAt = updateAt;
    }
  
}