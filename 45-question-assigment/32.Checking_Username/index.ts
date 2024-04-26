// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = ["anees", "khan", "ayan", "zaman", "suleman"];
let new_users: string[] = ["Anees", "Hamza", "malik", "aman", "khan"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});