import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b5';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.addEventListener("click", () => {
      var element = document.getElementsByClassName('closethis');
      for (var i = 0; i < element.length; i++) {
          element[i].classList.remove('show');
      }
    }, true);
   }

  ngOnInit(): void {

  //   setTimeout (() => {

  //         var element = document.getElementsByClassName('nav-tabs')[0];

  //   console.log(element)

  //   const grid = document.createElement("i");
  //   const crate = document.createElement("i");

  //   crate.classList.add('fa fa-caret-down')
  //   grid.classList.add('fa fa-th')

  //     element.appendChild(grid);
  //     element.appendChild(crate);
    
  //  }, 1000);
  }



}
