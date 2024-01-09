const UserRepository = require("../repositories/UserRepository");

let mainTestUser;

beforeAll(async () => {
  const createTestUser = await new UserRepository().createUser(
    "testUser",
    "testMail@mail.com",
    "testPassword"
  );

  mainTestUser = createTestUser;
});

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

  test("Should return name and email, but not id and password", () => {
    const testUserInstance = mainTestUser;

    expect(testUserInstance.name).toBeDefined();
    expect(testUserInstance.email).toBeDefined();
    expect(testUserInstance.id).toBeUndefined();
    expect(testUserInstance.password).toBeUndefined();
  });
});
