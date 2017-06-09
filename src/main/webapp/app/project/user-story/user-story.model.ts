/**
 * Created by Leo Espinal on 6/7/17.
 */
import { User } from '../../shared/user/user.model';
import { Priorities } from '../priorities.model';
import { Status } from '../status.model';

export class UserStory {
    title: string;
    description: string;
    owner: User;
    priority: Priorities;
    deadline: Date;
    status: Status;
    comments: String;

    constructor(
        title: string,
        description: string,
        owner: User,
        priority: Priorities,
        deadline: Date,
        status: Status,
        comments: string
    ) {
        this.title = title;
        this.description = description;
        this.owner = owner;
        this.priority = priority;
        this.deadline = deadline;
        this.status = status;
        this.comments = comments;
    }
}
