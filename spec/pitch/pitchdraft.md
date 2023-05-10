# Apollo 18 Pitch: r/FindMyFutureJob #

## Statement of Purpose ##

The purpose of our project is to create an interactive application that emulates the art of tea leaf reading. Tea leaf reading, also known as tasseography, has been practiced for centuries as a way to gain insight into the future. However, not everyone has access to an expert tea leaf reader, and many people are interested in exploring this ancient practice on their own. Therefore our application provides an accessible and user-friendly platform for individuals to conduct their own tea leaf readings. Users can choose from a variety of tea blends, and the application will generate a unique pattern based on the way the leaves settle in the cup. 


## User Personas ##

High School Student - 
Name: Emily
Grade: 11
Interests: Reading, writing, playing video games, listening to music, volunteering at the local animal shelter…
Current Study Interest: 
"I'm interested in exploring different career paths related to writing 
and storytelling. I love creating my own stories and worlds, and 
I'm interested in finding ways to turn that passion into a career."
Looking for: career guidance and advice

Aim of using our web app:
As a high school student, Emily is just starting to think about her future career options. She wants to use this web application to learn more about different career paths related to writing and storytelling, such as journalism, creative writing, and screenwriting. She hopes to gain a better understanding of what these careers entail, what skills they require, and what steps she can take now to start working towards her goals. She's also interested in finding resources and advice on how to build a portfolio and get her work noticed by potential employers.

UCSD Undergraduate Student - 
Name: Jack
Year: Freshman
Major: undecided
Hobbies: skiing, climbing, badminton, watching basketball games…
Current Study Interest: 
“I was very interested into electronics when I was young. I like investigating how the electric circuits are composed by diving them in parts.”
Looking for: summer off-campus internships

Aim of using our web app:
A college student who has not yet chosen a major and is struggling to identify their strengths and interests might use this web application to explore different career paths and gain insight into the skills and experience required for different jobs.



UCSD Graduate Student - 
Name: Jennie
Major: Communication (undergraduate) -> MFA program (Visual Arts)
Hobbies: Reading books, watching movies with friends, drinking coffee
Current Learning interests: 
“I decided to transfer to MFA when pursuing my master degree since I took many good visual courses during my undergraduates. In addition, I have began to learn drawing at 5 years-old and now master the drawing skills. I found how fascinated I was when I appreciate arts histories and modern arts practices.”
Looking for: a off-campus job or pursuing phD degree

Aim of using our web app:
A college student who was pursuing a master degree by switching careers after bachelor graduation might use the application to assess their transferable skills and explore new career options based on their interests and experience.


University of Toronto Graduate Student - 
Name: Rachel
Year: Second-year Master's student 
Major: History
Hobbies: Photography, reading, hiking, listening to podcasts... 
Current Study Interest: 
"My focus is on the social and cultural history of early modern Europe, specifically the 16th century. I am fascinated by the ways in which ordinary people navigated social and political changes during this period."
Looking for: research assistant positions

Aim of using our web app:
A graduate student who is interested in exploring career opportunities beyond academia and wants to utilize their research skills might use this web application to discover potential career paths in fields such as data analysis, market research, or policy analysis. They hope to gain a better understanding of the transferable skills they possess and how they can apply them in different settings.



## Risks and Rabbitholes ##

### Input Difficulties

- making sure the user knows what to click/know what was clicked
- making sure it is clear what is being chosen (everything needs to be labeled)
- make sure users can change their choices of tea type before they do the “pouring” action
  - button to confirm





### Risks from Output ###

- Without access to API, general job types are needed (Engineer, Manager, Finance worker, Health worker, etc.)
- Cannot reuse questions
- Should indicate that users cannot ask questions while answers are being generated 
- Discerning context of user answers and questions to see if it’s related to prior question
- Risk: should have a clear moment at which follow-up questions are unnecessary
- Boundary 2: Should have a clear moment at which a predicted job is made (cannot continuously asking questions forever)
- Job Type Boundary: ignore grad school, law school, medical school (can be relevant in descriptions)
- Job Type Boundary 2: Only jobs that benefit from attending college

### Risks from Visual Specificy ###

- Rabbit holes: Focusing too much on Reddit number similarity (amount of replies, relation between reply count to upvote count)
- Boundary: Ignore attempts at making a special design for the subreddit (use the general subreddit background)
- Boundary part 2: Decide on Dark Mode or Light Mode, not both
- Make username input requirement obvious
- Rabbit Hole: How the output is printed, such as line by line, all at once, character by character (possible future issue)

### Overextensions / If We had More Time ###
- Improved animations/user interactions (the tea pouring looking more realistic, the user needing to move the cursor in a circle to stir, buttons flash)
- categorizing what each leave represents when predicting
- tea leave patterns do not necessarily correspond to the same predictive lines
- Adding voice features for outputs to increase engagement and accessibility
- Tea leaf text interpretation has option to be in different option
- Rabbit Hole: How the text is printed, such as line by line, all at once, character by character (possible future issue), the pattern and colors of the cup



## Figma Diagrams and Wireframes ##
- https://tinyurl.com/timelesstwitterfigma
<br>
<br>
![](https://res.cloudinary.com/dounttx9k/image/upload/v1683528887/CSE%20110/Reddit/Screenshot_2023-05-07_at_11.53.36_PM_qxltrt.png)
![](https://res.cloudinary.com/dounttx9k/image/upload/v1683528885/CSE%20110/Reddit/Screenshot_2023-05-07_at_11.53.42_PM_qlnpzm.png)
![](https://res.cloudinary.com/dounttx9k/image/upload/v1683528885/CSE%20110/Reddit/Screenshot_2023-05-07_at_11.53.56_PM_mtdxcf.png)







