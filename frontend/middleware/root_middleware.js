import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import DishMiddleware from './dish_middleware';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  DishMiddleware,
  logger
);

export default RootMiddleware;
