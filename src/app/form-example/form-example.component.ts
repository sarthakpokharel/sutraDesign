import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {



  ngOnInit(): void {
  }

  hidesidebar(e:any){
    const element: HTMLElement = e.target;
    const ele = element.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
    const icon = document.getElementsByClassName('hideSection')[0]
    const icons = document.getElementsByClassName('bi-chevron-double-right')[0]
    if (ele!.classList.contains('toCollapse')){
      ele!.style.width = '2%';
      ele?.classList.remove('toCollapse')
      icon.setAttribute ('style','display:none')
      icons.setAttribute ('style','margin-left:-22px')
    }
    else{
      ele?.classList.add('toCollapse')
      ele!.style.width = '16%';
      icon.setAttribute ('style','display:')
      icons.setAttribute ('style','margin-left:')
    }
    
  }


}
