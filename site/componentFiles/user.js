const authenticate = require('../../api/components/core/restricted-middleware')
const Component = require('../../api/components/asteroid/component')

let component = new Component('user')

component.addFeature('paginate')
component.addFeature('search', {fields: ['username']} )
component.addFeature('filter', { field: 'user_kind' })
component.addFeature('userKinds', {list: ['admin_user', 'end_user'] })

component.addFields('unique', 'username')
component.addFields('password', 'password')
component.addFields('index', ['user_role', 'user_kind'])
component.addFields('record', ['ban_notes', 'user_email', 'mailing_list'])

component.setLoader({filter: 'all', sort: 'username'})

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
  
component.addRoute(dashboardRoute)

module.exports = component
