Docker E-commerce Hybris Application
====================================

## Hybris Application **hybris-commerce-suite** Edition 6 Release 0 on **CENTOS 7**

A base image for Hybris Commerce Suite, based on CENTOS 7.

Can be used Out-Of-The-Box for projects based on Hybris Commerce Suite >6.0.0.0

#### Installed packages

* gzip
* zip
* lsof
* unzip
* bc
* curl
* oracle java 8 (server jre 8u101) [but it`s removed when hybris is installed]

#### User

| User   | Group  | uid  | gid  |
|--------|--------|------|------|
| hybris | hybris | 1000 | 1000 |

#### Ports

| Port | Purpose            |
|------|--------------------|
| 9001 | default HTTP port  |
| 9002 | default HTTPS port |
| 8983 | default SOLR port  |
| 8000 | default DEBUG port |
```
change the VOLUME code
**NOTE** : VOLUME may vary from project to project 
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