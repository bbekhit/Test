import { shallow } from 'enzyme/build';
import React from 'react';
import { GroupAlert } from './GroupAlert';

describe('<GroupAlert />', () => {
  it('renders correctly with default props', () => {
    const wrapper = shallow(<GroupAlert />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const props = {
      groupAlerts: {
        fakeId: 'error message',
      },
      id: 'fakeId',
    };
    const wrapper = shallow(<GroupAlert {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
// https://github.pie.apple.com/siri-epm/scope-react/pull/129/files
import * as types from '../actionTypes';

const initialState = {
  groupAlerts: {},
};

const addGroupAlerts = (state, msg, id) => {
  const newState = { ...state };
  newState.groupAlerts[id] = msg;
  return newState;
};

const removeGroupAlert = (state, id) => {
  const newState = { ...state };
  if (newState.groupAlerts.id) {
    delete newState.groupAlerts[id];
  }
  return newState;
};

export default function alertReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SHOW_GROUP_ALERT:
      return addGroupAlerts(state, payload.error.message, payload.id);
    case types.HIDE_GROUP_ALERT:
      return removeGroupAlert(state, payload.id);
    default:
      return state;
  }
}