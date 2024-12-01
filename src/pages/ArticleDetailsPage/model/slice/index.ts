import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
