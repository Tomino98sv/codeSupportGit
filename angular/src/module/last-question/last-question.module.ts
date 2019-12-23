import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastQuestionRoutingModule } from './last-question-routing.module';
import { ListQuestionsComponent } from './list-questions/list-questions.component';


@NgModule({
  declarations: [ListQuestionsComponent],
  imports: [
    CommonModule,
    LastQuestionRoutingModule
  ]
})
export class LastQuestionModule { }
