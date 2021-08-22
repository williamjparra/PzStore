import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );

  test('render del componente Header', () => {
    expect(header.length).toEqual(1);
  });

  test('render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Comprobar el Snapshot del Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  })
})
