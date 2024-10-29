import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  private pets: Pet[] = [];

  findAll(): Pet[] {
    return this.pets;
  }

  findOne(id: number): Pet {
    const pet = this.pets.find(pet => pet.id === id);
    if (!pet) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }
    return pet;
  }

  create(createPetDto: CreatePetDto): Pet {
    const newPet: Pet = {
      id: this.pets.length + 1,
      ...createPetDto,
    };
    this.pets.push(newPet);
    return newPet;
  }

  update(id: number, updatePetDto: UpdatePetDto): Pet {
    const petIndex = this.pets.findIndex(pet => pet.id === id);
    if (petIndex === -1) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }
    const updatedPet = { ...this.pets[petIndex], ...updatePetDto };
    this.pets[petIndex] = updatedPet;
    return updatedPet;
  }

  remove(id: number): void {
    const petIndex = this.pets.findIndex(pet => pet.id === id);
    if (petIndex === -1) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }
    this.pets.splice(petIndex, 1);
  }
}