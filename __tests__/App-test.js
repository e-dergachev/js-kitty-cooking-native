import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import colors from '../colors';
import NavBar from '../NavBar';
import Input from '../Input';
import Output from '../Output';

const cuisines = {General: true, Vegetarian: true, American: true, French: true, Indian: true, Italian: true, Jewish: true};

const dish = {
  name: "Potato Pie",
  recipe: "Slice potatoes and onions, stew with a little water until nearly done, put into a pie-dish, flavour with herbs, pepper, and salt, add a little soaked tapioca and very little butter, cover with short wheatmeal crust, and bake 1 hour. To make a very plain pie-crust use about 2 oz. of butter or a proportionate quantity of Allinson frying oil to 1 lb. of wheatmeal. Roll or touch with the fingers as little as possible, and mix with milk instead of water. Eat this pie with green vegetables.",
  source: "The Allinson Vegetarian Cookery Book, by Thomas R. Allinson, 1915",
  cuisine: "Vegetarian"
};

describe('Snapshot Unit Tests', () => {

  it('renders app wrapper correctly', () => { //it gives that annoying 'wrap stuff in act(...)' warning but passes
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders navbar correctly', () => {
    const tree = renderer.create(<NavBar 
      scheme = {colors['lavender']}
      cuisines = {cuisines}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders input correctly', () => {
    const tree = renderer.create(<Input 
      scheme = {colors['lavender']}
      cuisines = {cuisines}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders output correctly', () => {
    const tree = renderer.create(<Output 
      scheme = {colors['lavender']}
      cuisines = {cuisines}
      dish = {dish}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });  

});
