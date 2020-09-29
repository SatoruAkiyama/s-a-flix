import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectErrorMessage = createSelector(
  [selectUser],
  (user) => user.errorMessage
);

export const selectSignUpErrorMessage = createSelector([selectUser], (user) =>
  user.signUpErrorMessage ? user.signUpErrorMessage : null
);
export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.id : null)
);

export const selectChoseProfile = createSelector([selectUser], (user) =>
  user.choseProfile ? user.choseProfile : null
);

export const emailForSignup = createSelector([selectUser], (user) =>
  user.emailForSignUp ? user.emailForSignUp : null
);

export const selectMyList = createSelector([selectUser], (user) =>
  user.myList ? user.myList : null
);

export const selectMyListId = createSelector([selectUser], (user) =>
  user.myList ? user.myList.map((ml) => ml.name.id) : null
);

export const selectProfiles = createSelector([selectUser], (user) =>
  user.profiles ? user.profiles : null
);

export const selectCurrentUserInfo = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser
      ? {
          email: currentUser.email,
          createdAt: currentUser.createdAt,
        }
      : null
);
