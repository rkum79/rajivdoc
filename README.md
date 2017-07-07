# HYBRIS SANDBOX DOCKER SETUP

## PREREQUISITES : 
1.	Developer system should have at least 16 GB RAM.

2.	Virtualization should be enabled in Laptop/Desktop BIOS.

3.	Create below listed 4 directories under D:

	- **NOTE:** _These directories are used to provide data persistency at the container level & also in sandbox folder your codes are available [e. g. D:/Whirlpool/sandbox/extensions , D:/Whirlpool/sandbox/config etc..] ._
	 - `D:/Whirlpool/log`
	 - `D:/Whirlpool/ApacheLog`
	 - `D:/Whirlpool/hybris_data`
	 - `D:/Whirlpool/sandbox`

4.	“Docker Tool Version” – 17.03.1 and above & “Oracle VM VirtualBox” – 5.1.18 and above. If you have the earlier version, recommend to uninstall both of them and install and configure the system following Step III


## INSTALLATION STEPS:

	
A.	Steps for Docker installation and configuration :

#### 1.	Download and install latest stable Docker Toolbox on your Windows machine using below URL. Go with default settings
https://docs.docker.com/toolbox/toolbox_install_windows

   - **Note:** if your system already have Docker Toolbox setup in place, than make sure that you have ‘Oracle VM Virtual Box” version equal or higher than 5.1.18 and boot2docker version higher than v17.04.0. if not, than recommended to uninstall it and re-install the latest version, as new boot2docker VM ships with features that we are leveraging in our setup.
	
** 2.	Docker toolbox includes below listed tools:**   
   ..* Oracle Virtual box - where virtual machines gets created
   ..* Kitematic GUI - GUI to manage docker containers
	  - `Docker machine –to create virtual machines in Virtual box`
	  - `Docker Quickstart terminal – Preconfigured terminal to access Docker Engine over CLI`
	  - `Docker engine exe – Running docker Server`
	
#### 3.	Update the file start.sh located under Docker Toolbox installation path i.e. “C:\Program Files\Docker Toolbox\start.sh”,  to allocate required CPU, Memory and Storage to window docker virtual machine which is boot2docker VM
	  - `Take the backup of start.sh file first`
	  - `Find line ["${DOCKER_MACHINE}" create -d virtualbox $PROXY_ENV "${VM}"]`
	  - `Comment this line and add below one:`
```
	 ["${DOCKER_MACHINE}" create -d virtualbox --virtualbox-memory "8000" --virtualbox-cpu-count "2" --virtualbox-disk-size "50000"  $PROXY_ENV "${VM}"]
```
	- `Save the file`
   #### 4.	Take the backup of config.json file first & Update config.json file located at “C:\Users\<NT-ID>\.docker\machine\machines\default” and add [“del2vmplidoweb01:80”] under “InsecureRegistry”: [ ] section, final syntax is like :-
```
   "InsecureRegistry": [
                "del2vmplidoweb01:80"
            ],
```
   Doing this we are allowing docker engine to download the images from untrusted docker registry.
	
	#### 5.	Once Step 3 is completed, then go to the Desktop

	- `Double click on “Docker Quickstart Terminal”`
	
	This will create one default named virtual machine in Oracle Virtual Box. You can open “Oracle VM VirtualBox” to validate the same
	Validate the virtual machine resources configuration that was configured as part of step3. For this, go to 
	Inside “Oracle VM VirtualBox” select “default” VM
	Right click on “Default” Settings System Under MotherBoard Tab (Check the Base Memory size, it should be 8000MB).  
	Within same System TabUnder Processor ( check #processor is set to 2) 
	6.	Steps to share folder (which we created in prerequisite section) from Windows drive to virtual machine:
	Go to “Oracle VM Virtual Box” console
	First stop the “default” named virtual machine
	Select “default” named virtual machine and then click on “Settings” button
	Select “Shared Folders” and start adding using “Plus +” button, Locate the folders which you created as part of “Pre-requisite” section. Make sure to choose the “Auto-mount” options while adding shared storage
	Add all 4 shared folder, once done start the “default”  virtual machine by right-click  StartNormal Start
                7.             Please add the below DB properties in local.propreties file
	Open the local.properties file located at “D:\Whirlpool\sandbox\config\local\” and add the below line
#ORACLE DB SETTINGS
db.url=jdbc:oracle:thin:@oraclexewhp:1521:xe
db.username=hybris
db.password=hybris
db.driver=oracle.jdbc.driver.OracleDriver
	8.	Now go to the Docker Quickstart Terminal and run below command to set the environment
	# eval $(docker-machine.exe env default)  
	Downloade docker-compose.yml file under “C:\Users\<NT-ID>”, using attached one
	Run below command to create the multi container stack
	# docker-compose.exe up -d
	9.	Once all containers created and started, follow the below instructions to access different sections
	Access GUI using your docker-machine IP Open “mstsc”, enter 192.168.99.100:3389 and GUI will be opened
 	Note: There could be chance that you may get different IP and not   192.168.99.100. You can find your docker-machine IP when you open the “Docker Quickstart Terminal”. Use the IP that your docker-machine is associated to in order to access your docker applications.
	Login as username: hybris  & password: hybris123
	From GUI, you can access hybris from Firefox URL: http://hybris:9001/  & https://hybris:9002/
	Access container dashboard From Windows machine hit URL: http://192.168.99.100:9000
 	Set the password
 	Login using above created password
 	Once logged in choose “Manage the Docker instance where Portainer is running” and then click on connect button
              10.                    Please add the host entry in your system hosts file located at “C:\Windows\System32\drivers\etc”
                                                       192.168.99.100 sapdocker.whirlpool.com
                                        URLS : 
	https://sapdocker.whirlpool.com/ws
	https://sapdocker.whirlpool.com/store
	http://192.168.99.100:9001
	https://192.168.99.100:9002
 Note : There could be chance that you may get different IP and not   192.168.99.100. You can find your docker-machine IP when you open the “Docker Quickstart Terminal”. Use the IP that your docker-machine
