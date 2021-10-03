module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'FreezerPoint',
  port: '5432',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
