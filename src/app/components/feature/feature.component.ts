import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.css"],
})
export class FeatureComponent implements OnInit {
  @Input() t1: string = "";
  @Input() t2: string = "";
  @Input() original: string = "";
  @Input() discount: string = "";
  @Input() url: string = "";
  constructor() {}

  ngOnInit(): void {}
}
