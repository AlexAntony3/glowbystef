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

The MoSCoW method of prioritisation was used in this projection in conjunction with the Kanban system. All issues and items added to the board contained a label which detailed if the item was a **must have** **should have** **could have**. More priority and time were given to the must have and vice versa for the could have items.

(Add picture of kanban with labels here)

## User Experience (UX)

### User Stories (logged out)

- As a logged out user, I want to be able to be able to see the home page so that I can see an initial introduction to the application.
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
- As a logged in user, I want to edit my review so that I can change the review.
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

| Colour (HEX) | Use                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| CDB4DB       | This is a light colour used for cards, various backgrounds and to match the remainder of the page.                                   |
| FFC8DD       | This is a light colour used for cards, various backgrounds and to match the remainder of the page.                                   |
| FFAFCC       | This is a slightly darker colour than the previous colours which will be used for borders and to show clear separation.              |
| BDE0FE       | This is a light colour used for cards, various backgrounds and to match the remainder of the page. This is also used as text colour. |
| A2D2FF       | This is a light colour used for cards, various backgrounds and to match the remainder of the page. This is also used as text colour. |
| 24517C       | This is dark tone that will be used for headers and footers                                                                          |
| 1F2224       | This is the colour that will be used as the font colour for headers.                                                                 |

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

![logged out home](docs/loggedout_home.png)
![logged out services](docs/loggedout_services.png)
![logged out gallery](docs/loggedout_gallery.png)
![logged out signin](docs/loggedout_signin.png)
![logged out signup](docs/loggedout_signup.png)

![logged in home](docs/loggedin_home.png)
![logged in services](docs/loggedin_services.png)
![logged in reviews](docs/loggedin_review.png)
![logged in review dashboard](docs/loggedin_reviewdashboard.png)
![logged in gallery](docs/loggedin_gallery.png)
![loggedin edit review](docs/loggedin_editreview.png)
![logged in profile](docs/loggedin_profile.png)
![logged in liked](docs/loggedin_liked.png)

## Database Structure

### Profile model

| Field Name | Type          | Default Value                  |
| ---------- | ------------- | ------------------------------ |
| owner      | OnetoOneField | User, on_delete=models.CASCADE |

| created_at | DateTimeField | auto_now_add=True |

| updated_at | DateTimeField | auto_now=True |

| name | CharField | max_length=255 |

| bio | TextField | blank=True |

| contact_number | CharField | max_length=20, null=True |

| profile_picture | ImageField | upload_to='images/', default='../blank_profile_picture_n727ay' |

### Service Model

| Field Name | Type | Default Value |

|-------------|--------------|-----------------------------------------------------------------|

| name | CharField | max_length=255 |

| description | TextField | () |

| price | DecimalField | max_digits=10, decimal_places=2 |

| image | ImageField | upload_to="images/", default='../blank_services_picture_lc3p4z' |

### Review Model

| Field Name | Type | Default Value |

|---------------|---------------|--------------------------------------------------------------------------------------------------------------|

| owner | ForeignKey | User, on_delete=models.CASCADE |

| service | ForeignKey | Service, on_delete=models.CASCADE, related_name='reviews' |

| review | TextField | () |

| rating | IntegerField | default=1, validators=[ MaxValueValidator(5), MinValueValidator(1) ] |

| created_at | DateTimeField | auto_now_add=True |

| rating_filter | IntegerField | choices=RATING_FILTER_CHOICES, null=True, blank=True, |

### Gallery Model

| Field Name | Type | Default Value |

|-------------|---------------|-------------------------------------------------------------------|

| owner | ForeignKey | User, on_delete=models.CASCADE |

| created_at | DateTimeField | auto_now_add=True |

| title | CharField | max_length=255 |

| description | CharField | max_length=500 |

| image | ImageField | upload_to='images/', default='../default_post_f8mypf', blank=True |

### Like Model

| Field Name | Type | Default Value |

|------------|---------------|---------------------------------------------------------|

| owner | ForeignKey | User, on_delete=models.CASCADE |

| gallery | ForeignKey | Gallery, on_delete=models.CASCADE, related_name='likes' |

| created_at | DateTimeField | auto_now_add=True

## Existing Features

### Contact me section and footer

The contact me section is a section where in details are shared about opening times, motto and is decorated in a style that takes the theme of the application. This section also contains information that informs a user that when contacting Stef it must be planned 2 weeks in advance to take traffic into consideration.

### Footer

The footer is a contrasting colour to the rest of the page which makes it stand out of the page. It’s also separated into 3 sections of the logo, address and the social links. This is a pivotal part of the website as it is a direct route to contact Stef.

