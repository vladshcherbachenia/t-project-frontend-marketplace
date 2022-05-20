export class User {
    id:string;
    first_name:string;
    last_name:string;
    email:string;
    revenue: number;

    constructor(id='', first_name='', last_name='',email='', revenue=0) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.revenue = revenue
    }
}