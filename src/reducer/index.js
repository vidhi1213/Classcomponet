import {combineReducers} from 'redux';
import {HeroesReducer}from './HeroesReducer';

export default combineReducers({
    heroes:HeroesReducer,
})