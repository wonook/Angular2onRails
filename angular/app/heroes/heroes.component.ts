import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'assets/app/heroes/heroes.component.html',
    styleUrls: ['assets/app/heroes/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';

    constructor(
        private _heroService: HeroService,
        private _router: Router
        ) { }

    ngOnInit() {
        this.getHeroes();
    }

    heroes: Hero[];
    errorMessage;
    getHeroes() {
        this._heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error
            );
    }

    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
