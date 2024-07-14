export interface User {
    id: number
    username: string,
    email?: string,
    password?: string
}

export const users: User[] = [
    { id: 1, username: "dara", email: "dara@gmail.com", password: "1233444fgg" },
    { id: 2, username: "jonh", email: "jonh@gmail.com", password: "456788" },
    { id: 3, username: "harly", email: "harly112345@gmail.com", password: "56789000" },
    { id: 4, username: "mony", email: "mony1234@gmail.com", password: "34555" },
]

const nextUserId = (): number => {
    let maxId = 1;
    users.forEach((user: User) => {
        if (user.id > maxId) {
            maxId = user.id
        }
    });

    return maxId + 1;
}

export const getUserById = (id: number): User | {} => {
    const user: User | undefined = users.find(user => user.id === id)
    if (user === undefined) {
        return {}
    }
    return user;
}


export const updateUserById = (id: number, updateData: Partial<User>): User | undefined => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updateData };
        return users[userIndex];
    }
    return undefined;
}

export const removeUserOneById = (id: number) => {
    const index: number = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return users;
    }
    return {};
}

export const addUser=(user:User):User=>{
    user.id = nextUserId();
    users.push(user);
    return user;
}
