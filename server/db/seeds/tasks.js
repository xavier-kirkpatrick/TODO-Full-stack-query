export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('myTasks')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('myTasks').insert([
        {
          taskDetails: 'Trim the hedge',
          priority: false,
          completed: false,
        },
        {
          taskDetails: 'Put the rubbish out',
          priority: true,
          completed: false,
        },
        {
          taskDetails: 'Go for a run',
          priority: true,
          completed: true,
        },
        {
          taskDetails: 'Top up Hop Card',
          priority: true,
          completed: false,
        },
        {
          taskDetails: 'Clean computer screen',
          priority: false,
          completed: true,
        },
      ])
    })
}
