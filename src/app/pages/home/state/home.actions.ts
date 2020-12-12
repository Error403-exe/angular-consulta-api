import { createAction, props } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{ query: string }>(),

);

export const loadCurrentWeatherSuccess = createAction(
    '[Wather API] Load Current Weather Success',
    props<{ entity: any }>(),
);
export const loadCurrentWeatherFailed = createAction(
    '[Wather API] Load Current Weather Failed',
);

export const toggleBookmark = createAction(
    '[Home] toggle bookmark',
    props<{ entity: Bookmark }>(),
);

export const loadCurrentWeatherById = createAction(
    '[Home] Load Current Weather By Id',
    props<{ id: string }>(),
);

export const clearHomeState = createAction('[Home] Clear Home State');