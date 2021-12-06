import changeTheNumber from "./updown";
import multTheNumber from './Mult';

import { combineReducers } from "redux";

const rootReducers = combineReducers(
    {
        Change : changeTheNumber,
        Multiplier: multTheNumber
    }
);

export default rootReducers;