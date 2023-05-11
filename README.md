<div id="top"></div>

<!-- PROJECT LOGO -->

<br />

<h3 align="center">Unofficial DBZ API</h3>

<div align="center">
    <img src="https://duckduckgo.com/i/fa1f7406.png" alt="Logo" width="300">
    </a>
</div>

<div>
    <p align="center">View the documentation/testing site: <a href="https://unofficialdbzapi.cyclic.app/">The Unofficial DBZ API</a></p>
</div>

---

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
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About

This is a simple API that sends DBZ character data to client devices from a server hosted with Cyclic. 

I built this little API as a fun weekend project. It is not necessarily 'complete' yet, as there are still many characters left to add!

It is not affiliated with DBZ, Toei Animation, or Funimation in any way, I'm simply a fan of the series.

---

### Built With

* Node.js
* Express.js
* JavaScript
* SCSS
* CSS
* HTML

---

<!-- USAGE EXAMPLES -->
## Usage and Docs

This API was designed to make obtaining DBZ character information easy!
 
```
https://unofficialdbzapi.cyclic.app/api/character-name
```
Simply replace 'character-name' with any character from the DBZ universe.
```
https://unofficialdbzapi.cyclic.app/api/krillin
```

The API response will contain height and weight info, character birth date and death date(s), short description, images and more.

<p align="right">(<a href="#top">back to top</a>)</p>

---

### Full Character List

This is the list of characters currently added to the API.

* Android 16, 17, 18 & 19
* Bardock
* Bee
* Bikini Brief
* Bio-Broly
* Broly
* Bubbles
* Bulma
* Cell
* Cell Jr.
* Chi-Chi
* Cooler
* Dende
* Dr. Brief
* Dr. Gero
* Frieza
* Future Trunks
* Future Gohan
* Gevo
* Gregory
* Gogeta
* Gohan
* Goku
* Goten
* Gotenks
* Grandpa Gohan
* Guru
* Janemba
* Kami
* Kid Buu
* King Cold
* King Kai
* King Vegeta
* Krillin
* Launch
* Majin Buu
* Marron
* Mr. Satan
* Nail
* Ox King
* Paragus
* Piccolo
* Porunga
* Raditz
* Saibamen
* Shenron
* Tien
* Trunks
* Vegeta
* Vegito
* Videl
* Yamcha



<!-- GETTING STARTED -->
## Wanna add something?

If you want to work on the code or make any changes, fork the code to get started.


### Clone and Installation

You'll notice I have a .gitignore file blocking node_modules. You'll need those on your end to make any changes.


1. Fork & Clone the repo
   ```
   git clone https://github.com/RyanShort13110/dbz-api
   ```
2. Initialize npm within the main project folder
   ```
   npm init
   ```
3. Ensure express is installed within the main project folder
    ```
   npm install express --save
   ```
   
4. You'll want to have cors installed as well
    ```
    npm install cors --save
    ```

5. I also use Nodemon when testing. Nodemon allows for automatic restarting of the server upon any changes being made. This should be saved as a dev dependency
    ```
    npm install nodemon --save-dev
    ```

6. Then add the following into your package.json file. This line should be placed within 'scripts'
    ```
    "dev": "nodemon server.js"
    ```

7. You can now start your server using the following line in your terminal

    ```
    npm run dev
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [ ] Add Additional Templates w/ Examples
- [ ] Add Transformations & original air dates
- [ ] Multi-language Support
    - [ ] Japanese
    - [ ] Spanish
- [ ] Possibly add full episodes for certain characters

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ryan - ryanshort.webdev@gmail.com

Project Link: [Unofficial DBZ API](https://unofficialdbzapi.cyclic.app/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>


Again, this API is NOT affiliated with Toei Animation or Funimation whatsoever, I'm just a fan.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

