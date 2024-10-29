import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './pet.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pet' })
  @ApiResponse({ status: 201, description: 'The pet has been successfully created.', type: Pet })
  create(@Body() createPetDto: CreatePetDto): Pet {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pets' })
  @ApiResponse({ status: 200, description: 'Return all pets.', type: [Pet] })
  findAll(): Pet[] {
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pet by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the pet' })
  @ApiResponse({ status: 200, description: 'Return the pet with the given ID.', type: Pet })
  @ApiResponse({ status: 404, description: 'Pet not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Pet { // ParseIntPipe is used to transform the id parameter to a number
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pet by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the pet' })
  @ApiResponse({ status: 200, description: 'The pet has been successfully updated.', type: Pet })
  @ApiResponse({ status: 404, description: 'Pet not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePetDto: UpdatePetDto): Pet {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pet by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the pet' })
  @ApiResponse({ status: 200, description: 'The pet has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Pet not found.' })
  remove(@Param('id', ParseIntPipe) id: number): void {
    return this.petsService.remove(id);
  }
}