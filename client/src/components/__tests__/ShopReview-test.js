import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ShopReviews from '../ShopReviews.jsx';

describe('Reviews component', () => {

  it('Should render without throwing an error', () => {
    expect(shallow(<ShopReviews />).find('h4').exists()).toBe(true);
  });
  
});