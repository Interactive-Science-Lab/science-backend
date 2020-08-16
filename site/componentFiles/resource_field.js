const Component = require('../../api/components/asteroid/component')

let component = new Component('resource_field')

component.addFields('index', [
    'parent_id',
    'permission_id',
    'name',
    'label',
    'category',
    'order',
    'displayType',
    'displayName',
    'text',
    'validations',
    'info',
])

module.exports = component
