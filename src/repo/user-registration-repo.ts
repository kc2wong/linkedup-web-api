import {
  createUser,
  User,
  UserRegistration,
} from '../__generated__/linkedup-backend-client';
import { callRepo } from './repo-util';

export const registerUser = async (
  userRegistration: UserRegistration,
  authorizationToken?: string
): Promise<User> => {
  return await callRepo(
    () =>
      createUser({
        body: userRegistration,
      }),
    authorizationToken
  );
};
