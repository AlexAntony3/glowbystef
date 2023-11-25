# GlowByStef

(Add image of different screen sizes display)

## Introduction

GlowByStef is a full-stack application dedicated to my wife's business as a make-up artist. 

The app allows a user to sign up, view a gallery of work completed, filter through type of make up required e.g. weddings and birthdays. It also allows logged in users to have full CRUD functionality (create, read, use, delete) as they are able to post in a reviews section, sharing their experience, images and complete a star rating. 

## Agile Methodologies

Agile principles were used throughout this project, the main uses of agile were the Kanban system and MoSCoW prioritisation method.

The Kanban system was something that allowed me to stay on target. The Kanban system was separated into 5 categories:

 - Backlog - Where all initial issues are added
 - To-Do - As the name suggest, the issues I will need to work on in the project
 - In-Progress - The issues, I decided to work on.
 - Done - All issues that have been completed
 - Bug - All resolved/unresolved bugs are entered into this section.

This system allowed me to write in all my user stories and then make sure that all the requirements for the user stories to be completed could be remembered and amended as required. As I was learning throughout this project, additional user stories and other items were added onto the Kanban system. 

The MoSCoW method of prioritisation was used in this projection in conjunction with the Kanban system. All issues and items added to the board contained a label which detailed if the item was a **must have** **should have**  **could have**.  More priority  and time were given to the must have and vice versa for the could have items. 

(Add picture of kanban with labels here)

## User Experience (UX) 

### User Stories (logged out)
- As a logged out user, I want to be able to be able to see the home page   so that I can see an initial introduction to the application.
- As a logged out user, I want to be able to have the option to sign up so that I can access all the restricted content
- As a logged out user, I want to be able to sign in so that I can access all the restricted content.
- As a logged out user, I want to see validation upon not entering sufficient details in the form requirements so that I can have a safe and secure account.
- As a logged out user, I want to see validation when the correct details have not been entered when attempting to log in so that I am reminded that I have entered the wrong details.
- As a logged out user, I want to be able to click on the logo so that I am redirected to the home page.
- As a logged out user, I want to be able to see a services page so that I can see what services Stef offers.
- As a logged out user, I want to be able click on the services so that I can see more details of the service.
- As a logged out user, I want to be able to click on the socials in the footer so that I can follow the Stef on social media.

### User Stories (logged in)
- As a logged in user, I want to have a success message displayed when I log in so that I am aware that the log in was successful.
- As a logged in user, I want the corresponding accessible profile picture to appear so that I am aware that I am logged in to the correct account.
- As a logged in user, I want the navigation bar to present itself with different navigation links so that I can access the user restricted pages.
- As a logged in user, I want to be able create a review so that I can leave my feedback on a service.
- As a logged in user, I want to edit my review so that I  can change the review.
- As a logged in user, I want to be able to view all reviews left for Stef so that I can make an informed decision on contacting her for a make-up consultation. 
- As a logged in user, I want to be able to delete my review so that I can remove it from being seen.
- As a logged in user, I want to be able to save Stef's make up styles so that I can come back to it later.
- As a logged in user, I want to be able to view all of my saved items so that I can remind myself of what I saved.
- As a logged in user, I want to be able to filter through my saved items so that I can find what I am specifically looking for.
- As a logged in user, I want to access my profile data when I click on the profile image so that I can see the profile details.
### Developer Goals
- The site should restrict users from entering invalid data into forms 
- The form must contain placeholder text in all fields to make it easier for the user to use.
- A notification must appear when an account has been created.
- A notification must appear when a user has logged in.
- A notification must appear when a user has logged out.
- The application must be responsive to varying screen sizes. 
- The colour scheme used in the application must be consistent and appealing to look at.
### Expectations
- I expect a logged in user to have full CRUD functionality of reviews.
- I expect there to be a clear restriction in access for logged in and logged out users.
- I expect the any user to be able to see the services provided by GlowByStef.
- I expect all user data to be stored safely in django-rest backend.
- I expect all the front end to be completed using React and React-Bootstrap.
### Requirements
- The application must have clearly legible font.
- The application must have attractive to look at.
- The application must be intuitive, using icons that are the industry standard.
- The application must have all working functions.
- The application must have clear validation.
- The application must provide error messages and error pages when incorrectly accessed.
- The application must restrict content and not allow logged out users to access logged in utilities.

## Design & Structure

The design aspect of the project was something that I felt I was more confident with than previous projects. I've learned how to find and utilise contrasting and matching colours which entices the user to stay and use the application. 

The main decisions made in the design elements were influenced mainly by research conducted. The research was completed by comparing multiple applications that had a similar user stories as my own. From my research, it was obvious to see that the main principle followed by all of the applications was minimalistic. 

Another main component that was researched was CRUD functionality for users. It was identified that the vast majority of functionality was displayed with easily recognised icons. This is something that is implemented into the application. 

### Colour Scheme

