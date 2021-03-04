import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BookMarksEffects } from './state/bookmark.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookMarksEffects]),
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [BookmarksPage],
})
export class BookmarksModule {}
