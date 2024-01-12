const UserRepository = require("../repositories/UserRepository");

const userRepository = new UserRepository();

let mainTestUser;

beforeEach(async () => {
  const createTestUser = await userRepository.createUser(
    "testUser",
    "testMail@mail.com",
    "testPassword"
  );

  mainTestUser = createTestUser;
});

afterAll(async () => {
  const deleteAnyNameTestSubject = await userRepository.deleteUserByName(
    "AnyName"
  );

  const deleteTestUserTestSubject = await userRepository.deleteUserByName(
    "testUser"
  );
});

describe("UserRepository - Create", () => {
  test("Should create a new User ", () => {
    const testUserPayload = {
      name: "AnyName",
      email: "any@any.com",
      password: "anyPassword",
    };

    const { name, email, password } = testUserPayload;

    const createdTestUser = userRepository.createUser(name, email, password);

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

describe("UserRepository - Find", () => {
  test("Should find an User by id", async () => {
    const userFoundById = await userRepository.findUserById(mainTestUser.id);

    expect(userFoundById).toBeDefined();
  });

  test("Should return id, name and email, but no password of User found by id", async () => {
    const userFoundById = await userRepository.findUserById(mainTestUser.id);

    expect(userFoundById.id).toBeDefined();
    expect(userFoundById.name).toBeDefined();
    expect(userFoundById.email).toBeDefined();
    expect(userFoundById.password).toBeUndefined();
  });

  test("Should find an User by email ", async () => {
    const userFoundByEmail = await userRepository.findUserByEmail(
      mainTestUser.email
    );

    expect(userFoundByEmail).toBeDefined();
  });

  test("Should return id, name and email, but no password of User found by email ", async () => {
    const userFoundByEmail = await userRepository.findUserByEmail(
      mainTestUser.email
    );

    expect(userFoundByEmail.id).toBeDefined();
    expect(userFoundByEmail.name).toBeDefined();
    expect(userFoundByEmail.email).toBeDefined();
    expect(userFoundByEmail.password).toBeUndefined();
  });

  test("Should return all Users", async () => {
    const listOfAllUsers = await userRepository.findAllUser();

    expect(listOfAllUsers).toBeDefined();
  });
});

describe("UserRepository - Delete", () => {
  test("Should delete an user based on id", () => {
    const deletedTestUser = userRepository.deleteUserById(mainTestUser.id);

    expect(deletedTestUser).toBeDefined();
  });

  test("Should return id, name and email, but no password of deleted User", () => {
    const deleteById = userRepository.deleteUserById(mainTestUser.id);

    expect(mainTestUser.id).toBeDefined();
    expect(mainTestUser.name).toBeDefined();
    expect(mainTestUser.email).toBeDefined();
    expect(mainTestUser.password).toBeUndefined();
  });

  test("Should delete an user based on name", () => {
    const deletedByName = userRepository.deleteUserByName(mainTestUser.name);

    expect(deletedByName).toBeDefined();
  });
});
