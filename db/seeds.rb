# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Product.destroy_all

user1 = User.create!(email: 'user1@gmail.com', password: 'testtest')
user2 = User.create!(email: 'user2@gmail.com', password: 'testtest')

Product.create!(user: user1, name: "Pullover", url: "https://www.google.com", tagline: "Tinder for job search", category: "tech")
Product.create!(user: user1, name: "T-shirt", url: "https://www.google.fr", tagline: "Youtube sucks for education", category: "education")
Product.create!(user: user2, name: "Pantalon", url: "https://www.asos.com", tagline: "hello world", category: "design")