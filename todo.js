let input = prompt('WHAT U WANT TO DO BOI')
const todo = ['saves the world', 'become the og']
while (input !== 'quit' && input !== 'QUIT') {
    if (input === 'list') {
        console.log('************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} : ${todo[i]}`);
        }
        console.log('************')
    } else if (input === 'new') {
        const newTodo = prompt('WHAT U WANNA DO AGAIN?');
        todo.push(newTodo);
        console.log(`${newTodo} has been approved!!!`)
    } else if (input === 'delete') {
        const indeks = parseInt(prompt('what u despise so much mortals?'))
        if (!Number.isNaN(indeks)) {
            const penghapusan = todo.splice(indeks, 1);
            console.log(`ok ${penghapusan[0]} sudah di hitamkan`);
        } else {
            console.log('Thats not the things u should choose mortals')
        }
    }
    input = prompt('what u want fr')
}
console.log('FUCK U')