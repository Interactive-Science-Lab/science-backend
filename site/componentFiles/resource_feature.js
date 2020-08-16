const Component = require('../../api/components/asteroid/component')

let component = new Component('resource_feature')

component.addFields('index', [
    "parent_id",
    "permission_id",
    "connected_resource",
    "one_to_many",
    "text",
    "options"
])

module.exports = component
