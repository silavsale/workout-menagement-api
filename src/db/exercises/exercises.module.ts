import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { Exercise, ExerciseSchema } from './schemas/exercise.schema';
import { ExercisesController } from './exercises.controller';
import { ExercisesRepository } from './exercises.repository';
import { ExercisesService } from './exercises.service'

@Module({
    imports: [MongooseModule.forFeature([{name: Exercise.name, schema: ExerciseSchema}])],
    controllers: [ExercisesController],
    providers: [ExercisesService, ExercisesRepository]
})

export class ExercisesModule {}