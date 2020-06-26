const Component = require('../../api/components/asteroid/component')

let component = new Component('support_ticket', {friendly: 'support_tickets', upper: 'SupportTicket'}) 

component.addFeature('paginate')
component.addFeature('search', {fields: ['support_ticket_name', 'support_ticket_message', 'public_notes_text', 'private_notes_text']} )
component.addFeature('filter', { field: 'support_ticket_state' })

component.addFields('index', [
    'support_ticket_kind', 
    'support_ticket_message', 
    'support_ticket_name', 
    'support_ticket_email', 
    'support_ticket_state', 
    'require_update'])
    
component.addFields('record', ['public_notes_text', 'private_notes_text'])

component.setLoader({filter: 'public', sort: 'page_order'})

module.exports = component
