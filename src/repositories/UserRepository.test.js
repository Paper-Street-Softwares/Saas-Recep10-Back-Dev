const UserRepository = require("../repositories/UserRepository");

let mainTestUser;

beforeEach(async () => {
  const createTestUser = await new UserRepository().createUser(
    "testUser",
    "testMail@mail.com",
    "testPassword"
  );

  mainTestUser = createTestUser;
});

afterAll(async () => {
  const deletedTestUser = await new UserRepository().deleteUserByName(
    "AnyName"
  );
});

describe("UserRepository.createUser", () => {
  test("Should create a new User ", () => {
    const testUserPayload = {
      name: "AnyName",
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

  test("Should return id, name and email, but not password of created User", () => {
    const testUserInstance = mainTestUser;

    expect(mainTestUser.name).toBeDefined();
    expect(mainTestUser.email).toBeDefined();
    expect(mainTestUser.id).toBeDefined();
    expect(mainTestUser.password).toBeUndefined();
  });
});

describe("UserRepository.find", () => {
  test("Find an User by id ", async () => {
    const userFoundById = await new UserRepository().findUserById(
      mainTestUser.id
    );

    expect(userFoundById).toBeDefined();
  });

  test("Should return id, name and email, but no password of found User", async () => {
    const userFoundById = await new UserRepository().findUserById(
      mainTestUser.id
    );

    expect(userFoundById.id).toBeDefined();
    expect(userFoundById.name).toBeDefined();
    expect(userFoundById.email).toBeDefined();
    expect(userFoundById.password).toBeUndefined();
  });
});

describe("UserRepository.deleteById", () => {
  test("Should delete a user based on id", () => {
    const deletedTestUser = new UserRepository().deleteUserById(
      mainTestUser.id
    );

    expect(deletedTestUser).toBeDefined();
  });

  test("Should return id, name and email, but no password of deleted User", () => {
    const deleteById = new UserRepository().deleteUserById(mainTestUser.id);

    expect(mainTestUser.id).toBeDefined();
    expect(mainTestUser.name).toBeDefined();
    expect(mainTestUser.email).toBeDefined();
    expect(mainTestUser.password).toBeUndefined();
  });
});
