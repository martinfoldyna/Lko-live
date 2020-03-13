import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbInputModule,
  NbToastrService,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

// components
import { AddUrlThumbnailPostComponent } from './add-url-thumbnail-post/add-url-thumbnail-post.component';
import {MomentModule} from 'ngx-moment';
import {FormsModule} from '@angular/forms';

const MODULES = [
  NbAlertModule,
  NbActionsModule,
  NbButtonModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  ThemeModule,
  MomentModule,
  FormsModule,
  NbInputModule,
];

@NgModule({
    imports: [
        ...MODULES,
    ],
    declarations: [
        AddUrlThumbnailPostComponent,
    ],
    exports: [
        AddUrlThumbnailPostComponent
    ]
})
export class ExtraComponentsModule { }
