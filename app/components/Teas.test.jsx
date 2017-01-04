import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'

import Teas from './Teas'

describe('<Teas />', () => {
  const teas = [{
    title: 'Earl Grey',
    description: 'British Prime Minister Earl Grey gave his name to this hugely popular tea back in the 1830s, and ever since it has been thought of as a classic English afternoon tea.',
    price: 525,
    inventory: 20,
    category: 'black'
  }, 
  {
    title: 'Green Jasmine',
    description: 'Dawn-picked jasmine flowers open towards the end of the day to release their heady scent.',
    price: 425,
    inventory: 20,
    category: 'green'
  },
  {
    title: 'Camomile',
    description: 'There is nothing so calming as camomile.',
    price: 595,
    inventory: 20,
    category: 'herbal'
  }]

  let root
  beforeEach('render the root', () =>
    root = shallow(<Teas />)
  )

  it('shows teas', () => {    
    expect(root.find('#div')).to.have.length(3)
    expect(root.find('h3').text()).equal(teas[0].title)    
  })

  // it('when tapped, sets state.answered=true', () => {
  //   root.setState({ joke, answered: false })
  //   root.simulate('click')
  //   expect(root.state().answered).to.be.true
  // })
})