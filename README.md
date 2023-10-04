# Grocery app

## Overview
This project is using the Nextjs "app" routes for SSR and CSR and "app/api" routes for create API endpoint:

### Project layout

```
|- app/                                  // Main Page is here ./app/page.tsx
|-  |-src/
|   |  |-/api                            // Folder containing GET req api for fetch products(Back End)
|   |  |   |-/[id]                       // Folder containing CREATE, PATCH, DELETE req api endpoint for individual product (Back End)
|   |- components/                       // Folder containing csr and reusable components (Front End)
|   |- provider/                         // Folder containing context provider (Front End)
|   |- services/                         // Services for api req (Front End)
|   |- utils                             // Folder containing connector of Prisma and LocalStorage functionalities
|   |- docker                            // Docker for Locally testing with POSTGRESQL Database 
|   |- prisma                            // Prisma ORM is using for maintaining POSTGRESQL database table and connector to database
|   |- types                             // Folder is containing type defined for Typescript
```

---

##### Build Project

```
$ npm run build
```

#### In Docker (Initially, deleting './prisma/migrations')
```
$ docker compose up
$ npx prisma migrate dev
$ npx prisma studio
$ npm run dev
```

---

#### Product Service
```
Request Body: {
    "catSlug": "Product category",
    "title": "Product name",
    "desc": "Product decription",
    "img": "Product Image",
    "price": "Product price"
}
```
|HTTP Method|URL|Description|
|---|---|---|
|`GET`|https://grocery-murex.vercel.app/api/products | GET All Products |
|`POST`|https://grocery-murex.vercel.app/api/products | Create new Product |
|`PATCH`|https://grocery-murex.vercel.app/api/{productId} | Update Product by ID |
|`DELETE`|https://grocery-murex.vercel.app/api/{productId} | Delete Product by ID |
