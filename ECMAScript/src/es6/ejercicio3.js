function* getId() {
    let id = 1;
    while(true) {
        id++;
        return console.log(id)
    }
}
const id = getId()
id.next().value
id.next().value
id.next().value