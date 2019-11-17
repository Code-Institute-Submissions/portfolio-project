## Please see the deployed version at: 
https://portfoliowebsite.z35.web.core.windows.net/

# Gocan Dan, Full Stack dev. 
This is my personal presentation website, promoting myself as a Full Stack web developer to potential clients and / or employers. It lists my technical skills and my ability to use certain technologies and programming languages. And apart from the professional information, certain personal bits are inserted, like a history of my employment and education, together with a list of my hobbies. 

Any employer or potential client can see all the skills presented on the website at work as most technologies listed there are used to build the website. 

 
## UX
This website is mainly focused on potential work opportunities for me, attracting clients and tech. companies that are actively looking for staff or for someone to cooperate with. If any employer is interested, they can see my professional and educational history, a bit about myself, my technical skills and for their convenience, a CV is available to be downloaded.

In order to make the recruiting process as quick as possible, at the end of the website, there is a contact form, easily accessible and just as easy to use. 

### User Stories
 - As a recruiter for a large tech company, I want to hire a new front-end developer so I am checking the website and downloading the CV. 
 - As an invidual with a web application idea, I want to find someone to help me implement it and then sell it on the market so I fill the form and then send my message to a full stack developer. 
 - As a director in a small tech company looking to contracted work, I want to find someone that can help us on a current project so I am checking the website and downloading the CV. 
 - As a writer for a tech magazine, I want to see what is the current offer and demand on the tech jobs market so I am looking at what technologies are being studied and used so I am checking the "Technologies known" section.  


### Existing Features

#### Landing page
Where a short introduction is posted together with a picture of me. The user can have a quick glance to understand what the website is about. The navigation bar is at the top. 

#### About me
Here the user can check my educational and professional background, together with a short description of my hobbies. It is split in 3 columns, the first two being in a rigid, chronological order. At the bottom of the section there exists the possibility for any user to download my CV, in .pdf format.

#### Past projects
All my previous projects can be found here, with a small description of each, technologies used and the links to the deployed version and the raw code. A menu is available on the left side so the user can quickly browse through the projects.

#### Technologies and libraries used
This section lists my technical skills in terms of:
    - languages and libraries known
    - how well I estimate I know those languages and libraries (this is achieved graphically)
    - the tools and software I use to complete my projects 

#### Contact form
A fairly straight forward contact form where the user inputs their name, e-mail address and the message for me. Form validation is in place together with certain graphical hints if the user inputs the wrong type of information. 


## Technologies Used
- [HTML5](https://www.w3.org/TR/html52/)
    - The newest version of HTML has been used to build the general structure of the project.

- [CSS3](https://www.w3.org/Style/CSS/)
    - CSS has been used to add custom style to the project, uncovered by the Bootstrap4 library. 

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - Vanilla JavaScript has been used to alter how the project behaves in user interaction and to add a certain level of dynamism to the page. 

- [Bootstrap4](https://bootstrap.com)
    - The project used Bootstrap4 for grid allignment and to simplify styling. 

- [FontAwesome](https://fontawesome.com/)
    - Font Awesome was used to enrich the visual content of the website by providing icons in the form of text, easily addable and modifiable.

- [FontMfizz](http://fizzed.com/oss/font-mfizz)
    - Font Mfizz has been used for the graphical icons found around the website that were not covered by the Font Awesome icons. 

- [GoogleFonts](https://fonts.google.com/)
    - The font used throughout the website was taken and is hosted by Google Fonts. 

## Testing
These tests were conducted on the following browsers: 
    - Mozile Firefox
    - Google Chrome
    - Windows Edge

### General functionality
 - all sections have been browsed through to make sure all elements display and align correctly
 - all information has been checked to be accurate
 - all elements of the page have been checked to not contain any futile or poorly implemented code 
 - all links on the page have been checked to lead to the correct destination
 - the link for CV Downloading has been checked to be working
 - all icons used through Font Awesome and Font Mfizz have been checked to make sure they load correctly under all conditions, in all used browsers.
 - the "Past Projects" section has been thoroughly tested to make sure the text switched correctly in accordance with what the user's choices. The GitHub and Deployed projects links were tested as well. 

 ### User stories 
 - for anyone interested in contracting or hiring me, the "Download CV" links can be used and is fully functional.
 - for anyone interested in my skills or my abilities, all information on the website is displayed correctly and fully available.
 - for anyone wishing to contact me, the form at the end of the page is functional with form validation is in place. 

### Responsiveness 

#### Cross browser compatibility
The website has been checked and it displays correctly on all browsers used.

#### Cross device compatibility
The website has been checked for the following devices: 
- Extra large DELL monitor (24")
- ASUS laptop screen (17.1")
- Lenovo laptop screen (14")
- Samsung mobile phone (7")

It was deemed displaying correctly on all tested devices and being fully responsive.

### Bugs found
- In the Microsoft Edge browser, there is a 1px distance between the three columns in the "About me" section. It was not addressed yet. 


## Deployment
The website was deployed on Azure servers and can be found at the following link: (https://portfoliowebsite.z35.web.core.windows.net/). The Azure integration in Microsoft Visual Code was used. 

The deployed version and the GitHub version have no differences and only one branch is used (Master). 


## Credits

### Code
- The script for the "Full Stack Developer" title at the top was inspired from a StackOverflow post
- Certain other bits were inspired from [W3Schools](https://www.w3schools.com/)

### Media
- All media used on this website was created by my fiancee and life partner, Maria Nicolaescu and I thank her greatly. 

### Acknowledgements
- Of great help for this project was Haley Schaffer's GitHub account and the posted Code Institute solutions. Of particular great help was this repository: https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive
