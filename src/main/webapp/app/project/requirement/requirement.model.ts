/**
 * Created by Leo Espinal on 6/7/17.
 */
import { User } from '../../shared/user/user.model';
import { Priorities } from '../priorities.model';
import { Status } from '../status.model';
import { UserStory } from '../user-story/user-story.model';

export class Requirement {
    title: string;
    description: string;
    owner: User;
    priority: Priorities;
    deadline: Date;
    status: Status;
    userStories?: UserStory[];

    constructor(
        title: string,
        description: string,
        owner: User,
        priority: Priorities,
        deadline: Date,
        status: Status,
        userStories?: UserStory[]
    ) {
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.priority = priority;
        this.deadline = deadline;
        this.status = status;
        this.userStories = userStories;
    }

}
