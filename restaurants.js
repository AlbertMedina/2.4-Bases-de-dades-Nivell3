// Restaurants Queries

// 1. Show all restaurants
db.restaurants.find({});

// 2. Show restaurant_id, name, borough and cuisine of all restaurants
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 3. Show restaurant_id, name, borough and cuisine of all restaurants (hiding _id)
db.restaurants.find({}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 4. Show restaurant_id, name, borough and zip code of all restaurants (hiding _id)
db.restaurants.find({}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1});

// 5. Show restaurants in Bronx
db.restaurants.find({"borough": "Bronx"});

// 6. Show first 5 restaurants in Bronx
db.restaurants.find({"borough": "Bronx"}).limit(5);

// 7. Show second 5 restaurants in Bronx
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);

// 8. Show restaurants with a score higher than 90
db.restaurants.find({"grades.score": {"$gt": 90}});

// 9. Show restaurants with a score higher than 80 but lower than 100
db.restaurants.find({"grades.score": {"$gt": 80, "$lt": 100}});

// 10. Show restaurants with a latitude lower than -95.754168
db.restaurants.find({"address.coord.1": {"$lt": -95.754168 }});

// 11. Show not 'American' restaurants with a score higher than 70 and a longitude lower than -65.754168
db.restaurants.find({"$and": [{"cuisine": { "$ne": "American" }}, {"grades.score": { "$gt": 70}}, {"address.coord.0": {"$lt": -65.754168}}]});

// 12. Show not 'American' restaurants with a score higher than 70 and a longitude lower than -65.754168 (without $and)
db.restaurants.find({"cuisine": {"$ne": "American"}, "grades.score": {"$gt": 70}, "address.coord.0": {"$lt": -65.754168 }});

// 13. Show not 'American' restaurants with an 'A' grade and not located in Brooklyn, sorted by cuisine in descending order
db.restaurants.find({"cuisine": {"$ne": "American"}, "grades.grade": "A", "borough": {"$ne": "Brooklyn"} }).sort({"cuisine": -1});

// 14. Show restaurant_id, name, borough and cuisine of all restaurants whose name starts with "Wil"
db.restaurants.find({"name": /^Wil/}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 15. Show restaurant_id, name, borough and cuisine of all restaurants whose name ends with "ces"
db.restaurants.find({"name": /ces$/}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 16. Show restaurant_id, name, borough and cuisine of all restaurants whose name contains with "Reg"
db.restaurants.find({"name": /Reg/}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 17. Show 'American'/'Chinese' restaurans located in Bronx
db.restaurants.find({"borough": "Bronx", "cuisine": {"$in": ["American", "Chinese"]}});

// 18. Show restaurant_id, name, borough and cuisine of all restaurants located in Staten Island, Queens, Bronx or Brooklyn
db.restaurants.find({"borough": {"$in": ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 19. Show restaurant_id, name, borough and cuisine of all restaurants not located in Staten Island, Queens, Bronx or Brooklyn
db.restaurants.find({"borough": {"$nin": ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 });

// 20. Show restaurant_id, name, borough and cuisine of all restaurants with a score of 10 or lower
db.restaurants.find({"grades.score": {"$lte": 10}}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});

// 21. Show restaurant_id, name, borough and cuisine of not 'American'/'Chinese' restaurants that cook fish or restaurants whose name starts with "Wil"
db.restaurants.find({"$or": [{"cuisine": {"$nin": ["American", "Chinese"], "$eq": "Fish"}}, {"name": /^Wil/ }]}, {"_id": 0, "restaurant_id": 1, "name": 1, "cuisine": 1});

// 22. Show restaurant_id, name and grades of all restaurants with a grade of 'A' and a score of 11 in ISODate '2014-08-11T00:00:00Z'
db.restaurants.find({"grades": {"$elemMatch": {"grade": "A", "score": 11, "date": {"$eq": ISODate("2014-08-11T00:00:00Z")}}}}, {"_id": 0, "restaurant_id": 1, "name": 1, "grades": 1});

// 23. Show restaurant_id, name and grades of all restaurants whose second a grade's has a grade of 'A' and a score of 11 in ISODate '2014-08-11T00:00:00Z'
db.restaurants.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}, {"_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "grades": 1});

// 24. Show restaurant_id, name, address and geographic location of all restaurants with latitud higher than 42 and not higher than 52
db.restaurants.find({"address.coord.1": {"$gt": 42, "$lte": 52}}, {"_id": 0, "restaurant_id": 1, "name": 1, "address": 1, "address.coord": 1});

// 25. Show all restaurants sorted by name in ascending order
db.restaurants.find().sort({"name": 1});

// 26. Show all restaurants sorted by name in descending order
db.restaurants.find().sort({"name": -1});

// 27. Show all restaurants sorted by cuisin in ascending order and then by borough in descending order
db.restaurants.find().sort({"cuisine": 1, "borough": -1});

// 28. Show all restaurants whose address has no street
db.restaurants.find({"address.street": {"$exists": false}});

// 29. Show all restaurants whose coord value is a double
db.restaurants.find({"address.coord": {"$type": "double"}});

// 30. Show restaurant_id, name and grades of all restaurants whose score can be divided by 7
db.restaurants.find({"grades.score": {"$mod": [7, 0] }}, {"_id": 0, "restaurant_id": 1, "name": 1, "grades": 1});

// 31. Show name, borough, longitude, latitude and cuising of all restaurants whose name contains with "mon"
db.restaurants.find({"name": /mon/}, {"_id": 0, "name": 1, "borough": 1, "address.coord": 1, "cuisine": 1});

// 32. Show name, borough, longitude, latitude and cuising of all restaurants whose name starts with "Mad"
db.restaurants.find({"name": /^Mad/}, {"_id": 0, "name": 1, "borough": 1, "address.coord": 1, "cuisine": 1});