# History and Geography Quiz #

## 1. Purpose of the project ##
This is a standalone quiz with multiple choice questions for anyone interested in history and geography trivia. The quiz can be used for educational as well as recreational purposes, and spans a wide variety of subjects in order to trigger the curiosity of participants. To introduce a competitive element, the quiz also has a score counter and displays the final score at the end. The purpose of this project is to use HTML, CSS and JavaScript to create a website with interactive elements, in this case a quiz game. The website is responsive on mobile, computer and tablet size screens.

![SCREENSHOT OF RESPONSIVE SCREENS](media/screenshot-responsive.png)

## 2. User stories ##
- As a user, I want to see the quiz start page and title to know what the topic of the quiz is.
- As a user, I want to start the quiz.
- As a user, I want to see the quiz question and the answer options.
- As a user, I would like to select and re-select my answer option before submitting it.
- As a user, I want to see if my submitted answer choice was correct or not before continuing with the next question.
- As a user, I want to see my current score.
- As a user, I want to see my final score and have the choice to restart the quiz.

## 3. Features ##

__Header__
-	The header contains the quiz title, and is present throghout the quiz.

![SCREENSHOT OF HEADER](media/screenshot-header.png)

 __Start Page__

 -	The hero image stretching the width of the screen is present on all pages. The image gives the visitor an impression of the food served, connects to the restaurant name (pomodorino is small tomato in Italian) as well as gives the visitor a place to rest their eyes from reading text.
-	

![SCREENSHOT OF HERO IMAGE](media/screenshot-start-page.png)

__Our story Section__

 -	This section gives visitors who are interested in the cuisine some background information to read, as well as an embedded YouTube video to watch about Southern Italy
 -	The visitor's interest will be peaked at this point, inviting it to find out more about the food.

![SCREENSHOT OF OUR STORY SECTION](media/screenshot-our-story.png)

__Our chefs section__

 - 	This section provides short profiles on the two chefs, as well as an embedded YouTube video (an profile interview conducted by BBC about one of the chefs).
 - The video provides a break from reading and will increase interest in the chefs behind the restaurant. 

![SCREENSHOT OF OUR CHEFS SECTION](media/screenshot-our-chefs.png)

__The Footer__ 

