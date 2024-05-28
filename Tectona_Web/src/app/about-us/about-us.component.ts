import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent  implements  OnInit{
  ngOnInit(): void {
    console.log("about")
  }
  imageURL_content='/assets/images/Company-amico.png'
  imageURL_content_02='/assets/images/New employee-amico.png'
  img_icon='/assets/images/meeting-icon.png'


}
