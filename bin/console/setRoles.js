const mongoose = require('mongoose');

const config = require('../../config/config.js');

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const RoleService = require('../../src/services/roleService');
const RoleRepository = require('../../src/repositories/roleRepository');

RoleRepository.findAll().then((result)=>{
    if (result.length) {
        console.log('default roles have already created')
    } else {
        RoleService.create({name: "user"})
        RoleService.create({name: "admin"})
        console.log('default roles created')
    }
})
