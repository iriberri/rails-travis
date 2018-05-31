# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Product.destroy_all

joffrey = User.create!(email: 'joffrey@gmail.com', password: 'testtest')
emma = User.create!(email: 'emma@gmail.com', password: 'testtest')

Product.create!(user: joffrey, name: "Pullover", url: "https://www.google.com", tagline: "Tinder for job search", category: "tech")
Product.create!(user: joffrey, name: "T-shirt", url: "https://www.google.fr", tagline: "Youtube sucks for education", category: "education")
Product.create!(user: emma, name: "Pantalon", url: "https://www.asos.com", tagline: "hello world", category: "design")