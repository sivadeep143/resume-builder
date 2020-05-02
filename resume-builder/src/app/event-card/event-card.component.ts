import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  comment: any;
  constructor() {}
  @Input() data;

  ngOnInit(): void {
    this.comment = this.data['text'];
  }
}
