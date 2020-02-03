## nodeJS Express Framework Practice

### Install
```
$ npm install

// or

$ yarn install

```

### Environment (optional)
```
$ cp .env.example .env
```

### Database Parameters
```
$ vim .env
```

Modify your db information
```
DATABASE_HOST=<your db host>
DATABASE_PORT=<your db port>
DATABASE_NAME=<your db name>
DATABASE_USERNAME=<db username>
DATABASE_PASSWORD=<db password>
```

### Execute Migration
```
$ npx sequelize db:migrate
```

### Run Service
```
$ npm start

// or

$ yarn start

```
