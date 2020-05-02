import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor(private http: HttpClient) {}

  editorData: any;
  date: Date;
  cards: any = [];
  postData: any;
  url: any;
  skills: any = [];

  ngOnInit(): void {
    this.cards.push({
      text: 'demoEvent',
      date: '2012-12-12',
    });
  }

  addEvent() {
    this.cards.push({
      text: this.editorData,
      date: this.date != null ? this.date : '2012-12-12',
    });
    this.sortByDate();
    this.scrollToLastCard();
    this.extractSkills();
  }

  sortByDate(): void {
    this.cards.sort((a: TimelineComponent, b: TimelineComponent) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  scrollToLastCard(): void {
    const nodes = document.querySelectorAll('.event-card');
    nodes[nodes.length - 1].scrollIntoView();
  }

  extractSkills(): void {
    this.postData = {
      text: this.stripHTML(this.editorData),
    };
    this.url = `https://api.iki.ai/api/skills_extraction/`;
    this.http
      .post(this.url, this.postData)
      .toPromise()
      .then((data) => {
        console.log(data);
        this.skills = this.skills.concat(data['skills']);
      });
  }

  stripHTML(str): string {
    const str1 = str.replace( /(<([^>]+)>)/ig, '');
    return str1;
  }
}
