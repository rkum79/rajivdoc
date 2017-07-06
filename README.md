Docker E-commerce Hybris Application
====================================

## Hybris Application **hybris-commerce-suite** Edition 6 Release 0 on **CENTOS 7**

###Expose Hybris and JDK volumes 

```
change the VOLUME code
*NOTE : VOLUME may vary from project to project 
```

This **Dockerfile** is a **trusted build** del2vmplidoweb01:80/hybriswp:v01

### Installation(with CENTOS 7)

#### Download the docker image:
```
docker pull del2vmplidoweb01:80/hybriswp:v01
```

#### Run with 9001, 9002 and 9003 ports opened:
```
docker run -d -p 9001:9001 -p 9002:9002 -p 9002:9002 del2vmplidoweb01:80/hybriswp:v01
```

#### Note : This is depends_on JAVA (JDK image del2vmplidoweb01:80/jdk8u131:v01)