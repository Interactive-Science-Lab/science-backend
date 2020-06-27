const Component = require('../../api/components/asteroid/component')

let component = new Component('admin_user')

component.addFields('index', ['public-email', 'public-phone'])

module.exports = component

