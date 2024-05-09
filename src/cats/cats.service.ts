import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    { name: 'Cat1', age: 1, breed: 'Breed1' },
    { name: 'Cat2', age: 2, breed: 'Breed2' },
    { name: 'Cat3', age: 3, breed: 'Breed3' },
  ];

  // create a *method* that creates a new cat and adds it to the cats array
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
