import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  openSubMenu(e:any){
    const element: HTMLElement = e.target
    element.nextElementSibling?.classList.add('show')
  } 

  closeSubMenu(e:any){
    const element: HTMLElement = e.target
    element.nextElementSibling?.classList.remove('show')
  }

}
