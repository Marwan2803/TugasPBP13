generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model actionMovies {
  id          Int     @id @default(autoincrement())
  title       String  @db.VarChar(100)
  director    String  @db.VarChar(50)
  releaseYear Int
  genre       String  @db.VarChar(50)
  rating      Float
}

model comedyMovies {
  id          Int     @id @default(autoincrement())
  title       String  @db.VarChar(100)
  director    String  @db.VarChar(50)
  releaseYear Int
  genre       String  @db.VarChar(50)
  rating      Float
}

model dramaMovies {
  id          Int     @id @default(autoincrement())
  title       String  @db.VarChar(100)
  director    String  @db.VarChar(50)
  releaseYear Int
  genre       String  @db.VarChar(50)
  rating      Float
}

model horrorMovies {
  id          Int     @id @default(autoincrement())
  title       String  @db.VarChar(100)
  director    String  @db.VarChar(50)
  releaseYear Int
  genre       String  @db.VarChar(50)
  rating      Float
}

model sciFiMovies {
  id          Int     @id @default(autoincrement())
  title       String  @db.VarChar(100)
  director    String  @db.VarChar(50)
  releaseYear Int
  genre       String  @db.VarChar(50)
  rating      Float
}
