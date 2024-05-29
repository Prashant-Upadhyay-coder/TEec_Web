import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageURL_content='/assets/images/Low code development-amico.png'
  // home_image='/assets/images/Data report-pana 2.png'
  home_image='/assets/images/bro.png'
  lines: string[] = [
    'Welcome to Cyber Security Audit Simplified.',
    'We ensure your data is secure.',
    'Experience the best security audits.',
    'Your security, our priority.',
    'Role based access control',
    'Made in India'
  ];
  currentLineIndex = 0;
  currentText = '';
  charIndex = 0;
  typingSpeed = 100; // Typing speed in milliseconds

  ngOnInit() {
    this.typeLine();
  }

  typeLine() {
    if (this.charIndex < this.lines[this.currentLineIndex].length) {
      this.currentText += this.lines[this.currentLineIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typeLine(), this.typingSpeed);
    } else {
      setTimeout(() => this.eraseLine(), 2000); // Wait before erasing
    }
  }

  eraseLine() {
    if (this.charIndex > 0) {
      this.currentText = this.currentText.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.eraseLine(), this.typingSpeed / 2);
    } else {
      this.currentLineIndex = (this.currentLineIndex + 1) % this.lines.length;
      this.typeLine();
    }
  }
}
