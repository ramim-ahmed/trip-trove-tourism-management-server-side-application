# Trip Trove Backend Application

Documentation.

Trip Trove basically a online tourism management website. that can provide country wise tour in beautiful location.

Functional Requirements:

---

Model

### Country

- user can create new country
- user can read all country
- user can delete single country provide unique id
- user can update single country provide udpated new data with unique id

### Tourists

- user can create new tourist spot
- user can read all tourist spot
- user can see all tourist spot added only himself
- user can delete single tourist spot provide unique id
- user can update single tourist spot provide udpated new data with unique id

### API ENDPOINTS:

---

## base_url = https://trip-trove-server-side.vercel.app/api/v1

#### Country

      GET /countries
      GET /countries/[id]
      POST countries/create-new
      PATCH /countries/[id]
      DELETE /countries/[id]

---

#### Tourists

      GET /tourists
      GET /tourists/[id]
      GET /tourists/my-lists/
      POST tourists/create-new
      PATCH /tourists/[id]
      DELETE /tourists/[id]

---

Tech Uses 🔥;

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : As based programming language.
- [NodeJS](https://nodejs.org/en): That allows to run javascript code in server
- [Express](https://expressjs.com/): A nodeJS minimalist web framework building server-side application
- [Mongoose](https://mongoosejs.com/): That help us to model or collection field schema validation in server-side to store data in mongodb

### follow me [ramim-ahmed](https://ramim-ahmed.vercel.app)
