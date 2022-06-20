function getAdmins(mapUsers) {
    let adminUsers = [];

    for ([key, value] of mapUsers) {
        if (value === 'ADMIN')
            adminUsers.push(key);
    }

    return adminUsers;
}

const users = new Map();
users.set('Rodrigo', 'ADMIN');
users.set('Vinícius', 'ADMIN');
users.set('Karina', 'ADMIN');
users.set('Fulano', 'FINANCE');
users.set('Beltrano', 'SALES');

let admins = getAdmins(users);
console.log(admins);
console.table(admins);