### Services page

The services page contains multiple cards that contain services provided by Stef. Each card contains an image, the title, a description and a price. Through research, this feature was popular amongst other salon related services. The services page is also fully responsive and on smaller screens, each service is stacked on top of each other.

The services page uses a component service card to ensure that anything added by the admin e.g. a new service, is dynamically created and fits in with the consistency of the other services. This shows aspects of professionalism which is great for user interactivity.

### Gallery page

The gallery page is the best place for a user to visit as it will give inspiration to the user to decide what kind of service they would like and something to show Stef as an example of the type of style. This also showcases the skills of Stef and builds a reputation for Stef. Additional functionality is that a non logged in user can see the amount of likes a gallery has and also a heart that has a hover effect with a tooltip that tells the user to log in to be able to like a post.

When logged in the user is able to like a post which appears as a block colour when liked and unlike a post when clicked again.

There is also a filter feature where the user can search for different posts and see results. Furthermore a logged in user can see the pictures that they have specifically liked.

This is a section that uses components multiple times in a loop to ensure that anything added by the admin, is created and added automatically. This is then formatted in the same templates as the other gallery card for consistency. The layout of the images are placed in a way that is not uniform as a strict images page makes the page seem more restrictive.

### Sign In page

The Sign in page features an attractive entry to allow users to log into the page, it features a form where a user can log in, and on the right of it, a picture that’s light and reflects the purpose of the website, additional through research I saw that most websites did not have a sign up navigation link, rather a sign in with a link that points to a sign up page if a user wants to make an account. This is the same principle that I followed and the clicking the sign up button leads to another page whereby the user can create a username, password and confirm the password. \

### Profile Page

The profile page is a classic page seen in multiple websites which allows users to update their display images and write a bio to enrich the user interactivity. This page allows users to edit certain aspects of their profile and customise it to their hearts desire.

### Sign out function

The sign out function as the name states allows the user to sign out and is redirected to the home page.

Unfortunately due to time constrains I was not able to take screenshots of all of the features. Please feel free to explore these features within the application.

## Future implementations

In the future, the features I’d like to include are:

Booking appointments
Paying for said booked appointments in advance
The ability for users to review each service which would then be reflected within a star rating.

These features are important aspects to make a more refined and finished product. However, due to time constraints I was no able to fulfil all the actions of this project that I initially intended. I intend to continually improve this website to make it functional and appealing for Stef’s clientele.

## Technologies Used

### Languages

