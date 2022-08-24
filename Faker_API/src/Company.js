const { faker } = require("@faker-js/faker");

module.exports = class Company {
    constructor(){
        this.company_id=faker.datatype.uuid(),
        this.name= faker.company.name();
        this.address= {
            street: faker.address.street(),
            city: faker.address.city() ,
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }

}
