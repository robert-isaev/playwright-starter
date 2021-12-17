export function generateNewUser() {
  return {
    email: `testuser-${Date.now()}@nonexistingadresss.com`,
    password: "helloWorld13",
  };
}
