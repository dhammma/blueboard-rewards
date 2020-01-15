# Test task

Task description:

https://github.com/blueboard/frontend-assessment

Live demo:

https://blueboard-rewards.firebaseapp.com/

## What is done

1. used react-boilerplate (to economy time for initial configuration) (https://github.com/react-boilerplate/react-boilerplate)
2. some things decided to use as suggested in boilerplate: immer js, styled-components, way to write actions/reducers/sagas, components/container folders/etc
3. added mock `service/api.js` to isolate data fetching/updating layer with `service/storage.js` to make possible edit rewards
4. The rewards list page with filters is implemented with suggestion that we have a lot of rewards and should use filtering on the server-side. Pagination is not implemented but there is not a problem to add it
5. We suggest that user select field needs to be implemented as auto-suggest dropdown (if we have a lot of users in db)
6. I didn't focus on the design, just made everything as simple as possible

## What I usually do in another way

1. I'm using `redux-actions` library for describing actions and reducers
2. I carefully design the app state
3. I carefully design reusable parts of code for interactions with API

## What can be improved

1. Make code clean up - remove unused code from `react-boilerplate`, a little bit simplify components
2. Unit testing
3. Prettify components

## Summary

The test task is done, all requirements are implemented. Code quality is enough well but not ideal due to restricted time for the test task.
