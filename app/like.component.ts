import {Component} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i class='glyphicon' 
            [class.glyphicon-heart-empty]='!isLiked' 
            [class.glyphicon-heart]='isLiked'
            (click)='onLikeClick($event)'>
        </i>
    `,
    styles: [`
        .glyphicon-heart-empty {
            color: orange;
        }
        .glyphicon-heart {
            color: deeppink;
        }
    `],
    inputs: ['isLiked']
})
export class LikeComponent {
    isLiked = false;

    onLikeClick($event) {
        this.isLiked = (this.isLiked) ? false : true;
    }
}