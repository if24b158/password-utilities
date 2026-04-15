# @if24b158/password-utilities

A small JavaScript library for generating and validating strong passwords.

## Installation

### npm

npm install @if24b158/password-utilities

### yarn
yarn add @if24b158/password-utilities

### Usage
const {
  generateStrongPassword,
  isStrongPassword,
} = require("@if24b158/password-utilities");

const password = generateStrongPassword(12);
console.log(password);

console.log(isStrongPassword("Hello World")); // false
console.log(isStrongPassword("pC%mD8TpCKn2")); // true

### API
generateStrongPassword(length = 12)

Generates a random strong password with the requested length and ensures that it passes the strength validation rules.

isStrongPassword(password)

Returns true if the password:

has at least 8 characters
contains at least one uppercase letter
contains at least one lowercase letter
contains at least one digit
contains at least one special character

### Contributing

Please read CONTRIBUTING.md before submitting issues or pull requests.

### Security

Please report vulnerabilities responsibly. See SECURITY.md.

### License

MIT