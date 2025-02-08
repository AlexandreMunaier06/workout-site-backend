const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, birthday, email, password, gender, weight, height)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  [person.first_name, person.last_name, person.birthday, person.email,  // ⬅️ Aqui estava errado!
    person.password, person.gender, person.weight ?? null, person.height ?? null],
);


const findAll = async () => {
  const [peoples] = await conn.execute(`SELECT * FROM people`);
  return peoples;
}

const findById = async (id) => {
  const [people] = await conn.execute(`SELECT * FROM people WHERE id = ?`, [id]);
  return people;
}

const findByEmail = async (email) => {
  const [people] = await conn.execute(`SELECT * FROM people WHERE email = ?`, [email]);
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
  findByEmail,
  update,
  remove
};