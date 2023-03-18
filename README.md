## Get Started
At the root of `./app` directory, run `npm install` then `npm start` to start the app. The app will be running on `http://localhost:3000`.

## Features
- contact list that display all the contacts
- search bar that search and filter the contact list
- button to delete each contact
- button to edit each contact
- button to add a new contact
- a popup form for editing current contact or adding new contact

## Mock Data
The app uses mock data with a json file located at `./app/src/db.json`. An example of the data structure is shown below:
```json
{
  "contacts": [
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.Doe@abc.com",
        "phone": "1234567890",
        "address": "123 Main St"    
    },
  ],
}
```
