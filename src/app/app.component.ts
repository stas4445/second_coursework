import { Component } from '@angular/core';
import { DateService } from './shared/date.service';
import { RouterOutlet } from '@angular/router';
import { animate, query, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DateService],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0.7,
            transform: 'scale(0.88)',
          }),
        ]),
        query(':enter', [
          animate('800ms ease',
            style({ opacity: 1, transform: 'scale(1)' })
          ),
        ])
      ])
    ])
  ]

})


export class AppComponent {

  constructor(public dateService: DateService) { }

  ngOnInit(): void {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation']
  }


}
