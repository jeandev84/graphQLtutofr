const todos = [
    {
        id: 1,
        name: "Apprendre GraphQL",
        content: "Entamer la partie Query",
        status: 'WAITING'
    },
    {
        id: 2,
        name: "Apprendre GraphQL",
        content: "Entamer la partie Schema",
        status: 'DONE'
    }
]

export const Query = {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
    getTodos: () => {
        return todos
    }
};