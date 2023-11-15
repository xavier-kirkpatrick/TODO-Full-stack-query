export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('myTasks')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('myTasks').insert([
        {
          'task details': 'Trim the hedge',
          priority: false,
          completed: false,
        },
        {
          'task details': 'Put the rubbish out',
          priority: true,
          completed: false,
        },
        {
          'task details': 'Go for a run',
          priority: true,
          completed: true,
        },
        {
          'task details': 'Top up Hop Card',
          priority: true,
          completed: false,
        },
        {
          'task details': 'Clean computer screen',
          priority: false,
          completed: true,
        },
      ])
    })
}
