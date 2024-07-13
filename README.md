# Sports Goods E-Commerce Platform

## Overview

This project is a comprehensive e-commerce platform focused on sports goods. It provides a user-friendly interface for browsing, searching, and purchasing products. The platform includes essential features such as a product catalog, detailed product views, a shopping cart, and a checkout process. Additionally, it offers admin functionality to manage products.

## Features

### 1. Navbar & Footer

- **Navbar**: Includes logo and necessary menu items (All Products, Manage Products, Cart, About Us).
- **Footer**: Contains social media icons and website page links for easy navigation.

### 2. Homepage

- **Hero Section**: Carousel displaying discount information.
- **Featured Section**: Showcases latest products in card view with details like product name, category, stock quantity, brand, rating, description, price, and an image. A "View Details" button redirects to the Single Product page.
- **Category Section**: Displays categories of sporting goods. Clicking on a category redirects to the All Products page, filtered by the selected category.
- **Contact Us Section**: Form for user inquiries, with optional integration of EmailJS or NodeMailer.

### 3. About Us

- Information about the company, mission and vision statements, contact information, Our Team section, and store location information.

### 4. All Products

- **Display**: Lists all available products.
- **Search**: Allows users to find products based on name.
- **Filter**: Filters products based on category, price, brand, rating, etc.
- **Sort**: Sorts products in ascending or descending order by price.
- **Clear Filter**: Resets all filters.

### 5. Single Product

- Detailed product view including name, description, category, brand, stock quantity, rating (using `react-rating`), price, and image.
- **Add to Cart**: Button to add product to the cart, ensuring no duplicate products are added. Quantity can increase up to the stock count.

### 6. Cart Page

- **View Cart**: Displays all products in the cart.
- **Manage Cart**: Allows increasing/decreasing quantity and removing items.
- **Total Price**: Shows total price including 15% VAT.
- **Proceed to Checkout**: Button for order placement, activated if products are in stock.

### 7. Checkout Page

- **User Details**: Collects user information (name, email, phone number, delivery address).
- **Payment Methods**: Offers Cash on Delivery and Stripe (optional) payment options. Successful order placement deducts product quantity from stock.

### 8. Manage Products

- **CRUD Operations**: Admin can add, delete, and update products using RTK Query. Form fields are prefilled during updates.
- **User Notifications**: Modals/toasts inform users after delete, update, and create actions. UI updates accordingly.

### 9. Backend

- Integrated with a backend, either a single-page backend learned in Level 1 or a NoSQL-based backend.

### 10. Design Requirements

- **Responsive Design**: Ensures compatibility across devices (desktop, tablet, mobile).
- **Consistent Branding**: Sports-related color scheme and branding.
- **User Experience**: Emphasis on visual appeal and user-friendly interface.

## Bonus Features

- **RTK Query Polling**: Shows the latest products every 30 seconds.
- **Animations**: Implements animations on the homepage using libraries.
- **Documentation**: Detailed overview in the README file with significant meaningful commits.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sports-goods-ecommerce.git
   ```
