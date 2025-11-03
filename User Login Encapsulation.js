


// example of Encapsulation;



class UserProfile {
    // 🔒 Private fields (encapsulated data)
    // These cannot be accessed directly from outside the class.
    #email;
    #password;
    #loginAttempts;

    // Public field (can be accessed directly)
    username;

    constructor(username, email, password) {
        // Public property (accessible outside)
        this.username = username;

        // Private properties (hidden from outside)
        this.#email = email;

        // Encapsulation in action:
        // Instead of storing the plain password, we hash it using a private method.
        this.#password = this.#hashedPassword(password);

        // Tracks login attempts — private for security reasons.
        this.#loginAttempts = 0;
    }

    // 🔒 Private method
    // Only used internally to "hash" passwords (simulated here).
    // Encapsulation hides implementation details — other parts of the program
    // don’t need to know *how* hashing works, just that it’s done securely.
    #hashedPassword(password) {
        return `hashed_${password}`;
    }

    // ✅ Public method (controlled access)
    // Provides a safe way to read the email without exposing the private field directly.
    getEmail() {
        return this.#email;
    }

    // ✅ Public method
    // Provides a safe way to update the password.
    // The method checks the old password before allowing a change.
    // The internal hashing process and password storage remain encapsulated.
    updatePassword(oldPassword, newPassword) {
        if (this.#password === this.#hashedPassword(oldPassword)) {
            this.#password = this.#hashedPassword(newPassword);
            console.log("Password updated successfully.");
        } else {
            console.log("Old password is incorrect.");
        }
    }

    // ✅ Public method
    // Handles login logic. It can access private data internally,
    // but external code cannot read or modify the password directly.
    login(user, passworduser) {
        if (user === this.username || user === this.#email) {
            if (this.#password === this.#hashedPassword(passworduser)) {
                console.log("Login successful.");
                return true;
            } else {
                console.log("Invalid password.");
            }
        } else {
            console.log("User not found.");
        }

        // Private data (#loginAttempts) is modified internally.
        // It’s hidden from external manipulation.
        this.#loginAttempts++;
        return false;
    }
}



const user = new UserProfile("jenil9642", "jenil", "hello")

console.log(user.login("jenil9642", "hell'o"))
console.log(user.login("jenil9642", "hell'o"))
console.log(user.login("jenil9642", "hell'o"))
console.log(user.login("jenil9642", "hell'o"))
console.log(user.login("jenil9642", "hell'o"))
console.log(user.login("jenil9642", "hell'o"))
