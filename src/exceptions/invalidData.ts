export class InvalidData extends Error {
    code: number;

    constructor(message?: string) {
        super(message);

        this.name = this.constructor.name;
        this.code = 422;
        this.message = 'Invalid Input Data! ' + message? 'Error: ' + message: '';
    }
}
