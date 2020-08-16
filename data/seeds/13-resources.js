exports.seed = function (knex) {
  return knex('resources').insert([
    {
      'base_name': "resource",
      'names': {
        ls: "resource",
        lp: "resources",
        us: "Resource",
        up: "Resources",
        friendly: "resource",
        urlPath: "/resources"
      },
      'idField': "resource_id",
      'nameField': "base_name",
      'special_fields': {},
      'permission_id': 1,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "resource_field",
      'names': {
        ls: "resource_field",
        lp: "resource_fields",
        us: "Resourcefield",
        up: "Resourcefields",
        friendly: "resource_field",
        urlPath: "/resource_fields"
      },
      'idField': "resource_field_id",
      'nameField': "name",
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "resource_feature",
      'names': {
        ls: "resource_feature",
        lp: "resource_features",
        us: "ResourceFeature",
        up: "ResourceFeatures",
        friendly: "resource_feature",
        urlPath: "/resource_features"
      },
      'idField': "resource_feature_id",
      'nameField': null,
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "permission_setting",
      'names': {
        ls: "permission_setting",
        lp: "permission_settings",
        us: "PermissionSetting",
        up: "PermissionSettings",
        friendly: "permissions",
        urlPath: "/permissions"
      },
      'idField': "permission_setting_id",
      'nameField': 'nickname',
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "menu_option",
      'names': {
        ls: "menu_option",
        lp: "menu_options",
        us: "MenuOption",
        up: "MenuOptions",
        friendly: "menu_options",
        urlPath: "/menu_options"
      },
      'idField': "menu_option_id",
      'nameField': null,
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "site_page",
      'names': {
        ls: "site_page",
        lp: "site_pages",
        us: "SitePage",
        up: "SitePages",
        friendly: "pages",
        urlPath: "/pages"
      },
      'idField': "site_page_id",
      'nameField': null,
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "site_blog",
      'names': {
        ls: "site_blog",
        lp: "site_blogs",
        us: "SiteBlog",
        up: "SiteBlogs",
        friendly: "posts",
        urlPath: "/posts"
      },
      'idField': "site_blog_id",
      'nameField': null,
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },

    {
      'base_name': "user",
      'names': {
        ls: "user",
        lp: "users",
        us: "User",
        up: "Users",
        friendly: "users",
        urlPath: "/users"
      },
      'idField': "user_id",
      'nameField': null,
      'special_fields': {},
      'permission_id': null,
      'text': {},
      'loader': {},
      'options': {},
      'actionRedirects': {},
      'actionOptions': {}
    },



    {
      "resource_id": 9,
      "base_name": "experiment",
      "idField": "experiment_id",
      "nameField": "experiment_name",
      "actionOptions": null,
      "permission_id": null,
      "special_fields": null,
      "names": {
        "ls": "experiment",
        "lp": "experiments",
        "us": "Experiment",
        "up": "Experiments",
        "friendly": "experiments",
        "urlPath": "/experiments"
      },
      "text": null,
      "loader": null,
      "options": null,
      "actionRedirects": null
    },
    {
      "resource_id": 10,
      "base_name": "container",
      "idField": "container_id",
      "nameField": "display_name",
      "actionOptions": null,
      "permission_id": null,
      "special_fields": null,
      "names": {
        "ls": "container",
        "lp": "containers",
        "us": "Container",
        "up": "Containers",
        "friendy": "containers",
        "urlPath": "/containers"
      },
      "text": null,
      "loader": null,
      "options": null,
      "actionRedirects": null
    },
    {
      "resource_id": 11,
      "base_name": "object_items",
      "idField": "object_item_id",
      "nameField": "display_name",
      "actionOptions": null,
      "permission_id": null,
      "special_fields": null,
      "names": {
        "ls": "object_item",
        "us": "Objects",
        "up": "Object",
        "friendly": "objects",
        "urlPath": "/objects",
        "lp": "object_items"
      },
      "text": null,
      "loader": null,
      "options": null,
      "actionRedirects": null,
    },
    {
      "resource_id": 12,
      "base_name": "substance",
      "idField": "substance_id",
      "nameField": "display_name",
      "actionOptions": null,
      "permission_id": null,
      "special_fields": null,
      "names": {
        "ls": "substance",
        "us": "Substance",
        "up": "Substances",
        "friendly": "substances",
        "urlPath": "/substances",
        "lp": "substances"
      },
      "text": null,
      "loader": null,
      "options": null,
      "actionRedirects": null
    },
    {
      "resource_id": 13,
      "base_name": "tool",
      "idField": "tool_id",
      "nameField": "display_name",
      "actionOptions": null,
      "permission_id": null,
      "special_fields": null,
      "names": {
        "ls": "tool",
        "lp": "tools",
        "us": "Tool",
        "up": "Tools",
        "urlPath": "/tools",
        "friendly": "tools"
      },
      "text": null,
      "loader": null,
      "options": null,
      "actionRedirects": null,
    }






  ])
};
