function newUser(user, age, country, uId=5) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("bndx", 24, "COL", 1));
console.log(newUser("andv", 50, "BOL"));