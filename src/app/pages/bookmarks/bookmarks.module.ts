import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BookmarksEffects } from './state/bookmarks.effects';



@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    ReactiveFormsModule,
    EffectsModule.forFeature([BookmarksEffects]),
    ComponentsModule,
  ]
})
export class BookmarksModule { }
