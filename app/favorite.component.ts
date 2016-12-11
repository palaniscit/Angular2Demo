import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: "favorite",
    template: `
        <i class="glyphicon" (click)="onFavoriteClick()" 
            [class.glyphicon-star]="isFavorite" [class.glyphicon-star-empty]="!isFavorite"></i>
    `,
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `],
    inputs: ['isFavorite'],
    outputs: ['change']
})
export class FavoriteComponent {
    isFavorite = false;
    change = new EventEmitter();

    onFavoriteClick() {
        this.isFavorite = this.isFavorite ? false : true;
        this.change.emit({ newValue: this.isFavorite });
    }

}