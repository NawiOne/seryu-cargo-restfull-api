import SuccessResult from '../utils/successResult.js';
import { getListDriverSalary } from '../services/drivers.js';
import { Request, Response } from 'express'

async function listDriverSalary(req: Request, res: Response): Promise<any> {
    const query = req.query;

    const payload = {
        page_size: Number(query.page) || 10,
        current: Number(query.current) || 1,
        month: query.month as string,
        year: query.year as string,
        driver_code: query.driver_code as string,
        status: query.status as string,
        name: query.name as string
    }

    const {
        result,
        current,
        page_size,
        total_row
    } = await getListDriverSalary(payload)

    SuccessResult.make(res).send(
        result,
        total_row,
        current,
        page_size
    )

}

export { listDriverSalary }