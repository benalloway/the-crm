# the-crm
A React Native CRM Application

## Overview of CRMastery
At the top level the ap has three main screens:
- The *Welcome screen*

- The *Regions screen*: list of available regions
    - *Create Customer* Icon Button: top right of screen ->
        - *Create Customer screen*: a form to add a new Customer
    - *Region list*: Pressable items ->
        - *Customer List screen*: list of customers in selected region
            - *Create Customer* Icon Button: top right of screen ->
                - *Create Customer* screen: a form to add a new Customer
            - *Customer list*: Pressable items ->
                - *Customer Detail screen*: 
                    - *Edit Customer* Pencil Icon: top right of screen -> 
                        - *Edit Customer screen*: a form to update a customer

- The *Notifications* screen: a form to send a push notification
    - Fill out the form and press the button to schedule a notification! (it works locally for me on both emulator and physical device)

## Steps to get project running
There are two methods of running the app locally; 

#### Method 1 (Recommended!): Build and run on your personal device
[Prerequisite] Expo Go App installed on your personal Android or iOS device

- clone project
- cd into project
- run command ```npm install``` from root of project
- wait for npm to finish...
- run command ```npm start``` from root of project
- Open Camera App on your personal device (or whatever app you use to scan QR codes)
- Scan QR code on your local machine running the Expo Go Server


#### Method 2: Use Emulator (either Android or Iphone)
[Prerequisite] Android + IOs simulators setup on local machine

- clone project
- cd into project
- run command ```npm install``` from root of project
- wait for npm to finish...
- run command ```npm start``` from root of project
- Press ```a``` to launch in Android simulator
- Press ```i``` to launch in iOS simulator

