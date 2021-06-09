import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ExerciseDocument = Exercise & Document

@Schema()
export class Exercise {
    @Prop()
    exerciseId: string;
    
    @Prop()
    name: string;

    @Prop()
    muscleGroup: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise)