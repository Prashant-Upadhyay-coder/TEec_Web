import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent implements OnInit {
  ngOnInit(): void {
    console.log('certificartion')
  }

}
