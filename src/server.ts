import { connection } from './database/connect'

connection.connect().then(async () => {
    const port = process.env.PORT ?? 3333
    const { app } = await import('./app')

    app.listen(port, () => console.log(`Server listen on port ${port}`))
})
