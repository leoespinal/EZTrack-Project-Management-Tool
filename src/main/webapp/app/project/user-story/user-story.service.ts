/**
 * Created by Leo Espinal on 6/7/17.
 */
import { Injectable } from '@angular/core';
import { UserStory } from './user-story.model';

@Injectable()
export class UserStoryService {
    // insert business logic to obtain user stories

    userStories: UserStory[];

    createUserStoriesList(userStory: UserStory): void {
        this.userStories.push(userStory);
    }

    getUserStoriesList(): UserStory[] {
        return this.userStories;
    }
}

