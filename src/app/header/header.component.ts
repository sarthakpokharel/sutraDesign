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

 
}
