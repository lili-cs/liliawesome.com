import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-index-card',
  templateUrl: './index-card.component.html',
  styleUrls: ['./index-card.component.scss']
})
export class IndexCardComponent implements OnInit {
  @Input() imgSrc: string = '';
  @Input() shape: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('hehe');
  }

}
