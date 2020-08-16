const Component = require('../../api/components/asteroid/component')

let component = new Component('menu_option')

component.addFields('index', ['user_full_name', 'user_bio', 'user_link', 'user_link_description'])

module.exports = component