- 	The footer is divided into three columns for easy navigation, and provides the user with contact details to the restaurant in the form of phone number, e-mail address and a physical address. 
- 	The second column contains opening hours to the restaurant.
- 	The third section contains social media icons with respective links to Facebook and Instagram, as well as a prompt to the user to follow the restaurant. Each link opens to a new tab for ease of use (so the user isn't directed away from the website)
 - 	The footer provides the user with all the information it needs to interact with the restaurant, either physically by calling, e-mailing or visiting, or digitally, by browsing their social media content and getting an image of how a visit will look like.
 - The footer is present on all pages for easy access to this information.

![SCREENSHOT OF FOOTER](media/screenshot-footer.png)

__The Menu Page__

  - The menu opens in a new page and provides the visitor with a real-time screenshot of what options are available at the restaurant. There is a menu for food followed by a drinks menu. The food menu has a section each for courses, and the drinks menu is divided has two sections (note: not the element 'section'). All sections in the menus are indicated by a line break.
  - The visitor will get a clear idea about the food and drinks on offer, and be able to decide if they might like the food, which will aid them in making a decision about visiting the restaurant or not.
  - The menu also shows the prices of the menu items, which is useful for the user as they will be able to make a decision about whether or not the restaurant is within price-range. The user can also put together a hypothetical meal in their mind and calculate how much a visit to the restaurant might cost. This also contributes to the decision making process.

![SCREENSHOT OF MENU](media/screenshot-menu.png)

__The Booking Page__

  - The booking page contains a booking form as its main content. The booking form allows the visitor to book a table at the restaurant by entering and submitting the following information: 
    - name, e-mail address and phone number (these are required),
    - desired date and time of the booking (these are required),
    - number of adults and children attending (these are required), 
    - an optional message to the restaurant (e.g. to specify if the booking is for a birthday celebration).
  - Placeholders were put in place for easier use of the form.

 ![SCREENSHOT OF BOOKING FORM](media/screenshot-booking-form.png)

  __The Confirmation Page__
  - Once the visitor fills in the required information and submits the form, they are redirected to the confirmation page. This page has the same format and styling as the other pages, with a confirmation message appearing on the hero image (for larger screen sizes). For smaller screen sizes, the message appears below the hero image.
  - The confirmation message ensures the visitor that the booking form has been successfully submitted, so they can exit the page or continue exploring the other pages if they wish.

  ![SCREENSHOT OF CONFIRMATION PAGE](media/screenshot-confirmation.png)

## 4. Future features ##

- In the further development of this website, an idea for a feature would be to keep the hero image static on the page while allowing the page's main elements to scroll up on top of it. This could make the website feel more interactive. Furthermore, a gallery with pictures and an awards section for the chefs could also be incorporated.

## 5. Typography and color scheme ##
All titles and larger text elements (including the logo, navbar, confirmation message, booking form titles and the titles on the Home page texts) were h1-h3 elements, and had the following typography:
- font-family: "Libre Franklin", sans-serif;
- letter-spacing: 3px;

The rest of the body elements including the paragraphs on the home page and the menu, as well as the footer, used the following typography:
- font-family: Maitree, sans-serif;

All text elements were black.
The overall color scheme is very light: predominantly white and black. Additionally there is light beige and grey touches of color in the booking page and as background to the confirmation message.

## 6. Wireframes ##
The software Balsamiq was used to create a rough visual for the three main pages of the website, before coding commenced. This helped visualize the end product and created a realistic scope for the project. Below are two of the mockups.

![SCREENSHOT OF WIREFRAMES](media/screenshot-wireframe-menu.png)
![SCREENSHOT OF WIREFRAMES](media/screenshot-wireframe-footer.png)

## 7. Technology ##
- The programmin languages HTML5 and CSS3 were used to create and style elements.
- The wireframing software tool Balsamiq was used to create a visual mockup early on in the project.
- GitPod was used to write and edit the code, while GitHub was used for deployment and version control.
- The code was written in HTML, and CSS was used for styling the elements.
- Google Fonts was used to import the fonts used on the website.
- FontAwesome was used for importing icons used in the footer.
- W3C validator was used for finding errors in the code throughout the project and improving quality.
- Chrome Dev tools was used for increasing responsivity, testing CSS rules and exploring ways of managing bugs in the code.
- Website [https://tinyjpg.com/] was used to compress the hero image without losing image quality.
- PageSpeed Insights of web.dev (part of Chrome Dev tools) was used to measure site performance, accessibility, SEO and best practice.

## 8. Testing ##

### 8.1 Code validation ###
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frobinozer.github.io%2Fchefs-table%2F)

  *Note: the validator previously showed errors for section elements wrapping the hero image div, as well as both menu forms, since neither of these had a header element. To resolve this, I removed the section wrapper for the hero image and kept it as a div. For the menu forms, I replaced the section wrapper with the element aside.
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frobinozer.github.io%2Fchefs-table%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

- Additional testing included [PageSpeed Insights part of Chrome Dev tools](https://pagespeed.web.dev/report?url=https%3A%2F%2Frobinozer.github.io%2Fchefs-table%2F&form_factor=mobile) to measure performance, availability, best practice and SEO (respectively). All but performance received high scores for desktop usage. 

![SCREENSHOT OF DESKTOP SPEED ANALYSIS](media/screenshot-desktop-availability.png)

The analysis showed that the embedded YouTube videos slowed down the website (specifically the Home page) because of JavaScript that was not used. This was a larger problem for mobile version (see image below). However, as JavaScript is outside of the scope of this project, I did not attempt to correct it other than adding loading="lazy" attribute to the iframe element, which improved performance a bit. Worth to note is that the tool showed varying performance rates at different points in time, even when no changes had been made to the website code. The screenshots are from the latest measurement.

![SCREENSHOT OF MOBILE SPEED ANALYSIS](media/screenshot-mobile-availability.png)

### 8.2 Test cases ###

#### Title: Home Page – Access the restaurant's home page ####

Description: A visiting user should be able to successfully view the restaurant's home page.

Precondition: access to URL to the website.

Assumption: the visiting user is using a supported browser with existing internet connection.

User story to which this test case refers: "As a visiting user, I want to read about the type of cuisine the restaurant offers so that I can see if it interests me."

Test Steps:

1. In a browser, enter the website URL [https://robinozer.github.io/chefs-table/] and click enter.
2. The user should be directed to the Home page of the restaurant.
3. The user should notice the header, hero image, main page content (text and video) as well as the footer.

Expected Result: Redirect to Home page and load content.

Test passed.

![SCREENSHOT OF HOME PAGE TEST CASE ](media/test-case-home.png)

#### Title: Menu Page – Access the restaurant's menu ####

Description: A visiting user should be able to successfully view the restaurant's menu.

Precondition: the user needs to be present on any of the pages of the website already, or otherwise use a direct link to the menu page of the website.

Assumption: the visiting user is using a supported browser with existing internet connection.

User story to which this test case refers: As a visiting user, I want to read the menu to see if I want to eat the restaurant's food.

Test Steps:

1. From the Home page, click on 'Menu' in the header navigation bar.
2. The user should be redirected to the Menu page.
3. The user should notice the header, hero image as well as the menu for the restaurant.

Expected Result: Redirect to Menu page displaying the same header, footer and hero image as the Home page, with the restaurant's menu displaying below the hero image.

Test passed.

![SCREENSHOT OF MENU PAGE TEST CASE ](media/test-case-menu.png)

#### Title: Booking Page – Book a table at the restaurant ####

Description: A visiting user should be able to successfully use the booking form to book a table at the restaurant at a desired date.

Precondition: the user needs to be present on any of the pages of the website already, or otherwise use a direct link to the booking page of the website.

Assumption: the visiting user is using a supported browser with existing internet connection.

User story to which this test case refers: As a visiting user, I want to book a table for visiting the restaurant.

Test Steps:

1. From the Home or Menu page, click on 'Book a table' in the header navigation bar.
2. The user should be redirected to the Booking page.
3. The user should notice the header, hero image as well as the full booking form.

Expected Result: Redirect to Booking page displaying the same header, footer and hero image as the Home page, with the restaurant's booking form displaying below the hero image.

Test passed.

![SCREENSHOT OF BOOKING PAGE TEST CASE ](media/test-case-booking.png)

#### Title: Confirmation Page – Confirm table booking at the restaurant ####

Description: A visiting user should be able to successfully get a booking confirmation after filling in the booking form.

Precondition: the user needs to be present on the Booking page, and fill in the booking form on the booking page correctly.

Assumption: the visiting user is using a supported browser with existing internet connection.

User story to which this test case refers: As a visiting user, I want to get a booking confirmation so that I can be assured that I have a table at the booked date.

Test Steps:

1. In the 'Book a table' page, enter all required information into the form in the correct format (see placeholders for hints).
2. Click on the Submit button at the bottom of the form.
3. The user should be redirected to the Confirmation page.
3. The user should notice the header, hero image as well as the confirmation message.

Expected Result: Redirect to Confirmation page displaying the same header, footer and hero image as the Home page, with a booking confirmation message on top of the hero image or below it (depending on screen size).

Test passed.

![SCREENSHOT OF CONFIRMATION PAGE TEST CASE ](media/test-case-confirmation.png)

### 8.3 Fixed bugs ###

#### Bug 1 ####
When creating the booking form, all the form input items were bunched together instead of each displaying on a separate line. After trying various methods, I found that styling the actual input boxes with the following line of code made the error go away.

**input {
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: 2px solid grey}**

The result was as follows:

![SCREENSHOT OF BOOKING FORM BUG](media/booking-form-bug.png)

This created two additional issues: the "Message to us" section was not aligned underneath the radio buttons, and the radio buttons were too far separated from their text.
Adding line breaks fixed the message box issue, and the radio buttons needed the following styling to align properly:

**.radio-button {vertical-align: baseline;
width: auto;
margin: 1%;}**

#### Bug 2 #### 
When creating a media query for mobile size screens, the navbar was supposed to align below the logo. Despite using:

**.navbar {float: left; clear: left; margin-left: 0%; padding: 0%; margin-bottom: 2%; line-height: 20px;}**

.**class, .navbar {display: inline-block;}**,

the header looked like this:

 ![SCREENSHOT OF NAVBAR BUG](media/navbar-bug.png)

 I then tried 
 **nav {white-space: nowrap;}** and 
 **.navbar li {display: inline-block;}**
 to keep the navbar items in one line. That didn't work either. 
 
 Following this, I used the **overflow:hidden;** attribute in the parent and child list elements. This succeeded in aligning the navbar elements on one line, however the elements were in the wrong order and the page too wide:

 ![SCREENSHOT OF NAVBAR BUG](media/navbar-scroll-bug.png)

Finally, using CSS flexbox, I applied the following code.
1. Set the **float:right** property to **none** for the list elements.
2. In the CSS: 
**header {display: flex; flex-direction: column;}** and
3. **.navbar {display: flex; flex-direction: row-reverse; justify-content: flex-end;}**

The **flex-direction** reordered the elements, and **justify-content** made sure the elements kept to the left-hand side.

### 8.4 Supported screens and browsers ###
The website works well on large and wide screens, with support for two additional smaller screen sizes. 
- One is for screens up to 1280px, in which elements in parallel are shown vertically aligned. The specific px size was used as this was the breaking point where the screen became too small to fit the elements in their regular places.
- The second supports screens up to 450px (mobile). This has more extensive changes as e.g. the navigation menu in the header changes position (moves to below the logo).
- An additional tablet size media query might have been present, however in testing it turned out that the first media query for screens up to 1280px worked well on tablet sizes (including Nest Hub), which was why an additional media query was not included. 
- Chrome Dev Tools simulator was used to test for the following screen sizes:
    - Samsung Galaxy S8, S8+, A51/71
    - Samsung Galaxy S20 Ultra
    - iPhone SE, iPhone XR, iPhone 12 Pro 
    - Pixel 5
    - iPad Air, iPad Mini
    - Surface Pro 7 and Duo
    - Galaxy Fold
    - Nest Hub, Nest Hub Max
- Nearly all width/height/margin/padding values were given in percentages, which facilitated the responsivity of the website as a whole to different screen sizes.
- The website works well on Chrome - and although it hasn't been tested specifically for other browsers, the level of responsiveness should allow most modern browsers to use the website with ease.

## 9. Deployment ##

### 9.1 Via GitPod ###
The GitHub repository was created using the Code Institute GitPod template:
https://github.com/Code-Institute-Org/gitpod-full-template
- Click the link to get to the template. Click “Use this template”.
- Enter a repository name and a description, make sure the repository is public and then click “Create repository from template”.
- Click the green GitPod button, wait a moment for the workspace to open.
- The workspace is ready to be used.

### 9.2 Via GitHub Pages ###
Github Pages was used to deploy the website. The following steps were used:
- In GitHub, navigate to the repository and find the Settings tab at the top menu.
- Click on Pages in the left hand Menu.
- In “Build and deployment”, go to Branch, select main, and save.
- Wait a moment and refresh the page to find a box with the live URL. The website is now deployed.

## 10. Credits ##

### Content ###

- The text for "Our story" on the Home page was taken from: https://michelecarbone.org/italian-cooking-essentials-and-philosophy/
- The text in the menu was taken from: https://wandervirtually.com/lunch-dinner-navigating-the-italian-restaurant-menu/
- The wine list on the Menu page was taken from: https://www.italianorchard.com/?page_id=273
- The CSS code shown below in bold, used for styling the input boxes and message box in the booking form, was taken from: https://coursera.w3schools.com/css/tryit.asp?filename=trycss_form_padding

    **width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;**

- The CSS code shown below in bold was used to add spacing and a border in the form element, taken from: https://www.w3schools.com/w3css/w3css_input.asp

    **class="w3-input w3-border-0"**

### Media ###

- The hero image was taken by (open source) Arjuun Sreekumar on [Pexels](https://www.pexels.com/sv-se/foto/)mat-halsosam-rod-tradgard-2006333/
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)