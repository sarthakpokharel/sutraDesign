import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b5';

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


  menuOpen(e:any){
    const element: HTMLElement = e.target;
    var ele = element.nextElementSibling
    
    if (ele?.classList.contains('show')){
      ele?.classList.remove('show')
    }
    else{
      ele?.classList.add('show')
    }

  }

  openMenu(e:any){
    const element: HTMLElement = e.target;
    const ele = element.nextElementSibling?.nextElementSibling
    const elem = element.nextElementSibling
    // console.log(ele)
    if (ele?.classList.contains('show') || elem?.classList.contains('show')){
      ele?.classList.remove('show') 
      elem?.classList.remove('show') 
    }
    else{
      ele?.classList.add('show') 
      elem?.classList.add('show')
    }
    
  }

  

}
