import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { EZTrackSharedModule, UserRouteAccessService } from './shared';
import { EZTrackHomeModule } from './home/home.module';
import { EZTrackAdminModule } from './admin/admin.module';
import { EZTrackAccountModule } from './account/account.module';
import { EZTrackEntityModule } from './entities/entity.module';
// Added by Leo
import { EZTrackProjectModule } from './project/project.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';
import { ProjectComponent } from './project/project.component';
import { AddRequirementsComponent } from './project/add-requirements/add-requirements.component';
import { ViewRequirementsComponent } from './project/view-requirements/view-requirements.component';
import { UserStoryComponent } from './project/user-story/user-story.component';
import { BacklogComponent } from './project/backlog/backlog.component';
import { RequirementComponent } from './project/requirement/requirement.component';
import { RequirementService } from "./project/requirement/requirement.service";
import { UserStoryService } from "./project/user-story/user-story.service";
import { BackLogService } from "./project/backlog/backlog.service";
import { RequirementDetailComponent } from './project/requirement/requirement-detail/requirement-detail.component';
import { UserStoryDetailComponent } from './project/user-story/user-story-detail/user-story-detail.component';


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EZTrackSharedModule,
        EZTrackHomeModule,
        EZTrackAdminModule,
        EZTrackAccountModule,
        EZTrackEntityModule,
        // Added by Leo
        EZTrackProjectModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        SidebarComponent,
        ProjectComponent,
        AddRequirementsComponent,
        ViewRequirementsComponent,
        UserStoryComponent,
        BacklogComponent,
        RequirementComponent,
        RequirementDetailComponent,
        UserStoryDetailComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
        // Leo added these services below to share data among various components
        RequirementService,
        UserStoryService,
        BackLogService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EZTrackAppModule {}
