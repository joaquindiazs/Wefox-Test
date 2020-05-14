# REST API Node.js

## Prerequisites

- node v12.7 (using asdf)
- npm 6.10.0
- redis 6.0.0 (using asdf)
- docker 19.03

## Setup 

```sh
# Boot MongoDB & Redis containers, and launch a local Express server
npm run up
```

## establish connection to dockers instances (interactive mode)

db
```sh
docker exec -it wefox-test_db_1 mongo -u admin -p secret wefox
```

cache
```sh
docker exec -it wefox-test_cache_1 redis-cli -a secret
```

## curl 


```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
	-d '{ "email": "joaquindiazschillagi@gmail.com", "name": "Joaquin", "password": "secret12", "passwordConfirmation": "secret12" }'

curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' --cookie 'sid=s%3AsRLKa3r_gtEukYdoxnwbQ7WSwr6MCIAr.SfA%2BJIRUbKak1BTjxYvXpbaHk8PEuR0O7yy1OyDVwaI'
```