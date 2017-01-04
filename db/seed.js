const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedTea = () => db.Promise.map([
	{
		title: 'Earl Grey',
		description: 'British Prime Minister Earl Grey gave his name to this hugely popular tea back in the 1830s, and ever since it has been thought of as a classic English afternoon tea. It is not a type of tea, but a flavour, made up of a simple black tea flavoured with aromatic and stimulating oil of bergamot.',
		price: 525,
		inventory: 20,
		category: 'black'
	}, 
	{
		title: 'Green Jasmine',
	  description: 'Dawn-picked jasmine flowers open towards the end of the day to release their heady scent. This carefully selected green tea is allowed to absorb this natural scent, producing an orangey-gold liquid with a delicate taste and alluring fragrance. A superbly fragrant tea.',
	  price: 425,
	  inventory: 20,
	  category: 'green'
	},
	{
		title: 'Camomile',
	  description: 'There is nothing so calming as camomile. Soothing and delicate, it is ideal at any time of day, and especially just before bedtime.',
	  price: 595,
	  inventory: 20,
	  category: 'herbal'
	},
	], tea => db.model('teas').create(tea))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedTea)
    .then(teas => console.log(`Seeded ${teas.length} teas OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
