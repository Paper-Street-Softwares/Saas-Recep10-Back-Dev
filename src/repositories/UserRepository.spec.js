const UserRepository = require("./UserRepository");

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
  await userRepository.deleteUserByName("AnyName");

  await userRepository.deleteManyByName("testUser");

  await userRepository.deleteManyByName("nameAfterUpdate");
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

    expect(testUserInstance.name).toBeDefined();
    expect(testUserInstance.email).toBeDefined();
    expect(testUserInstance.id).toBeDefined();
    expect(testUserInstance.password).toBeUndefined();
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

describe("UserRepository - Update", () => {
  test("Should update info based on id ", async () => {
    const updatedTestUser = await userRepository.updateUserById(
      mainTestUser.id,
      "nameAfterUpdate",
      "mailAfterUpdate",
      "passwordAfterUpdate"
    );

    expect(updatedTestUser).toBeDefined();
  });

  test.todo("Should deny changing id and other forbiden properties ");
});

describe("UserRepository - Delete", () => {
  test("Should delete an user based on id", async () => {
    const deletedTestUser = await userRepository.deleteUserById(
      mainTestUser.id
    );

    expect(deletedTestUser).toBeDefined();
  });

  test("Should return id, name and email, but no password of deleted User", async () => {
    const deleteById = await userRepository.deleteUserById(mainTestUser.id);

    expect(deleteById.id).toBeDefined();
    expect(deleteById.name).toBeDefined();
    expect(deleteById.email).toBeDefined();
    expect(deleteById.password).toBeUndefined();
  });

  test("Should delete an user based on name", async () => {
    const deletedByName = await userRepository.deleteUserByName(
      mainTestUser.name
    );

    expect(deletedByName).toBeDefined();
  });

  test("Should return id, name and email, but no password of deleted User", async () => {
    const deletedByName = await userRepository.deleteUserByName(
      mainTestUser.name
    );

    expect(deletedByName.id).toBeDefined();
    expect(deletedByName.name).toBeDefined();
    expect(deletedByName.email).toBeDefined();
    expect(deletedByName.password).toBeUndefined();
  });

  test("Should delete all Users based on name", async () => {
    const user1 = await userRepository.createUser(
      "sameName",
      "email1@email.com",
      "anyPassword"
    );
    const user2 = await userRepository.createUser(
      "sameName",
      "email2@email.com",
      "anyPassword"
    );
    const user3 = await userRepository.createUser(
      "sameName",
      "email3@email.com",
      "anyPassword"
    );

    await userRepository.deleteManyByName("sameName");

    const findUser1 = await userRepository.findUserById(user1.id);
    const findUser2 = await userRepository.findUserById(user2.id);
    const findUser3 = await userRepository.findUserById(user3.id);

    expect(findUser1).toBeNull();
    expect(findUser2).toBeNull();
    expect(findUser3).toBeNull();
  });
});
