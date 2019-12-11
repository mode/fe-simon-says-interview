import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "flashing-box",
  templateUrl: "./flashing-box.component.html",
  styleUrls: ["./flashing-box.component.css"]
})
export class FlashingBoxComponent implements OnInit {
  @Input() colorSequence: string[];
  currentIndex = 0;
  interval: number;

  constructor() {
    this.interval = window.setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {}

  tick() {
    this.currentIndex++;
    if (this.currentIndex === this.colorSequence.length) {
      clearInterval(this.interval);
    }
  }
}
