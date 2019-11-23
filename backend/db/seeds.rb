# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Boards
running = Board.create(name: 'running')

# Users
bob = User.create(name: 'Bob')

# Subscriptions
sub1 = Subscription.create(user: bob, board: running)

# Comments
com1 = bob.comments.create(message: 'Why hello there!')

