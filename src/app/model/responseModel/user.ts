export class User {

    private _email: string;
    private _nome: string;
    private _token: string;

    constructor() {
        this._email = '';
        this._nome = '';
        this._token = '';
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

}
