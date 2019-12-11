import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.css"]
})
export class BoxComponent implements OnInit {
  @Input() color: string;
  @Input() public handleUserChoice: (color: string) => void;

  handleClick() {
    this.handleUserChoice(this.color);
  }

  constructor() {}

  ngOnInit() {}
}
