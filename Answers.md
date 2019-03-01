1.  Explain the differences between `client-side routing` and `server-side routing`.

**Client-side routing**

Pros:
- facilitated fully by the client side (i.e. mobile app or via JavaScript/Web Assembly at the webpage rendered in the client's browser)
- routing between pages is generally faster
- allows for smooth transitions between pages

Cons:
- worse than Server Side Routing for SEO
- can be hard to crawl via robots
- (usually) longer cold start (first load of the page)
- may require to transfer data that is not going to be used (i.e. data for the webpages that client is not going to visit)

**Server-side routing**

Pros:
- facilitated fully by server
- better for SEO
- easy to crawl via robots
- returns only the content needed to properly render the page - no fluff
- faster cold start (first load of the page)

Cons:
- every request requires to do the full page refresh
- may result in the worse User Experience when loading large content or when the client has the slow internet speed

2.  What does HTTP stand for?

HTTP stands for HyperText Transfer Protocol, so the stateless protocol in the Application layer of the OSI model created to facilitate hypertext transfers over the World Wide Web.

3.  What does CRUD stand for?

CRUD is an abbreviation for "Create, Read, Update, Delete" - the basics methods of persistent storage, so usually one of the most important actions for the client-side applications (web, mobile, desktop).

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C (create) - POST
R (read) - GET, HEAD (if the only things we want to access are the status and header section)
U (update) - PUT, PATCH
D (delete) - DELETE

5.  Mention three tools we caan use to make AJAX requests

- jQuery (`$.ajax`)
- fetch API
- axios

and also two additional libraries: `request` and `superagent`.
