const todos = [
    {
        id: 1,
        name: "Apprendre GraphQL",
        content: "Entamer la partie Query",
        status: 'WAITING'
    }
]

export const Query = {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
    getTodos: () => {
        return todos
    }
};