module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'cvmaker1',
  entities: ['dist/**/**/entities/*.entity{.ts,.js}'],
  migrationsTableName: 'custom_migration_table',
  migrations: ['dist/migration/*.js'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
