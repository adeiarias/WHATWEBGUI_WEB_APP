# WhatWebGUI_Web_App
## Functionalities

### Web Scanning
In this tab, you will be able to scan any website to get useful information about this. In addition, you can also specify two optional parameters which will display more information about the website.

The first paramters is aggression level. There are  aggression levels (Stealthy, Aggressive, Heavy). The more higher level is used, the more useful information is displayed. By default, "Stealthy" level is used.
The second one is verbose mode, if this parameter is activated not only will display the scan output, but also information about every plugin found in the website.

In case both domain or optional parameters don't exist, an error will be displayed.


### Scan History
Don't you want to know which websites do other users scan? With this functionality, every scan will be recorded in this table (ordered by scan date).
Furthermore, not only website's name will be recorded, but also its IP Address, CMS, CMSVersion, Server and ServerVersion. If the website has no CMS or Server, "Unknown" word will appear.


### About
In this tab, you'll find information about WhatWeb tool.



## How to deplay this app
In some days, I'll upload a docker-compose file, but If you want to use the application right now, follow the next steps:
Clone this repository using the following command -> git clone 
Clone WhatWeb repository if you haven't done it yet. Then, move it inside this project's folder (if you don't want to move it, you'll have to change the path in whatwebgui_back/routes/scan.js

### FRONTEND
Now, install "npm" -> 
sudo apt update
sudo apt install nodejs
sudo apt install npm

Move to whatwebgui_front folder and exec this command -> sudo npm i (this will create a folder called "node_modules" and it'll install every package used in this project)

Verify everything it's been installed correctly by executing this command (it's necessary to be in whatwebgui_front folder)-> npm start

### BACKEND
Now, let's configure the backend
Move to whatwebgui_back folder and exec this command -> sudo npm i

Install these packages to be able to use whatweb command:
sudo apt install ruby-bundler
sudo apt install ruby

One important thing, inside backend folder, you'll find a file called '.env', there you'll have to write your mongodb path
Start the backend with this command -> nodemon server --ext js
And start mongodb -> sudo systemctl start mongod

And now you're ready to use this application. ENJOY IT!!!
