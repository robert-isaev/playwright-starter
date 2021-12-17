export function generateNewUser() {
  return {
    email: `testuser-${Date.now()}@nonexistingadress.com`,
    password: "helloWorld13",
  };
}

export function getExistingUser() {
  return {
    email: "robert.isaev@gmail.com",
    password: "helloWorld26",
  };
}
