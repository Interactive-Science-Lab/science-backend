const Component = require('../../api/components/asteroid/component')

let component = new Component('end_user')

component.addFields('index', ['user_full_name', 'user_bio', 'user_link', 'user_link_description'])

module.exports = component
