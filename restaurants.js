// Restaurants Queries

// 1. Show all restaurants
db.restaurants.find({});

// 2. Show restaurant_id, name, borough and cuisine of all restaurants
db.restaurants.find({ "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 3. Show restaurant_id, name, borough and cuisine of all restaurants (hiding _id)
db.restaurants.find({ "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 });

// 4. Show restaurant_id, name, borough and zip code of all restaurants (hiding _id)
db.restaurants.find({ "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1 });

// 5. Show restaurants in Bronx
db.restaurants.find({ "borough": "Bronx" });

// 6. Show first 5 restaurants in Bronx
db.restaurants.find({ "borough": "Bronx" }.limit(5));

// 7. Show second 5 restaurants in Bronx
db.restaurants.find({"grades.score": {"$gt": 90}});

// 8. Show restaurants with a score higher than 90
db.restaurants.find({ "grades.score": { "$gt": 90 } });

// 9. Show restaurants with a score higher than 80 but lower than 100
db.restaurants.find({"grades.score": {"$gt": 80, "$lt": 100}});

// 10. Show restaurants with a latitude lower than -95.754168
db.restaurants.find({ "address.coord.1": { "$lt": -95.754168 } });

// 11. Show not 'American' restaurants with a score higher than 70 and a longitude lower than -65.754168
db.restaurants.find({ "$and": [ { "cuisine": { "$ne": "American" } }, { "grades.score": { "$gt": 70 } }, { "address.coord.0": { "$lt": -65.754168 } } ] });

// 12. Show not 'American' restaurants with a score higher than 70 and a longitude lower than -65.754168 (without $and)
db.restaurants.find({ "cuisine": { "$ne": "American" }, "grades.score": { "$gt": 70 }, "address.coord.0": { "$lt": -65.754168 }});

// 13. Show not 'American' restaurants with an 'A' grade and not located in Brooklyn, sorted by cuisine in descendent order
db.restaurants.find({ "cuisine": { "$ne": "American" }, "grades.grade": "A", "borough": { "$ne": "Brooklyn" } }).sort({ "cuisine": -1 });

// 14. Show restaurant_id, name, borough and cuisine of all restaurants whose name starts with "Wil"
db.restaurants.find({ "name": /^Wil/ }, {  "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 });

// 15. Show restaurant_id, name, borough and cuisine of all restaurants whose name ends with "ces"
db.restaurants.find({ "name": /ces$/ }, {  "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 });

// 16. Show restaurant_id, name, borough and cuisine of all restaurants whose name contains with "Reg"
db.restaurants.find({ "name": /Reg/ }, {  "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 });