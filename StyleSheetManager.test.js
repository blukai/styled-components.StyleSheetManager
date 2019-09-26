import React from 'react';
import render from 'react-test-renderer';
import styled, { StyleSheetManager } from 'styled-components'
import 'jest-styled-components';

const Flower = styled.div`
  display: flex;
`;

it('creates snapshot of styles', () => {
  const tree = render.create(<Flower />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("doesn't create snapshot of styles", () => {
  const tree = render.create(
    <StyleSheetManager disableVendorPrefixes>
      <Flower />
    </StyleSheetManager>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
