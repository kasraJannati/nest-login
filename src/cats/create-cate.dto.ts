// DTO: Data Transfer Object. It is an object that defines how data will be sent over the network.
// It is used to define the structure of the data that will be sent between the client and the server.
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto extends CreateCatDto {}
