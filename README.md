# React-exercise-3
Making web-app wit React

npx sequelize-cli model:generate --name movie --attributes title:string,price:integer,image:string

npx sequelize-cli model:generate --name moviedetail --attributes movieId:integer,release:integer,rating:integer,studio:string,desc:string

npx sequelize-cli model:generate --name genre --attributes name:string

npx sequelize-cli model:generate --name moviegenre --attributes movieId:integer,genreId:integer

