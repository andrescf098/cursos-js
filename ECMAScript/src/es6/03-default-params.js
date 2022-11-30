function newUser(name, age, country) {
    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);

}

newUser();
newUser('Andrés', 27, 'COL');

function newAdmin(name = 'oscar', age = '34', country = 'MX') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Felipe', 45, 'CL');