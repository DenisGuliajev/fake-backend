const express = require('express');
const router = express.Router();
const faker = require('faker');



router.post('/login', function(req, res, next) {
    res.send({
        token: {
            token: faker.random.uuid(),
            refreshToken: faker.random.uuid(),
        },
        user: {
            id: 12,
            name: faker.random.word(),
            role: 'Superuser',
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            username: faker.name.firstName(),
            created: faker.date.past(2),
            updated: faker.date.past(1),
        }
    });
});

module.exports = router;
