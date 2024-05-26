import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
 darkModeSignal = signal<string>(
  JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'null')
 );
  constructor() { 
    effect(()=>{
      window.localStorage.setItem('darkModeSignal' ,JSON.stringify(this.darkModeSignal())

      )
    })
  }

  updateDarkMode(){
    this.darkModeSignal.update((value)=>(value === "dark"? "null":"dark"))
  }


}