- [HTML5](https://www.w3schools.com/html/)
- [CSS3](https://www.w3schools.com/css/)
- [Python](https://www.python.org/)
- [React](https://react.dev/)

### Libraries and Frameworks

- [Django](https://www.djangoproject.com/)
- [Cloudinary](https://cloudinary.com/)
- [Gunicorn](https://gunicorn.org/)
- [Psycopg2](https://pypi.org/project/psycopg2/)
- [Google Fonts](https://fonts.google.com/)
- [React-Bootstrap](https://react-bootstrap-v4.netlify.app/)

### Tools

- [GitPod](https://www.gitpod.io/)
- [GitHub](https://github.com/)
- [Git](https://git-scm.com/)
- [Heroku](<(https://www.heroku.com)>)
- [ElephantSQL](https://www.elephantsql.com/)
- [SQLite3](https://www.sqlite.org/index.html)
- [Devicon](https://devicon.dev/)
- [FontAwesome](https://fontawesome.com/)
- [AmIResponsive](https://ui.dev/amiresponsive)
- [Balsamiq](https://balsamiq.com/wireframes/?gad=1&gclid=CjwKCAjwr_CnBhA0EiwAci5sikJlbA3yk1dYGRdNiY0Krv7_98bWbqabFd_DxfjzG1-J7kWnl2-byhoC2cIQAvD_BwE)
- [W3C Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [CI pep8 linter](https://pep8ci.herokuapp.com/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

## Testing

### Manual Testing

#### All users

| Test                                                 | Outcome                                                                   | Pass or Fail |
| ---------------------------------------------------- | ------------------------------------------------------------------------- | ------------ |
| Clicking the logo                                    | Redirect to home page                                                     | Pass         |
| Clicking the Home button in the Nav Bar              | Redirect to home page                                                     | Pass         |
| Clicking the Services Button in the Nav Bar          | Redirect to services page                                                 | Pass         |
| Clicking the Gallery Button in the Nav Bar           | Redirect to gallery page                                                  | Pass         |
| View the navbar on a small screen                    | Burger Icon appears                                                       | Pass         |
| Click on burger Icon                                 | all relevant buttons are present                                          | Pass         |
| On small screens, click on the Home button           | Redirect to home page & Burger menu retracts                              | Pass         |
| On small screens, click on the services button       | Redirect to services page & Burger menu retracts                          | Pass         |
| On small screens, click on the gallery button        | Redirect to gallery page & Burger menu retracts                           | Pass         |
| On small screens, click outside of the menu dropdown | Burger menu retracts                                                      | Pass         |
| On normal screens move mouse over NavBar links       | Hover effect takes place                                                  | Pass         |
| Content: Click on home page                          | Cover photo, portrait and Bio present                                     | Pass         |
| Content: Click on services page                      | Cards present with service title, description, price and review button    | Pass         |
| Content: Click on Gallery page                       | Cards present with image title, description, hover effect and like button | Pass         |

#### Logged out Users

| Test                                          | Outcome                                              | Pass or Fail |
| --------------------------------------------- | ---------------------------------------------------- | ------------ |
| Clicking on the Sign in button                | Redirect to Sign in page                             | Pass         |
| Clicking on the Sign up button                | Redirect to Sign up page                             | Pass         |
| On small screens, click on the sign up button | Redirect to sign up page & Burger menu retracts      | Pass         |
| On small screens, click on the sign in button | Redirect to sign in page & Burger menu retracts      | Pass         |
| Content: Click on Sign up page                | Sign up section with an image on the right hand side | Pass         |
| Content: Click on Sign in page                | Sign in section with an image on the right hand side | Pass         |

#### Logged in Users

| Test                                     | Outcome                                                                   | Pass or Fail |
| ---------------------------------------- | ------------------------------------------------------------------------- | ------------ |
| click on Liked button                    | All gallery items that are liked by the user appears                      | Fail         |
| click on Profile dropdown button         | Account and sign out buttons to be present                                | Pass         |
| click on Account button                  | Redirected to the account information page for the user                   | Fail         |
| Once logged in, click on sign out button | Redirected to the home page and Navbar offers sign in and sign up options | Pass         |
| Once logged in, click like button        | Image liked                                                               | Pass         |
| Once logged in, click like button        | Like Count + 1                                                            | Pass         |
| Once logged in, click on sign out button | Redirected to the home page and Navbar offers sign in and sign up options | Pass         |

Due to time constraints I was not able to complete a full comprehensive set of tests.

As well as this, I was not able to take enough screenshots of the tests however no significant issues were observed with the code.

## Bugs

During the process of coding, I ran across multiple bugs that took a really long time to fix.

CORS error, this error cost a lot of time and effort. As continuous researching and asking others for help didn’t provide any functioning responses. The best option was to combine the workspaces in order to remove the CORS error. Combining the workspaces was probably one of the better things I did in this project as I was able to edit both the backend and the front end easily and quickly. And I only needed to write 1 readme, which is always a plus.
Like/ Unlike not functioning. This error was another time consumer as every time a post was liked, the whole page would go blank. Multiple errors were identified wherein the function of handleLike and handle unlike were not performing as it should. To fix this, I used the like_id and likes_count from the API response to set the initial states of the the likes_count and like_id variables. Then these variables were implemented into the handleLike and handleUnlike functions

## Unfixed Bug

On random occasions when liking a post the page is not responsive and then goes blank. However once hard refreshed, the action works as intended. I’m not sure exactly why this happens or how to recreate it but it would be at random intervals.

## User Story Reflection

Upon reflecting on the user stories set at the start of the project, I was not able to meet all the goals I set out to. This is due to multiple reasons such as bugs taking a long time to fix and also because of time constraints outside of the coding environment. However, I am proud to say that this is a good start and a solid backbone for me to be able to add more functions and capabilities. I plan to continue working on this project to make it an application that is viable.

The user stories I was not able to fulfil were:

As a logged in user, I want to be able create a review so that I can leave my feedback on a service - This is a feature I’d really have liked to implement however due to time constraints I was not able to do so.
As a logged in user, I want to edit my review so that I can change the review - as stated above
As a logged in user, I want to be able to view all reviews left for Stef so that I can make an informed decision on contacting her for a make-up consultation - as stated above
As a logged in user, I want to be able to delete my review so that I can remove it from being seen - as stated above.

All other aspects that were targeted have been met to the best of my capabilities

## Deployment

### Forking

If you would like to fork any repositories, follow the steps below:

- Log in to **GitHub**.
- Navigate to the [GlowByStef](https://github.com/AlexAntony3/glowbystef "glowbystef").
- At the top of the page, locate the **fork** icon
- Click on the **downward** icon next to fork and press **create a new fork**.
- Select an **owner** for the repository
- **Change** the name of the repository if required
- Choose whether to **copy** all branches or just the `default` branch.
- Click the Create Fork button and you have forked my repository.

### Cloning

If you would like to clone any repositories, follow the steps below:

- Log in to **GitHub**
- Access the required repository or my repository by clicking the following link: [GlowByStef](https://github.com/AlexAntony3/glowbystef "glowbystef")
- Click on the `<> Code` button.
- In the **local** tab, select the **HTTPS** button and copy the URL.
- Open up a new workspace
- Use the `git clone` command In the command line of the workspace, paste in the copied URL. It should look like this:

        git clone https://github.com/YOURUSERNAME/YOURREPOSITORY

- Press **Enter** and the repository will be cloned!.

- After forking the repository, follow the cloning method to continue with development.
- Once you're repository is set up, open the repository on **Gitpod** and you need to download all the libraries and frameworks.

        pip3 install -r requirements.txt

- Create an **env.py** in the root directory and enter the following:

**Note: the values for each key must not be shared and must be the same as what's entered into Heroku **

    os.envrion['DATABASE_URL']  = "elephantSQL url"
    os.environ['SECRET_KEY'] = "secret key you created"
    os.environ['CLOUDINARY_URL'] = "APU url from cloudinary, **remember to remove the CLOUDINARY_URL=' from the URL**"

- Now migrate all the models by entering:

        python3 manage.py migrate

- The next step is to create a superuser to be able to access the Django admin panel.

        python manage.py createsuperuser

When creating a superuser, enter a username, email (optional) and password twice. When typing the password, it will not appear but it is being registered.

- now we're nearly done! in the **settings.py** add:

        .herokuapp.com,localhost

- Finally commit and push the changes and you're good to go!

**Note: Make sure that the env.py variables are the same as what's entered into the config vars on Heroku. If this has not been completed yet, follow the next steps.**

### Heroku Set up

- Log in to your [Heroku](www.heroku.com) account and create an app. Choose an original name and select an appropriate region.

- Go to the **settings** page and click **Reveal Config Vars** in the key and port values type the following:

| Key                   | Value                |
| --------------------- | -------------------- |
| PORT                  | 8000                 |
| DATABASE_URL          | Same entry as env.py |
| SECRET_KEY            | Same entry as env.py |
| CLOUDINARY_URL        | Same entry as env.py |
| DISABLE_COLLECTSTATIC | 1                    |

- Scroll down to **Buildpacks** and press add. Select **Python** and then select **nodejs**. Make sure **nodejs** is below **Python**.

- Click on the **Deploy** button and if the website appears you're officially ready to go!

- To run the code on the development tool, type in the following to the terminal:

        python3 manage.py runserver

**Enjoy**

## Deploying the front end

### To deploy the front end follow these steps:

Log into Heroku, create a new app to the region that is closest to you and select a unique name.
In the deploy tab, connect the deployment method via GItHub and select the repository that you want to deploy.
Click deploy branch on main and watch the magic happen.
(Optional extra) Click on enable auto deploy which will deploy whenever the repository is pushed.
After deploying the app, click view app to see the application.

### To connect the frontend to the back end of the API:

On the created Heroku app, click on settings
Click on reveal config vars
Add the keys: ‘CLIENT_ORIGIN’ and ‘CLIENT_ORIGIN_DEV’ , add the values: [React deployed url] and [The GitPod development url] respectively. Be sure to remove the trailing slash.
In your development environment, install the axis library by typing in ‘nom install axios’.
Once completed, create a folder called API in the root directory and add a file name ‘axiosDefaults.
Import Axios and define the variables baseURL: [deployed backend URL], content-type: [multi-part/form-data], withCredentials: [True].
Import this file into App.js so that it can be used throughout the frontend.

## Credits

This is my final project in my full-stack development course, and what a journey it has been. The complexity has increased 10 fold every project and I wanted to give up multiple times but somehow I have got to the end of it. I am really proud of my self. There are a lot of things I want to do to all my projects to make it better but this is something I plan on doing in the future, implement different frameworks and find work arounds to get the best outcome.

For the completion of all my projects and not just this project, I want to thank the following:

- My wife, for constantly supporting me and putting up with the amount of time dedicated.
- My family, for giving me ideas, helping with questionnaires and testing my projects
- My mentor [Simen Daehlin](https://www.linkedin.com/in/simendaehlin/ "Simen Daehlin"), for always making sure that I'm pushing myself and not taking the easy way out. Thank you for the constant guidance and advice.
- The slack team, helping with multiple issues I had.
- The Code Institute tutor team, real life savers in my time of need, always kind and willing to help.
