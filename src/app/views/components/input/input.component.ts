import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  /** Props */
  @Input()
  public label!: string;

  @Input()
  public type!: string;

  @Input()
  public name!: string;

  /** Variables */
  public isFocused: boolean = false;
  public passwordText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * This function set the isFocused variable for change the class from active to inactive.
   * @return {void}
   */
  setIsFocus(): void {
    this.isFocused = true;
  }

  /**
   * This function return the text entered in the input password.
   * @param {string} event - entered text.
   * @return {void}
   */
   showInput(event: string | any): void {
    this.passwordText = event;
   }
}
