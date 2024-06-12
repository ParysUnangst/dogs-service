import { Controller, Get, Post, Param, Body, Put, Delete, NotFoundException } from '@nestjs/common';

interface Dog {
  id: number;
  name: string;
  age: number;
}

@Controller('dogs')
export class DogsController {
  private dogs: Dog[] = [];
  private idCounter: number = 1;

  @Get()
  getAllDogs(): Dog[] {
    return this.dogs;
  }

  @Post()
  createDog(@Body() dogData: Omit<Dog, 'id'>): Dog {
    const newDog = { id: this.idCounter++, ...dogData };
    this.dogs.push(newDog);
    return newDog;
  }

  @Get(':id')
  getDogById(@Param('id') id: number): Dog {
    const dog = this.dogs.find(dog => dog.id === Number(id));
    if (!dog) {
      throw new NotFoundException('Dog not found');
    }
    return dog;
  }

  @Put(':id')
  updateDog(@Param('id') id: number, @Body() dogData: Omit<Dog, 'id'>): Dog {
    const index = this.dogs.findIndex(dog => dog.id === Number(id));
    if (index === -1) {
      throw new NotFoundException('Dog not found');
    }
    this.dogs[index] = { id: Number(id), ...dogData };
    return this.dogs[index];
  }

  @Delete(':id')
  deleteDog(@Param('id') id: number): { message: string } {
    const index = this.dogs.findIndex(dog => dog.id === Number(id));
    if (index === -1) {
      throw new NotFoundException('Dog not found');
    }
    this.dogs.splice(index, 1);
    return { message: 'Dog deleted successfully' };
  }
}
