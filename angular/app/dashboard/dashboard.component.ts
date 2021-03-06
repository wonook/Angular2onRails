import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './../heroes/hero';
import {HeroService} from './../heroes/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'assets/app/dashboard/dashboard.component.html',
    styleUrls: ['assets/app/dashboard/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    constructor(
        private _heroService: HeroService,
        private _router: Router
        ) { }

    heroes: Hero[] = [];
    errorMsg;
    ngOnInit() {
        this._heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes.slice(1, 5),
                error => this.errorMsg = error
                );
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}
