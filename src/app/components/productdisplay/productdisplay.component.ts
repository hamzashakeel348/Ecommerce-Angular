import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-productdisplay",
  templateUrl: "./productdisplay.component.html",
  styleUrls: ["./productdisplay.component.css"],
})
export class ProductdisplayComponent implements OnInit {
  constructor() {}
  data(f: NgForm) {
    this.products.push(f.value);
    console.log(this.products);
  }
  ngOnInit(): void {}
  products = [
    {
      text1: "The Shoe",
      text2: "Summer Collection",
      text3: "$9.50",
      url: "https://www.dropbox.com/s/i2pd85w2kdbhb5n/1.webp?raw=1",
    },
    {
      text1: "Marc Jacobs Bag",
      text2: "Summer Collection",
      text3: "$9.50",
      url: "https://www.dropbox.com/s/y0juuizirnw82ge/2.webp?raw=1",
    },
    {
      text1: "The Belt",
      text2: "Summer Collection",
      text3: "$9.50",
      url: "https://www.dropbox.com/s/56px247j6q8bp42/3.webp?raw=1",
    },
    {
      text1: "The Shoe",
      text2: "Summer Collection",
      text3: "$9.50",
      url: "https://www.dropbox.com/s/i2pd85w2kdbhb5n/1.webp?raw=1",
    },
    {
      text1: "Marc Jacobs Bag",
      text2: "Summer Collection",
      text3: "$9.50",
      url: "https://www.dropbox.com/s/y0juuizirnw82ge/2.webp?raw=1",
    },
    {
      text1: "The Belt",
      text2: "Summer Collection",
      text3: "$9.50",
      url: "https://www.dropbox.com/s/56px247j6q8bp42/3.webp?raw=1",
    },
  ];
}

interface ProductData {
  name: string;
  collection: string;
  price: string;
}
