import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

export const sequelize = new Sequelize({
  'username': config.username,
  'password': 'Feb@20231607',
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
