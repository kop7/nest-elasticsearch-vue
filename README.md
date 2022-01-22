# Autocomplete search with Nestjs, Elasticsearch and Vue

![](https://i.ibb.co/cw45tyM/vue-nest-elastic-1.jpg)

## Setup project
        
### How to setup local

  [Install Docker](https://docs.docker.com/v17.09/engine/installation/)

        git clone https://github.com/kop7/nest-elasticsearch-vue.git [project-name]  
        cd [project-name]/server && cp .env.example .env   
        run `npm install` into client and server directories
        docker-compose -f dev.yml build

##### How to find elasticsearch url
 
        docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nest-elasticsearch
        
   Replace the given `dockerIp` with  `ELASTICSEARCH_NODE=http://dockerIp:9200` in .env


### Start project

      docker-compose -f dev.yml up
      
Go to  `http://localhost:8080/home`     

![](https://media.giphy.com/media/dVcFFjF3hXihQNnxAS/giphy.gif)
