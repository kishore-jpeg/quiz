const todos = ['buy eggs', 'go to gym']
let input = prompt("what would you like to do?")
while (input !== "quit" && input !== 'q') {
    if (input === "list") {
        console.log("***********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("***********************")
    } else if (input === "new") {
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo)
        console.log(`${newTodo} added to the list!`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter the index to delete:"))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`Ok deleted item: ${deleted[0]}`);
        } else {

            console.log("Unknown index")
        }

    }
    input = prompt("what would you like to do?")
}

console.log("ok quited ");

const rollSomething = () => {
    return Math.floor(Math.random() * 12) + 1;
}

const rollDie = () =>  Math.floor(Math.random() * 6)+1;