As stated previously, the main element of design is being minimalistic. However whilst being minimalistic, contrasting colours are required for the highest level of engagement and to keep the interest alive. The colours used are also symbolic of colours often observed in make up palettes. The colour scheme and palette were created using [Coolors](https://coolors.co/?home "Coolors").

(Add picture of coolors colour)

| Colour (HEX) | Use |
|--|--|
| CDB4DB | This is a light colour used for cards, various backgrounds and to match the remainder of the page. |
| FFC8DD | This is a light colour used for cards, various backgrounds and to match the remainder of the page.   |
| FFAFCC | This is a slightly darker colour than the previous colours which will be used for borders and to show clear separation. |
| BDE0FE | This is a light colour used for cards, various backgrounds and to match the remainder of the page. This is also used as text colour. |
| A2D2FF | This is a light colour used for cards, various backgrounds and to match the remainder of the page. This is also used as text colour. |
| 24517C | This is dark tone that will be used for headers and footers |
| 1F2224 | This is the colour that will be used as the font colour for headers. |

### Icons

Multiple icons are used throughout the webapge, this is to increase the user experience and make the purpose of buttons / information sources easier to understand. [Font Awesome](https://fontawesome.com/ "Font Awesome") was used as the source of the icons.
[Favicon](https://favicon.io "Favicon") was also another source of icon used however this supplied an identifier for the website when a user visits. The icon is recognisable and is indicative of the type of website.

### Font

The aim of the application is to display elegance, vibrance and professionalism. All of these requirements were considered when picking the font. The fonts that have been decided for the project are:

- [Dancing Script](https://fonts.google.com/specimen/Dancing+Script "Dancing Script") - A font used very minimally throughout the project but used for some text that require an extra flare.
- [Roboto](https://fonts.google.com/specimen/Roboto "Roboto") - The main eye catching font used for titles and descriptions.

Both of theses fonts were found using [google fonts](https://fonts.google.com/ "google fonts")

### Breakpoints

For breakpoints within this website, there were some minor aspects using media queries however the vast majority of the breakpoints were controlled using bootstrap elements. The main requirement of the breakpoints were to set a limit, that being that as per bootstrap documentation, the minimum size the website must be functional and responsive to is 320px.

### Wireframes

(Add wireframes and descriptions)

## Database Structure

(Add all models and database schema)

## Existing Features

(Add titles, descriptions and images of each feature)

## Future Implementations

(add future implementations to this section)

## Technologies Used

### Languages

### Libraries and Frameworks

### Tools

## Testing

(Add all testing and screenshots)

## Deployment

## Local Development
### Forking
If you would like to fork any repositories, follow the steps below:
* Log in to **GitHub**.
* Navigate to the [GlowByStef](https://github.com/AlexAntony3/glowbystef "glowbystef"). 
* At the top of the page, locate the **fork** icon
* Click on the **downward** icon next to fork and press **create a new fork**.
* Select an **owner** for the repository
* **Change** the name of the repository if required
* Choose whether to **copy** all branches or just the `default` branch. 
* Click the Create Fork button and you have forked my repository.

### Cloning

If you would like to clone any repositories, follow the steps below:
* Log in to **GitHub**
* Access the required repository or my repository by clicking the following link: [GlowByStef](https://github.com/AlexAntony3/glowbystef "glowbystef")
* Click on the `<> Code` button.
* In the **local** tab, select the **HTTPS** button and copy the URL.
* Open up a new workspace
* Use the `git clone` command In the command line of the workspace, paste in the copied URL. It should look like this:

        git clone https://github.com/YOURUSERNAME/YOURREPOSITORY

* Press **Enter** and the repository will be cloned!.


* After forking the repository, follow the cloning method to continue with development.
* Once you're repository is set up, open the repository on **Gitpod** and you need to download all the libraries and frameworks.

        pip3 install -r requirements.txt

* Create an **env.py** in the root directory and enter the following:

**Note: the values for each key must not be shared and must be the same as what's entered into Heroku **

    os.envrion['DATABASE_URL']  = "elephantSQL url"
    os.environ['SECRET_KEY'] = "secret key you created"
    os.environ['CLOUDINARY_URL'] = "APU url from cloudinary, **remember to remove the CLOUDINARY_URL=' from the URL**"

* Now migrate all the models by entering:

        python3 manage.py migrate

* The next step is to create a superuser to be able to access the Django admin panel. 

        python manage.py createsuperuser

When creating a superuser, enter a username, email (optional) and password twice. When typing the password, it will not appear but it is being registered.

* now we're nearly done! in the **settings.py** add:

        .herokuapp.com,localhost

* Finally commit and push the changes and you're good to go! 

**Note: Make sure that the env.py variables are the same as what's entered into the config vars on Heroku. If this has not been completed yet, follow the next steps.**

### Heroku Set up
* Log in to your [Heroku](www.heroku.com) account and create an app. Choose an original name and select an appropriate region.

* Go to the **settings** page and click **Reveal Config Vars** in the key and port values type the following:

| Key | Value  |
|--|--|
| PORT | 8000 |
| DATABASE_URL | Same entry as env.py |
| SECRET_KEY | Same entry as env.py |
| CLOUDINARY_URL | Same entry as env.py |
|DISABLE_COLLECTSTATIC|1|

* Scroll down to **Buildpacks** and press add. Select **Python** and then select **nodejs**. Make sure **nodejs** is below **Python**. 

* Click on the **Deploy** button and if the website appears you're officially ready to go!

* To run the code on the development tool, type in the following to the terminal:

        python3 manage.py runserver


**Enjoy**

## Credits

This is my final project in my full-stack development course, and what a journey it has been. The complexity has increased 10 fold every project and I wanted to give up multiple times but somehow I have got to the end of it. I am really proud of my self. There are a lot of things I want to do to all my projects to make it better but this is something I plan on doing in the future, implement different frameworks and find work arounds to get the best outcome. 
   
For the completion of all my projects and not just this project, I want to thank the following:

- My wife, for constantly supporting me and putting up with the amount of time dedicated.
- My family, for giving me ideas, helping with questionnaires and testing my projects
- My mentor [Simen Daehlin](https://www.linkedin.com/in/simendaehlin/ "Simen Daehlin"), for always making sure that I'm pushing myself and not taking the easy way out. Thank you for the constant guidance and advice.
- The slack team, helping with multiple issues I had.
- The Code Institute tutor team, real life savers in my time of need, always kind and willing to help.