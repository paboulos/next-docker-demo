## Using zeit/next pkg to package the app to a single executable file and use Docker to wrap it with Alpine Linux environment.

## Functioning Dependencies

 "dependencies": {
    "next": "6.0.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
   "devDependencies": {
    "pkg": "4.3.1"
  }
## Nonfunctioning Dependencies
"dependencies": {
    "@zeit/next-css": "^1.0.1",
    "next": "^8.1.0"
}
"devDependencies": {
    "pkg": "^4.4.0"
  }

## Install and Build /bin/sh
$ yarn install

# Build pkg
$ yarn run build
$ yarn run pkg

# Debug pkg
- Pass option --debug to pkg to get a log of packaging process. 
- If you have issues with some particular file (seems not packaged into executable), it may be useful to look through the log.  
# Executable Binary
./pkg/<package.json name>

# Build Docker Image and Run Container on Alpine
- docker build -t nextjs-pkg-docker-alpine .
- docker run --rm -it -p 80:3000 -e "PORT=3000" -e "API_URL=https://API_URL.com" nextjs-pkg-docker-alpine
## In Developer Mode Add Dependencies
 - While development compose is running open another console run Yarn add/remove/upgrade
  >> docker-compose exec web yarn add pkg --dev
## Clean Up 
- Docker provides a single command that will clean up any resources — images, containers, volumes, and networks 
  — that are dangling (not associated to a container):

    >>docker system prune
- To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:

    >>docker system prune -a
