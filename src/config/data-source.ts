import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'fran',
  password: 'Adrian12234..',
  database: 'academit-db',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/**'],
};

const dataSource: DataSource = new DataSource(dataSourceOptions);

export default dataSource;
