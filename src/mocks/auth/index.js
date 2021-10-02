import { LOGIN_URL } from "../../services/authApi";

export function mockAuth(mock) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { username } = JSON.parse(data);
    return [403, { message: `User '${username}' not found` }];
  });
}
