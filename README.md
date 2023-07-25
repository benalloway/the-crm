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