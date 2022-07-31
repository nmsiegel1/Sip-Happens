<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url][![Issues][issues-shield]][issues-url][![License][license-shield]](./LICENSE.txt)



<br />
<div align="center">
  <a href="https://github.com/nmsiegel1/Sip-Happens">
    <img src="public/images/SipHappensLogo.png" alt="Logo" width="250" height="250">
  </a>

<h3 align="center">Sip Happens</h3>

  <p align="center">
    Sip Happens is an interactive full stack application that allows the user to choose a wine and view suggested pairings, as well as comment and vote on results. The user is also presented with a link to purchase wine as well.
    <br />
    <br />
    <a href="https://github.com/nmsiegel1/Sip-Happens"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://sip-happens-unc.herokuapp.com/">Deployed Application</a>
    ·
    <a href="https://github.com/nmsiegel1/Sip-Happens/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">Report Bug</a>
    ·
    <a href="https://github.com/nmsiegel1/Sip-Happens/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact-the-contributors">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


## About The Project
<h3 align="center">Sip Happens!</h3>



Interactive and full stack web application, catered to those who have a taste for the finer things in life.
<br/>

![SipHappensScreenshot](/public/images/Demo/DemoHome.png)


<p align="right"><a href="#top">back to top</a></p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Handlebars](https://handlebarsjs.com/)
* [Sequelize](https://sequelize.org/)
* [MySQL](https://www.mysql.com/)
* [Pixiejs](https://pixijs.com/)
* [Express Session / Connect Session Sequelize](https://pixijs.com/)
* [ES6](https://pixijs.com/)
* [ExpressJs](https://expressjs.com/)

#### Addtional Tools

* [Insomnia](https://eslint.org/)
* [bcrypt](https://eslint.org/)
* [dotenv](https://eslint.org/)
* [ESLint](https://eslint.org/)
* [Prettier](https://eslint.org/)







<p align="right"><a href="#top">back to top</a></p>




## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nmsiegel1/Sip-Happens
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter source into mySQL shell.
   ```js
    'db/schema.sql'
   ```

<p align="right"><a href="#top">back to top</a></p>


## Usage


Once the user is successfully signed up or logged in, the application directs them to the home page that will suggest features and present to them a link to 'Vivino' if they wish to purchase . If the user selects 'Wines', they are then redirected to 12 different categories of wine to choose from. Once selected, the user is presented with information based on their selection. The user is then able to comment on the pairings, as well as upvote their favorite combinations.
<br/>
<br/>

![SipHappensScreenshot](/public/images/Demo/LoginDemo.png)
![SipHappensScreenshot](/public/images/Demo/DemoCats.png)
![SipHappensScreenshot](/public/images/Demo/DemoPair.png)
![SipHappensScreenshot](/public/images/Demo/DemoComments.png)



<p align="right"><a href="#top">back to top</a></p>



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#top">back to top</a></p>

<!-- CONTACT -->
### Contact the Contributors

Andrew Byrd - andrew.byrds2@gmail.com

Arum Melton - arumjmelton@gmail.com

Mtende Roll - rollmtende@gmail.com

Nina Siegel - siegel.nina.m@gmail.com

[Deployed Application](https://sip-happens-unc.herokuapp.com/)

[Project Link](https://github.com/nmsiegel1/Sip-Happens)

<p align="right"><a href="#top">back to top</a></p>

<!-- LICENSE -->
## License

Distributed under the ISC License. See `LICENSE.txt` for more information.

<p align="right"><a href="#top">back to top</a></p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/badge/Sip%20Happens-View%20Contributors-brightgreen
[contributors-url]: https://github.com/nmsiegel1/Sip-Happens/graphs/contributors
[issues-shield]: https://img.shields.io/badge/Sip%20Happens-View%20Issues-red
[issues-url]: https://github.com/nmsiegel1/Sip-Happens/issues
[license-shield]: https://img.shields.io/badge/license-ISC-green
[license-url]: https://github.com/nmsiegel1/Sip-Happens/blob/Readme/LICENSE.txt
