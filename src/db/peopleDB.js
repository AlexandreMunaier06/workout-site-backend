const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, birthday, email, password, gender, weight, height)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  [person.firstName, person.lastName, person.birthday, person.email,
    person.password, person.gender, person.weight, person.height],
);

const findAll = async () => {
  const [peoples] = await conn.execute(`SELECT * FROM people`);
  console.log(peoples);
  return peoples;
}

const findById = async (id) => {
  const [people] = await conn.execute(`SELECT * FROM people WHERE id = ?`, [id]);
  return people;
}

const update = (person, id) => conn.execute(
    `UPDATE people
      SET password = ?, weight = ?, height = ?
      WHERE id = ?`,
      [person.password, person.weight, person.height, id],
  );

const remove = (id) => conn.execute(`DELETE FROM people WHERE id = ?`, [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove
};