import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})

export class ShellComponent {

  // we inject the breakpoint observer into the constructor
  constructor(private breakpointObserver: BreakpointObserver ) {}

  // we have acess to an observable dat listens to different breakpoints
  // & helps us to react to different viewport sizes
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  // we pipe in some operators here
  // we map the result of the breakpoint change, so we map to a single value 
  // shareReplay will allow us subscribe to an observable multiple times in a template using a async pipe
  .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
