import {filter} from './data';

import data from './Data.json';

test('testing the filter object is similar or not.',()=>{
    expert(filter(data, 3)).toEqual(data[3]);
})


