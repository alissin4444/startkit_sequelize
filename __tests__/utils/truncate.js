import database from '../../src/database';

export function truncate_users() {
  return Promise.all(
    Object.keys(
      database.connection.models['User'].destroy({
        truncate: true,
        force: true,
      })
    )
  );
}
