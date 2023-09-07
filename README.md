<br/>
<p align="center">
  <h1 align="center">Shrinkit🤏</h1>

  <p align="center">
    Deployment :- 
    <a href="https://shrinkit-dev.vercel.app/home">shrinkit-dev.vercel.app/home</a>
  </p>
</p>

![Stargazers](https://img.shields.io/github/stars/ZEUS77-dev/URLshort?style=social) ![License](https://img.shields.io/github/license/ZEUS77-dev/URLshort) 

## About The Project

This URL shortener is a simple yet powerful web application designed to condense long URLs into shorter, more manageable links. With this tool, users can create shortened links that are easier to share, remember, and track. The application provides a user-friendly interface, allowing users to quickly generate, search and manage their shortened URLs. This project follows MVC architecture.

### Performance Report ( Lighthouse )
<p align="center">
 <img align="center" width="500" height="500" src="https://i.ibb.co/Qb85q2Q/image.png">
</p>

<p align="center">
 (https://googlechrome.github.io/lighthouse/viewer/?gist=6c21baf4436811e25df90bdcc100f9ba)
</p>



## Built With

**Backend**
<br>
![Backend](https://skillicons.dev/icons?i=nodejs,express,mongodb,vercel)
<br>
**Frontend**
<br>
![Frontend](https://skillicons.dev/icons?i=html,css,js,bootstrap,codepen)

## Getting Started


### Prerequisites

 You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed

```sh
npm install npm@latest -g
```

### Installation

 1. Clone the repository or download the zip

`git clone https://github.com/ZEUS77-dev/URLshort `


   2. Install dependencies

`npm install`

   3. Setup either your local MongoDB database or Mongo Atlas account then create a cluster. Obtain the connection string and paste it in the `.env`  file for the attribute `MONGO_URL`. Also specify the `DOMAIN_PRE` accordingly followed by `PORT`.

4. Run for development: `npm run dev`.
5. Run for production: `npm run build` then `npm start`.

You should see a `db connected` & `Server started at ${PORT}` in the console.

## Working
The working of a URL shortener typically involves the following steps:

Input: The user provides the long URL they want to shorten.

Generation: The URL shortener uses a unique ID generation algorithm, such as `nanoid`, to create a short, alphanumeric code. This code serves as the key for the shortened URL.

Mapping: The short code is associated with the original long URL and stored in a database or data structure. This mapping ensures that the short code can be linked back to the original URL.

Shortened URL: The URL shortener constructs the shortened URL by appending the short code to a predefined domain or URL prefix. For example, if the domain is "example.com," the shortened URL might look like "example.com/abc123."

Redirection: When someone accesses the shortened URL, the URL shortener receives the request. It uses the short code in the URL to look up the corresponding long URL in the database.

Redirect: Once the original URL is retrieved, the URL shortener redirects the user's browser to the long URL, allowing them to access the desired content.

This process allows users to share shorter, more manageable URLs that redirect to the original long URL when accessed. URL shorteners often include additional features like link analytics, customization options, and security measures to enhance their functionality.

## Key Takeaways

Backend Technologies: Building a URL shortener project provided an opportunity to gain hands-on experience with backend technologies like Node.js and Express. Understanding how to handle HTTP requests, route management, and database integration using these frameworks is essential for building robust web applications.

Database Integration: Integrating a database, such as MongoDB, allowed for efficient storage and retrieval of data. Learning to work with databases enhanced your understanding of data modeling, CRUD operations, and managing data persistence in a web application.

Frontend UI Designing: Designing the frontend user interface (UI) for the URL shortener project provided insights into creating a visually appealing and user-friendly experience. Learning frontend technologies like HTML, CSS, and JavaScript enabled me to design and implement intuitive UI components and improve the overall user experience.

Project Architecture: Developing a URL shortener required considering the project's architecture and organizing code in a structured manner. This experience helped you understand the importance of modularization, separation of concerns, and maintaining a clean codebase. (MVC)

API Development: Building a URL shortener involved designing and implementing APIs to handle URL shortening, redirection, and analytics. This provided exposure to concepts such as RESTful API design, handling HTTP methods, request validation, and response formatting.

Deploying the URL shortener project using Vercel allowed for a seamless and straightforward deployment process. Understanding Vercel's platform and its features, such as automatic scaling, CDN caching, and easy integration with Git, simplified the deployment and ensured efficient hosting of the application.

## Resources

1.(ACMIITR) sessions😇
<br>
2.`https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82`
<br>
3.`http://uiverse.io/` - Open source ui components
<br>
4.`https://dev.to/heymich/build-a-url-shortener-with-nodejs-4pnp`

## License

Distributed under the MIT License. See [LICENSE](https://github.com/ZEUS77-dev/URLshort/blob/main/LICENSE.md) for more information.

