import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookmarksState } from './bookmanrks.reducer';

export const selectBookMarksState = createFeatureSelector('bookmarks');

export const selectBookmarksList = createSelector(
  selectBookMarksState,
  (bookmarksState: BookmarksState) => bookmarksState.list
);
