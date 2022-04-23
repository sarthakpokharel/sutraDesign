import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
