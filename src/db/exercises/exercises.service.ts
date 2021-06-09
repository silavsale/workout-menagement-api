import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateExerciseDto } from "./dto/update-exercise.dto";

import { Exercise } from "./schemas/exercise.schema";
import { ExercisesRepository } from "./exercises.repository";

@Injectable()
export class ExercisesService {
    constructor(private readonly exercisesRepository: ExercisesRepository) {}

    async getExerciseById(exerciseId: string): Promise<Exercise> {
        return this.exercisesRepository.findOne({ exerciseId })
    }

    async getExercises(): Promise<Exercise[]> {
        return this.exercisesRepository.find({});
    }

    async createExercise(name: string, muscleGroup: string): Promise<Exercise> {
        return this.exercisesRepository.create({
            exerciseId: uuidv4(),
            name,
            muscleGroup,
        })
    }

    async updateExercise(exerciseId: string, exerciseUpdates: UpdateExerciseDto): Promise<Exercise> {
        return this.exercisesRepository.findOneAndUpdate({ exerciseId }, exerciseUpdates);
    }
}
