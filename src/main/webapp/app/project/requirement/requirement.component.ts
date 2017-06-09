import { Component, OnInit } from '@angular/core';
import { Requirement } from './requirement.model';
import { RequirementService } from './requirement.service';

@Component({
  selector: 'jhi-requirement',
  templateUrl: './requirement.component.html',
  styles: []
})
export class RequirementComponent implements OnInit {
    requirements: Requirement[];

    constructor(private requirementService: RequirementService) { }

    ngOnInit() {
        this.requirements = this.requirementService.getRequirementsList();
    }
}
