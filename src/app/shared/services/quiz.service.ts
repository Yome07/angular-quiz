import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizContent: any[] = [];
  playerAnswers: { questionId: number; answer: string }[] = [];
  score = 0;
  isQuizFinished = false;
  playerName: string = '';

  constructor(private http: HttpClient) {}

  checkAnswers() {
    this.score = 0;
    for (let i = 0; i < this.playerAnswers.length; i++) {
      const question = this.quizContent.find(
        (q) => q.id === this.playerAnswers[i].questionId
      );
      if (!question) continue;
      for (let j = 0; j < question.answers.length; j++) {
        const currentAnswer = question.answers[j];
        if (
          currentAnswer.isCorrect &&
          this.playerAnswers[i].answer === currentAnswer.answerLabel
        ) {
          this.score += 1;
          break;
        }
      }
    }
    this.isQuizFinished = true;
  }

  addAnswer(answer: string, questionId: number) {
    const isAnswered = this.playerAnswers.find(
      (a) => a.questionId === questionId
    );
    if (isAnswered) {
      isAnswered.answer = answer;
      return;
    }
    this.playerAnswers.push({ questionId, answer });
  }

  getQuizContent(categoryName: string) {
    this.http
      .get(`http://localhost:3000/${categoryName}`)
      .subscribe((category: any) => {
        this.quizContent = category.questions.map((question: any) => ({
          id: question.id,
          question: question.label,
          answers: category.answers.filter(
            (answer: any) => answer.questionId === question.id
          ),
        }));
      });
  }

  resetQuiz() {
    this.quizContent = [];
    this.playerAnswers = [];
    this.score = 0;
    this.isQuizFinished = false;
  }
}
