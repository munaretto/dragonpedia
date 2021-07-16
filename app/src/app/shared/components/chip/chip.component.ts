import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.sass']
})
export class ChipComponent implements OnInit {

  @Input() content: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
