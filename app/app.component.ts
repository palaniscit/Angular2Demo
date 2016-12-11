import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component'; 

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent]
})
export class AppComponent { 
    imageUrl = "http://lorempixel.com/400/200";
    isActive = true;
    title="Two Way Binding";
    post= {
        test: 'test',
        isFavorite: true
    };

    onClick($event) {
        console.log("Event Binding button clicked", $event);
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}