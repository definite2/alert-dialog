import { LOGIN_URL, GET_USER_BY_ACCESSTOKEN_URL } from "../../services/authApi";
import { mockUserList } from "./mockUsersList";
export function mockAuth(mock) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { username, password } = JSON.parse(data);
    if (username && password) {
      const user = mockUserList.find(
        (x) =>
          x.username.toLowerCase() === username.toLowerCase() &&
          x.password === password
      );

      if (user) {
        const auth = user.auth;
        return [200, { ...auth, password: undefined }];
      }
    }

    return [400];
  });

  mock
    .onGet(GET_USER_BY_ACCESSTOKEN_URL)
    .reply(({ headers: { Authorization } }) => {
      const accessToken =
        Authorization &&
        Authorization.startsWith("Bearer ") &&
        Authorization.slice("Bearer ".length);
      if (accessToken) {
        const user = mockUserList.find(
          (x) => x.auth?.accessToken === accessToken
        );

        if (user) {
          return [200, { ...user, password: undefined }];
        }
      }
      return [401];
    });
}
