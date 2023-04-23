# e-ticketing

A fully-functional online ticket selling micro-services architected system. Build the system on MERN stack technologies.

# Micro-services Architecture

![e-ticketing-architecture](https://i.ibb.co/kKH8t7d/01-11-design-drawio.png)

## Local Environment Setup

- [Git](https://git-scm.com/)
- [Node.js v18.16.0](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/engine/install/)
- [Kubernetes](https://kubernetes.io/docs/setup/)
- [Skaffold](https://skaffold.dev/docs/install/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Run Locally

### 1. Environment Variables for Local Development

```
$ kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf
```

### 2. Clone repo

```
$ git clone git@github.com:fahimjason/e-ticketing.git
$ cd e-ticketing
$ skaffold dev
```

## Support

- Contact Developer: [Fahim](mailto:fahimulhoquejason@gmail.com)
