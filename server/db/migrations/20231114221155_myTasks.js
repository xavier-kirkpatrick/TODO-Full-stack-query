export async function up(knex) {
  await knex.schema.createTable('myTasks', (table) => {
    table.increments('id').primary()
    table.string('task details')
    table.boolean('priority')
    table.boolean('completed')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('myTasks')
}
