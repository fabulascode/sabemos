[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# sabemos

Collect and publish all of that tasty, inside-baseball knowledge you have about your local ICE offices and, specifically, the actors therein

### **Run Sabemos Locally**

---

This application is containerized. To run it, you must have docker installed and available on your machine. Find out more about installing `docker` [here ](https://gist.github.com/rstacruz/297fc799f094f55d062b982f7dac9e41) (gist) or [here ](https://www.docker.com/products/docker-desktop) (official docs).

To check whether `docker` is installed locally, configured correctly, and available, run `docker --version` or `docker-compose --version`.

Once docker has been installed, to start the application in development mode:

```
yarn start
```

This command will spin up the following resouces:

| Resource        | Location                      | Exposed | Notes                                                                                                                           |
| --------------- | ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Postgres        | localhost:5432                | No      | relational database [docs](https://www.postgresql.org/docs/)                                                                    |
| Redis           | localhost:6379                | No      | in-memory data store used for caching and message-brokering [docs](https://redis.io/documentation)                              |
| Prisma          | http://localhost:4466         | Yes\*   | object-relational mapping (ORM) responsible for provisioning and accessing postgres database [docs](https://www.prisma.io/docs) |
| Prisma Admin    | http://localhost:4466/_admin  | Yes\*   | database GUI [link](https://www.prisma.io/admin)                                                                                |
| Apollo          | http://localhost:4000         | Yes     | graphql api server [docs](https://www.apollographql.com/docs/apollo-server/)                                                    |
| GraphQL Voyager | http://localhost:4000/voyager | Yes\*   | datamodel visualization [repo](https://github.com/APIs-guru/graphql-voyager)                                                    |
| React App       | http://localhost:3000         | Yes     | frontend user interface bootstraped with `create-react-app` [docs](https://reactjs.org/docs/getting-started.html)               |

\*exposed only in development mode

With the above stack running, most changes to the source will be 'live reloaded'--meaning that that any resouce(s) affected by the change will automatically update without having to start/stop the application.

---

#### Clean Up Sabemos Resouces

To stop the application and/or teardown the above resouces:

```
yarn stop
```

---
