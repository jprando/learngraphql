```sh
yarn global add knex
# or npm i -g knex

git clone https://github.com/jprando/learngraphql.git
cd learngraphql

yarn
# or npm i

knex migrate:latest
knex seed:run

cd src
node serve.js

# access http://localhost:4000/api in browser
```
