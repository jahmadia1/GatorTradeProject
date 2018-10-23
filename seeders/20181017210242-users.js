'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Adds single test user to DB
    return queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.sfsu.edu',
      password: 'testpassword',
      profilePicture: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125821/samples/people/smiling-man.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@mail.sfsu.edu',
      password: 'testpassword',
      profilePicture: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125824/samples/bike.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {    
    // Delete table
    return queryInterface.bulkDelete('users', null, {});
  }
};