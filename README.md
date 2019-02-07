# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
  cd into deployment root folder
  git pull
  cd app/javascript/chess
  git pull
  bundle install --deployment --without development test
  bundle exec rake assets:precompile db:migrate RAILS_ENV=production
  sudo service apache2 restart
  

* ...
