import expressPromiseRouter from 'express-promise-router';
import { listDriverSalary } from '../src/controllers/drivers.js';
import { listDriverSalary as listDriverSalaryValidation } from '../src/validations/listDriverSalary.js'

const routes = expressPromiseRouter()

routes.get(
    '/api/v1/salary/driver/list',
    listDriverSalaryValidation,
    listDriverSalary
);

export default routes
