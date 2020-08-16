const Component = require('../../api/components/asteroid/component')

let component = new Component('resource')

component.addFields('index', [
    'base_name',
    'names',
    'idField',
    'nameField',
    'special_fields',
    'permission_id',
    'text',
    'loader',
    'options',
    'actionRedirects',
    'actionOptions'
])


module.exports = component
