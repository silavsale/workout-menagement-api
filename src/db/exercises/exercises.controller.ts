import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

import { Exercise } from './schemas/exercise.schema';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get(':exerciseId')
  async getExercise(@Param('exerciseId') exerciseId: string): Promise<Exercise> {
    return this.exercisesService.getExerciseById(exerciseId);
  }

  @Get()
  async getExercises(): Promise<Exercise[]> {
      return this.exercisesService.getExercises();
  }

  @Post()
  async createExercise(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
      return this.exercisesService.createExercise(createExerciseDto.name, createExerciseDto.muscleGroup)
  }

  @Patch(':exerciseId')
  async updateExercise(@Param('exerciseId') exerciseId: string, @Body() updateExerciseDto: UpdateExerciseDto): Promise<Exercise> {
      return this.exercisesService.updateExercise(exerciseId, updateExerciseDto);
  }
}