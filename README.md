# AirBnb Copy

## About

This project is meant to be a copy of the AirBnb landing page. I made this project in order to exercise more the power of state in React and to understand the usability of components and how I can reuse them. 

## Components

### Navbar

The navbar is a simple component with just an image element for the AirBnb logo.

 

### Hero

The hero components consist of a hero image and a short description of what you can do on the website.

### Card

The card component is the most extensive one. It has a basic template for the card that will get data with the help of props and achive reusability. Also there is some logic that creates a badge with the purpose of showing the user if the experince is either sold out or online. 

```jsx
let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
```

## Data

I’ve put all the data that the application needs in a separate file called “data.js”. I did this in order to be easier to reuse code, such as the Card component and to be easier and quicker to change data in case of that need.

```jsx
{
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "swimmer1.jpg",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    }
```

## App.js

In App.js I called the .map function in order to map over my data in  “data.js” and put the information into the Card component. As a result I’ve made my code reusable and I could add as many Card components I want by just adding more JSON into the “dat.js” file.

```jsx
const cardElements = data.map(value => {
    return <Card 
      key={value.id}
      {...value}
  /> }
```