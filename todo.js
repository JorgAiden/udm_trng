let input = prompt('WHAT U WANT TO DO BOI')
const todo = ['saves the world', 'become the og']
while (input !== 'quit' && input !== 'QUIT') {
    if (input === 'list') {
        console.log('************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} : ${todo[i]}`);
        }
        console.log('************')
    } else if (input == 'new' && input == 'NEW') {
        const newTodo = prompt('WHAT U WANNA DO AGAIN?')
        todo.push(newTodo)
        console.log(`${newTodo} has been approved!!!`)
    } input = prompt('what u want fr')
}
console.log('FUCK U')