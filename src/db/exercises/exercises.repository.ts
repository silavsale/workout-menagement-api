import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Exercise, ExerciseDocument } from "./schemas/exercise.schema";

@Injectable()
export class ExercisesRepository {
    constructor(@InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>){}

    async findOne(exerciseFilterQuery: FilterQuery<Exercise>): Promise<Exercise> {
        return this.exerciseModel.findOne(exerciseFilterQuery)
    }

    async find(exerciseFilterQuery: FilterQuery<Exercise>): Promise<Exercise[]>{
        return this.exerciseModel.find(exerciseFilterQuery)
    }

    async create(exercise: Exercise): Promise<Exercise> {
        const newexercise = new this.exerciseModel(exercise)
        return newexercise.save()
    }

    async findOneAndUpdate(exerciseFilterQuery: FilterQuery<Exercise>, exercise: Partial<Exercise>): Promise<Exercise>{
        return this.exerciseModel.findOneAndUpdate(exerciseFilterQuery, exercise, { new: true})
    }
}