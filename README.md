```diff
Docker Oracle-xe-11.2g Database
===============================

## Oracle Express Edition 11g Release 2 on Ubuntu 16.04 LTS

This **Dockerfile** is a **trusted build** del2vmplidoweb01:80/oraclexe11:v02

### Installation(with Ubuntu 16.04)
```
docker pull del2vmplidoweb01:80/oraclexe11:v02
```

Run with 22 and 1521 ports opened:
```
docker run -d -p 22:22 -p 1521:1521 del2vmplidoweb01:80/oraclexe11:v02
```

Run this, if you want the database to be connected remotely:
```
docker run -d -p 22:22 -p 1521:1521 -e ORACLE_ALLOW_REMOTE=true del2vmplidoweb01:80/oraclexe11:v02
```

Connect database with following setting:
```
hostname: localhost
port: 1521
sid: xe
username: oracle
password: oracle
```
Connect database with following setting for Hybris Schema:
```
hostname: localhost
port: 1521
sid: xe
username: hybris
password: hybris
```
Oracle Login by SSH
```
ssh root@localhost -p 22
password: admin
```