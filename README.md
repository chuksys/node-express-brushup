Brushing up my Node-Express Skills :)

In this project, I'm simply using NodeJS, ExpressJS, PUG and MYSQL to develop a landing page that enables a marketer collect the email address of a lead and then post this email address to a mysql table which was created to store Leads.

All CRUD operations are implemented - creation of lead, display of all leads, editing leads, deleting leads.

I'm using Sequelize & Sequelize-CLI to manage the mysql database operations so we have our migrations, models and seeds.

Authentication is also implemented using Passport.

Authorization is also implemented to restrict access to certain areas of the application to authenticated users as well as Admin Users where necessary.

CSS Styling is implemented using BootStrap.

Feel free to clone this maybe to get you started on your next project.

Cheers!

Instructions
---------------
 1. After cloning, run "npm install" to install all dependencies
 2. Nodemon is used to re-run the server whenever changes are made; run "npm run dev" to start nodemon.
 3. Go to config/config.js and edit the key values under the development object; enter your database username, password, dbname, host and dialect (in case you want to use another dbengine such as postgresql)
 4. Install sequelize-cli as a dev dependency or global dependency; I have sequelize-cli installed as a global dependency on my computer. Run "npm i sequelize-cli -g" 
 5. Run migration files to setup database i.e. run "sequelize db:migrate"