/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  all: {
    id: `${scope}.all`,
    defaultMessage: 'All',
  },
  new: {
    id: `${scope}.new`,
    defaultMessage: 'New',
  },
  scheduled: {
    id: `${scope}.scheduled`,
    defaultMessage: 'Scheduled',
  },
  redeemed: {
    id: `${scope}.redeemed`,
    defaultMessage: 'Redeemed',
  },
  completed: {
    id: `${scope}.completed`,
    defaultMessage: 'Completed',
  },
});
