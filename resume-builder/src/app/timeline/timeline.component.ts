import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor() {}
  editorData: any;
  date: Date;
  cards: any = [];

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
    this.myfunction();
  }

  sortByDate(): void {
    this.cards.sort((a: TimelineComponent, b: TimelineComponent) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  myfunction(): void {
    const nodes = document.querySelectorAll('.event-card');
    nodes[nodes.length - 1].scrollIntoView();
  }
}
