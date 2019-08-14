import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App'

describe('Unit Tests', () => {

  it('renders app wrapper correctly', () => { //since App loads a font asynchronously despite the suite passes npm gives a reference error
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(3); //renders three children - navbar, input and output
  });

});
