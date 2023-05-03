export class User {
    constructor() {
        this.id = null;
        this.userName = null;
        this.password = null;
        this.emailId = null;
        this.birthDate = null;
    }

    id: number;
    userName: string;
    password: string;
    emailId: string;
    birthDate: Date;
}