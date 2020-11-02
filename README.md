ToDo-
Sort out options vs. features

Next Version
Correctly sort list vs. index fields on resource on backend- this just makes the data send easier
Requires handling permissions in the resource file




-----------
Directory
-----------

-/site- commonly changed info about the site
  --siteSettings.js- settings
  --/emailTemplates- html for emails
-/api- the bulk of the code
  --/components
    --/asteroid- class files for Site & Resources
    --/core- code needed for running a backend- authorization & ip stuff
    --/default- the "component" that's "copied" for each resourc  
  --/config- settings for packages & libraries
-/data- migrations, seeds, and dbConfig



----------
Theory
----------

--RESOURCES--
Information about each "Resource" is stored in the database and 

Resources have:
Resource Fields- that keep track and determine how each field is displayed and handled
Resource Features- that determine behavior and action

--SITE--
All Resources, along with Permissions and MenuOptions are passed along together, essentially a JSON representation of the whole webapp, which is sent to the front end to process.