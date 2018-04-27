import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../entities/Note';
import { Trainee } from '../../../hydra-client/entities/Trainee';

@Pipe({
  name: 'noteByTraineeByWeek'
})
export class NoteByTraineeByWeekPipe implements PipeTransform {

  transform(value: Note[], trainee: Trainee, week: number ): Note {

    const n = value.filter( (note) => {

        return (note.type === 'TRAINEE' && note.trainee != null &&
          note.trainee.userId === trainee.userId && Number(note.week) === Number(week));
      })[0];

      if (n != null) {
        return n;
      } else {
        return new Note();
      }

  }

}
