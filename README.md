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
	-d '{ "email": "joaquindiazschillagi@gmail.com", "name": "Joaquin", "password": "Secret12", "passwordConfirmation": "Secret12" }'

curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' \
	-d '{ "email": "joaquindiazschillagi@gmail.com", "password": "Secret12" }'

curl -v -X POST localhosts:3000/logout
```
