import {db} from "../db/db.mjs";


export const Query = {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
    getTodos: (parent, args, context, info) => {
        console.log('Parent: ', parent)
        console.log('Arguments: ', args)
        console.log('Context:', context)
        console.log('Info:',  info)
        return db.todos;
    },
    getTodoById: (parent, { id }, context, info) =>  {
        // console.log(id)
        const todo = db.todos.find((todo) => todo.id === id);

        if (! todo) {
            throw new Error(`Le todo d'id ${id} n'existe pas.`);
        }

        return todo;
    }
};