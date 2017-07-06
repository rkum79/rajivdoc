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
* oracle java 8 (server jre 8u101) `But java will removed when hybris is installed`

#### User

| User   | Group  | uid  | gid  |
|--------|--------|------|------|
| hybris | hybris | 1000 | 1000 |

The hybris home directory `/home/hybris`

#### Ports

| Port | Purpose            |
|------|--------------------|
| 9001 | default HTTP port  |
| 9002 | default HTTPS port |
| 9003 | default SOLR port  |

The image exposes ``9001`` and ``9002`` for access to the hybris Tomcat server via HTTP and HTTPS.

#### Volumes

| VOLUME           | Purpose (Whirlpool project)   |
|------------------|-------------------------------|
| /usr/local/java  | This id use for extranal java |
| /app/hybris/log  | This is log file              |
| /app/hybris/data | This is for data extranalize  |
| /app/extensions  | This is for whirlpool code    |
| /app/config      | This is for whirlpool config  |

**Note - _Valumes and code may vary from project to project_**.

#### Configuration support

For support of different database configurations per container the following environment variables can be set when starting a container.
They will be used to add the properties in second column to ``local.properties`` file.

| Environment variable | local.properties          								|
|----------------------|--------------------------------------------------------|
| HYBRIS_DB_URL        | db.url=$HYBRIS_DB_URL           						|
| HYBRIS_DB_DRIVER     | db.driver=$HYBRIS_DB_DRIVER     						|
| HYBRIS_DB_USER       | db.username=$HYBRIS_DB_USER    						|
| HYBRIS_DB_PASSWORD   | db.password=$HYBRIS_DB_PASSWORD 						|
| HYBRIS_DATAHUB_URL   | datahubadapter.datahuboutbound.url=$HYBRIS_DATAHUB_URL |

#ORACLE DB SETTINGS WITH ORACLE IMAGE for Example only

| Environment variable | local.properties          								|
|----------------------|--------------------------------------------------------|
| HYBRIS_DB_URL        | db.url=jdbc:oracle:thin:@oraclexewhp:1521:xe			|
| HYBRIS_DB_DRIVER     | db.driver=oracle.jdbc.driver.OracleDriver  			|
| HYBRIS_DB_USER       | db.username=hybris    				            		|
| HYBRIS_DB_PASSWORD   | db.password=hybris             						|


#### How to use

As this image is just for Whirlpool for running SAP Hybris you need to either copy your own production artefacts in and commit the result as your own image or mount a directory containing them.
For the latter no own images are needed.

In Whirlpool Project we have created directory in D: drive for code

This **Dockerfile** is a **trusted build** del2vmplidoweb01:80/hybriswp:v01

#### Download the docker image:
```
docker pull del2vmplidoweb01:80/hybriswp:v01
```

#### Run with 9001, 9002 and 9003 ports opened:
```
docker run -d -p 9001:9001 -p 9002:9002 -p 9002:9002 del2vmplidoweb01:80/hybriswp:v01
```

#### Note : JAVA image is depencency to run the hybris image (JDK image del2vmplidoweb01:80/jdk8u131:v01)