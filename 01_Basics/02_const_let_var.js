// 'const' is used for values that should not be reassigned
const accountId = 923451;

// 'let' allows reassignment
let accountEmail = "account@gmail.com";
let accountPassword = "@AccPass985$";
let accountCity = "Ghaziabad";

// Declared but not initialized
let accountState;

// Try to avoid using 'var' — it is function-scoped and can lead to unexpected behavior.
//    Use 'let' or 'const' instead.

// Examples of reassignment (uncomment to test)
// accountId = 837837; //  Error: Cannot reassign a 'const'
// accountEmail = "account2@gmail.com";
// accountPassword = "$AccPass638@";
// accountCity = "Delhi";

console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});
