/**
 * @jest-environment node
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';


import ConnectedApp,{App} from './App';
import {Provider} from 'react-redux'

import {createStore} from 'redux'


// describe('<App />', () =>{
//     it('renders 1 <App /> cimponent', ()=>{
//         const compoennt = shallow(<App/>);
//         expect(component).toHaveLength(1);
//     });
// });

describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper
     const output = 1

     beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedApp store={store} /> )  
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
    
});