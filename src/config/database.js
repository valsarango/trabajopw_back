import Sequelize from 'sequelize'

const hostname = 'pwtrabajofinalgrupo7.postgres.database.azure.com'
const username = 'postgres'
const password = 'Gimnasia2'
const database = 'funkospace'
const dbPort = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: dbPort,
    dialect: dialect,
    operatorAliases: false
})

export default sequelize;