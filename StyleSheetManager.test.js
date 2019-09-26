import React from 'react';
import render from 'react-test-renderer';
import styled, { StyleSheetManager } from 'styled-components'
import 'jest-styled-components';

const Flower = styled.div`
  display: flex;
`;

it('Violet', () => {
  const tree = render.create(<Flower />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Iris', () => {
  const tree = render.create(
    <StyleSheetManager disableVendorPrefixes>
      <Flower />
    </StyleSheetManager>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
