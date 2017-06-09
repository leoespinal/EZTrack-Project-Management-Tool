/**
 * Created by Leo Espinal on 6/7/17.
 */

/* This class will be used to provide Requrirement object data to any components that need it */

import {Injectable} from "@angular/core";
import { Requirement } from './requirement.model';

@Injectable()
export class RequirementService {
    requirements: Requirement[];

    createRequirementsList(requirement: Requirement): void {
        this.requirements.push(requirement);
    }

    getRequirementsList(): Requirement[] {
        return this.requirements;
    }
}
