import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Home from './components/Home/home';
import ConnectedHome from './components/Home';
import configureStore from 'redux-mock-store';
import { INITIAL_SEARCH_STATE }  from './schema';
import { Provider } from 'react-redux';

const mockStore = configureStore();

describe('Github Search App', () => {
  let store, wrapper;
  const event = {target: {id: "org-name", value: "google"}};
  beforeEach(()=>{
    store = mockStore(INITIAL_SEARCH_STATE);
    wrapper = mount(<Provider store={store}><ConnectedHome /></Provider>);
  });  
  
  it('Home component: Loaded', () => {
    expect(wrapper.find(ConnectedHome).length).toEqual(1);  
  });

  it('Home component: Find Fields --> Count 4', () => {
    expect(wrapper.find(Home).props().result.length).toEqual(0);
    const input = wrapper.find(TextField);
    expect(input).toHaveLength(4);
  });

  it('Home component: Find Org Field --> ', () => {
    const HomeComponent = wrapper.find(Home);
    const input = HomeComponent.find(TextField).at(0);
    expect(input.text()).toEqual("Org Name");    
  });
});

