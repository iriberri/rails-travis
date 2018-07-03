# frozen_string_literal: true
source 'https://rubygems.org'
ruby '2.4.1'

gem 'rails', '5.1'
gem 'puma'
gem 'pg', '~> 0.21.0'
gem 'redis'
# gem 'figaro'
# gem 'jbuilder'
# gem 'lazily'
gem 'sass-rails'
# gem 'jquery-rails'
gem 'uglifier'
gem 'bootstrap-sass'
gem 'font-awesome-sass'
gem 'simple_form'
gem 'autoprefixer-rails'
gem 'devise'
gem 'webpacker', '~> 3.3.1'
gem 'erubis'
# gem 'client_side_validations'
# gem 'client_side_validations-simple_form'
# gem 'rails-assets-progressbar.js', source: 'http://rails-assets.org'
# gem 'stringjs-rails'
# gem 'rails-assets-multi-select', source: 'http://rails-assets.org'
# gem 'watir'
# gem 'rails-assets-bootstrap-datepicker', source: 'http://rails-assets.org'
# gem 'omniauth-oauth2', '~> 1.3.1'
# # gem 'omniauth-linkedin-oauth2'
# # gem 'jquery-ui-rails'
# # gem 'rails-assets-clipboard', source: 'http://rails-assets.org'
# # gem 'platform-api'
# gem 'jquery-atwho-rails'
# # gem 'smarter_csv'
# # gem 'ruby-progressbar'
# gem 'shopify_app'
# # gem 'scout_apm'
# gem 'order_as_specified'
# gem 'omniauth-shopify-oauth2'
# # gem 'ean'
# gem 'forest_liana'

# Direct upload from browser to S3
# gem 's3_direct_upload'

# Memcached client
gem 'dalli'

# Extend Hash Class
gem 'hashie'

# Parallel processing
gem 'parallel' ##

# Handle large uploads
gem 'rails-assets-resumablejs', source: 'http://rails-assets.org'

# Backend search
gem 'ransack'

# Bulk insert
gem 'activerecord-import', '>= 0.2.0'

# Websocket
gem 'pusher' ##

# Product tour
# gem 'rails-assets-intro.js', source: 'http://rails-assets.org' ##

# Model versioning
gem 'paper_trail'

# Dropzone
gem 'rails-assets-dropzone', source: 'http://rails-assets.org'

# Pass ruby variables to JS
gem 'gon'

# Vue.js
gem 'vuejs-rails'
gem 'rails-assets-vue-resource', source: 'http://rails-assets.org'

# Background jobs
source "https://gems.contribsys.com/" do
  gem 'sidekiq-pro'
end
gem 'sidekiq-failures'
gem 'sinatra', git: 'https://github.com/sinatra/sinatra', require: false

# Scapping
gem 'mechanize'

# Fetch privalia's emails
gem 'gmail'

# Client side search
gem 'rails-assets-lunr.js', source: 'http://rails-assets.org'
gem 'rails-assets-fuse.js', source: 'http://rails-assets.org'

# Authorization handling
gem 'pundit'

# Nested models forms
gem 'cocoon'

# # View decorator
# gem 'activemodel-serializers-xml', git: 'https://github.com/rails/activemodel-serializers-xml'
# gem 'draper', git: 'https://github.com/drapergem/draper'

# Serializer
gem 'active_model_serializers', '~> 0.10.0'

# API token auth
gem 'simple_token_authentication'

# API pagination
gem 'kaminari'

# Caching
gem 'actionpack-action_caching' ##
gem 'actionpack-page_caching' ##
# Use Category model as tree model
gem 'ancestry'

# Javascript tree structure
gem 'rails-assets-jqgrid', source: 'http://rails-assets.org'
gem 'rails-assets-jquery-ui', source: 'http://rails-assets.org'
gem 'rails-assets-jstree', source: 'http://rails-assets.org'

# Sweet Alert
# gem 'rails-assets-sweetalert', source: 'http://rails-assets.org'

# # API queries
# gem 'graphql'

# Image and files upload
gem 'carrierwave'
gem 'mini_magick'
gem 'fog'
gem 'fog-aws'
gem 'carrierwave_backgrounder'

# Lightbox
gem 'lightbox2-rails'

# ETL
gem 'kiba'
gem 'fuzzy_match'
gem 'levenshtein-ffi', :require => 'levenshtein'

# Mailer
gem 'mailjet'

# Generate an admin panel
# gem 'rails_admin', git: 'https://github.com/MatthiasRMS/rails_admin' ##
gem 'administrate'

# Salesforce client
gem 'restforce'

# HTTP requests
gem 'rest-client', '>= 2.1.0.rc1'

# i18n Integration
gem 'rails-i18n'
gem 'devise-i18n'

# Write Excel files
gem 'rubyzip', '~> 1.1.0'
gem 'axlsx', '2.1.0.pre'
gem 'axlsx_rails'
gem 'spreadsheet'
gem 'rubyXL'

# Impersonate user / Log in as another user
gem 'pretender'

# Lodash Js: adds basic functions to Js
gem 'lodash-rails'

# PG Full Text Search
# gem 'pg_search'

# Importing excel files for adding EANs or References to a flash sale
gem 'roo', '~> 2.5.0'
gem 'roo-xls'
gem 'creek'

# This gem for Ruby on Rails adds the content of the jQuery FullCalendar plugin from Adam Shaw
gem 'fullcalendar-rails'
gem 'momentjs-rails'

# For notifications
gem 'public_activity'

# Charting library
gem 'rails-assets-chartjs', source: 'http://rails-assets.org' ##

# Track actions
gem 'mixpanel-ruby'

# Stripe
gem 'stripe', source: 'https://rubygems.org'
gem 'stripe-i18n'

group :production do
  # Track errors
  gem 'sentry-raven'

  # Monitor timeouts
  gem "rack-timeout"
end

gem 'railroady'

group :test do
  gem 'rspec-sidekiq'
  gem 'faker'
  gem 'rake'
end

group :development, :test do
  # Code quality
  gem 'reek'
  gem 'rubocop', '>= 0.52.1'
  gem 'rubocop-airbnb'
  gem 'factory_bot_rails', '~> 4.0'
  # Debug
  gem 'binding_of_caller'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'spring'
  gem 'listen', '~> 3.0.5'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capybara', '2.15.1'
  gem 'capybara-selenium'
  gem 'launchy'
  gem 'letter_opener'
  gem 'simplecov', :require => false
  gem 'rspec-rails', '~> 3.6'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
  gem 'spring-commands-rspec'
  gem 'benchmark-ips'
end

gem 'web-console', group: :development