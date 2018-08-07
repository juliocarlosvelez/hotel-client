# Julio's BnB

- This app is a hotel booking app.

## User Stories

  **404:** As an user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
  
  **500:** As an user I can see a 500 page if I try to reach a page that does exist so that I know it's not my fault
  
  **See Hotel Info:** As a user I can see the hotels home page
  
  **See Apartments:** As a user I can see all the apartments the hotel has to offer with thier amenities and common amenities 
  
  **See Activites:** As a user I can see all the activites offered by the hotel
  
  **Book A Reservation:** As a user I can book a stay even as an anonymous-user

  **See Payment Confirmation (Fake):** As a user I can see that the payment for my booking went through
  
  **Manage Booked Reservation:** As a user I can see my previously booked reservation 
  
  **Cancel Reservation:** As a user I can cancel a booked reservation

  **Burger Menu Button:** As a user I can see all the pages I can navagate to
 
  **Quick Booking Feature:** As a user I can press on the Book Now button on the bootom of my screeen to navigate to the booking page

## Backlog

  **Sign Up:** As an anon-user I can sign up on the platform so that I can join the rewards program
  
  **Log In:** As a user I can login to the platform so that I can start see all my reservations

  **Logout:** As a user I can logout from the platform so I can be an anonymous-user 

  **Send Confirmation Email:** As a user I would like to receive an email after booking a stay

  **Payment System:** As a user I want to be able to pay for my stay
  
# Client

## Routes

  - / - Homepage
  - /apartments - apartment list
  - /activites - activites list
  - /booknow - Booknow form
  - /booknow/payment - Payment detail 
  - /reservation - reservation form
  - /reservation/:id - reservation details

  ### Backlog

  - /auth/signup - Signup form
  - /auth/login - Login form
  - /profile/:id
  

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Apartments Service
  - apartments.listAll()
- Reservations Service
  - bookings.createOne() 
  - bookings.detail(id) 
  - bookings.confirmPay(id)
    

## Pages

- 404 Page
- 500 Page
- Home Page
- Apartments Page
- Apctivites Page
- Booking Page
- Booking Confirmation Page
- Manage Booking Page
- Manage Booking Detail Page

- Sign Up Page
- Log in Page
- Profile Page
- Your Reservations Page

## Components

- Navbar component
- Apartment Card component
- Book Now compomnent

## IO

- Apartments List Page inputs apartments Apartment Card component: Display all restaurants in a list
- Login/Sign up form outputs the form to the parent component

## Guards

- if logged in cannot access login/signup page
- if not logged in cannot access profile page
- if not logged in cannot access your reservations page

# Server

## Models

User model

```

firstName: string // required
lastName: string // required
email: string // required + unique

```
Reservations model

```
startdate: string // required
enddate: string // required
apartment: objectid // required
totalPrice
user
status
reservation code

```
Apartments model

```
name: string // required
rooms: string // required
capacity: string // required
price: number // required

```

## API Endpoints/Backend Routes
  <!-- apartments -->
  - GET /apartments
  <!-- book now -->
  - POST /bookings
  <!-- manage booking -->
  - GET /bookings/:id
  - PUT /bookings/:id (Pay)
  <!-- login sign -->
  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/me
