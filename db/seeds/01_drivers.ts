import { Knex } from 'knex';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';
import getDirName from '../../src/utils/path.js';

const __dirname = getDirName(import.meta.url)

export async function seed(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await knex('drivers').del()
            .transacting(trx)

        const filePath = path.join(__dirname, '../../../db/data/drivers.csv');
        const records: any[] = [];

        await new Promise<void>((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(parse({ columns: true, delimiter: ',' }))
                .on('data', (row) => {
                    records.push(row);
                })
                .on('end', () => {
                    resolve();
                })
                .on('error', (err) => {
                    reject(err);
                });
        });

        await knex('drivers')
            .insert(records)
            .transacting(trx)
    })


}
