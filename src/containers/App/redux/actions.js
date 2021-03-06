import {
  NAV_ITEMS_LOAD,
  NAV_ITEMS_SUCCESS,
  NAV_ITEMS_FAILURE,
} from './constants';

export const getNavItems = () => ({
  types: [NAV_ITEMS_LOAD, NAV_ITEMS_SUCCESS, NAV_ITEMS_FAILURE],
  payload: {
    request: {
      url: '/navigation',
    },
  },
});

export const navItemsSuccess = ({ payload: data }) => ({
  type: NAV_ITEMS_SUCCESS,
  payload: { data },
});

export const navItemsFailure = error => ({
  type: NAV_ITEMS_FAILURE,
  error,
});
