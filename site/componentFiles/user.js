const Component = require('../asteroid/component')

let component = new Component('user')

component.addFeature('paginate')
component.addFeature('search', {fields: ['username']} )
component.addFeature('filter', { field: 'user_kind' })

component.addFields('unique', 'username')
component.addFields('password', 'password')
component.addFields('index', ['user_role', 'user_kind'])
component.addFields('record', ['ban_notes', 'user_email', 'mailing_list'])

component.setLoader({filter: 'public', sort: 'page_order'})

module.exports = component

let dashboardRoute = (router, ClassDatabase) => {
router.get('/dashboard', authenticate.user_restricted, (req, res) => {
    const user = req.decodedToken.user;
    const id = user.user_id
  
    ClassDatabase.findById(id)
      .then(userProfile => {
        res.json(userProfile)
      });
  })

}
  