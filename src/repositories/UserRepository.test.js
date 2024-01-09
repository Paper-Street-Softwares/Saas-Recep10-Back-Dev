const UserRepository = require("../repositories/UserRepository");

describe("UserRepository", () => {
  test("Should create a new User ", () => {
    const testUserPayload = {
      name: "AynName",
      email: "any@any.com",
      password: "anyPassword",
    };

    const { name, email, password } = testUserPayload;

    const createdTestUser = new UserRepository().createUser(
      name,
      email,
      password
    );

    expect(createdTestUser).toBeDefined();
  });
});
