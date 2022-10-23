import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  /** Props */
  @Input() title!: string;
  @Input() showModal!: boolean;
  @Input() closeModal!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
