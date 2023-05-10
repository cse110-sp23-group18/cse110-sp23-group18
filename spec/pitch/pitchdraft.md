# Apollo 18 Pitch: r/FindMyFutureJob #

## Statement of Purpose ##

The purpose of our project is to provide a platform that gives the user a prediction of their future job based on the user’s interests and skills. We plan to do this by implementing the art of fortune telling to make our predictions of the user’s future job. Our interface will mimic the social networking platform Reddit’s wireframe. In particular, the user will answer a series of questions which will help the “fortune teller” to make the final prediction. The reason we chose to use a platform similar to Reddit as the mode of delivering a fortune was because it is a platform that divides people into communities based on shared interests. Since the users of our page will have the shared interest of seeking to know their future job, our platform will mimic a subreddit community specific to r/MyFutureJob. Overall, the goal of this project is to create a platform that provides its users with a fun way to explore their curiosity about what the future holds while also showcasing how technology can simulate fortune telling. We aim to offer an informative and entertaining experience for users of our platform.


## User Personas ##

High School Student - 
Name: Emily
Age: 17
Interests: Reading, writing, listening to music, volunteering…

Aim of using our web app:
Despite her love for writing, Sophia has been feeling unsure about her future career path. She's not sure if she wants to be a novelist, a journalist, or something else entirely. She's also concerned about the practicalities of making a living as a writer.
One day, while browsing online, Sophia came across a tea leaves fortune telling web app that claimed to offer insight into career directions. Intrigued by the idea, Sophia decided to give it a try. Using the app, Sophia input the pattern of the tea leaves that she had just finished brewing. The app generated a reading that offered insights into her future career, which suggested that Sophia had a natural talent and that she should pursue a career in her interests.
Excited by the prospect of pursuing her passion, Sophia continued to use the app to gain more insight into her future career. She found that the readings helped her stay focused and motivated, even when she was feeling discouraged or uncertain.


Middle manager in a corporate setting
Name: John
Age:  45
Personality: Hardworking, ambitious,  indecisive

Aim of using our web app:
John is seeking guidance on his career path. He feels that he has hit a plateau in his current job and is unsure about what steps to take next. He wants to find a fulfilling career that allows him to use his skills and experience to the fullest.

Challenges: John is skeptical of fortune-telling and may be hesitant to trust the guidance provided by the app. He may also be overwhelmed by the amount of information available and may have difficulty interpreting the results. Additionally, John may be concerned about the privacy and security of his personal information.


Unemployed
Name: Alex
Age: 30
Personality: Alex is a sensitive and introspective person who has struggled with depression and anxiety for most of his life. He feels isolated from others and has difficulty forming meaningful relationships. He is open-minded and receptive to new ideas but is also very cautious and skeptical.
Looking for:Insights and advice based on his individual circumstances and personality. He expects the app to be easy to use and understand, and he values accuracy and reliability.

Aim of using our web app:
Alex is feeling lost and uncertain about his future. He is seeking guidance on the direction his life should take. He wants to find a sense of purpose and meaning and is hoping that the fortune-telling app can offer him insights and guidance.


Y&G Model - 
Name: Lila
Age: 27
Hobbies: Photography, reading, hiking, listening to podcasts... 

Aim using our web application:
Lila has been working as a model. Despite her busy schedule, Lila has always had a soft spot for love and relationships. 
One day, while scrolling through social media, Lila came across a tea leaves fortune telling web app that claimed to offer insight into love and relationships. Using the app, Lila input the pattern of the tea leaves that she had just finished brewing. The app generated a reading that offered positive insights into her future love life, which suggested that Lila would meet someone special in the near future.
Thanks to the tea leaves fortune telling app, Lila was able to find love and happiness in her life. She continued to use the app for fun and to gain positive insight into her future, but she knew that it was ultimately her own actions and decisions that would shape her destiny.



## Risks and Rabbitholes ##

### Risks from User Input


- Semi-contradictory input (ex: I am good at math and science. I struggle with linear algebra and physics)
- Noting appreciation (or lack thereof) of what they study
- Rabbit Hole: noting if they’re more focused on what they enjoy vs. what they’re good at
- Handling relevant information (ex: ignoring random statements such as “I have 2 siblings.”)
- Rabbit Hole: overthinking distance in the future of the reply (1 day vs. 1 year)
- Ethical boundaries of the input (screening of the input, handling input contain discriminatory, insulting and violent content, NSFW information/making it clear we do not predict NSFW work)
- Handling question/statement deciphering if libraries go down
- Ignore character limit (bounded to library limit)
- How to guide users to ask job-related questions by giving the corresponding prompt (example: ask me anything about your future job/ You can ask “what will my future job be like”)



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
- Menu to allow users to use other social media platform UI’s (Twitter, Instagram, WeChat, etc.)
- Include other strong descriptions of a future after undergrad (grad school, law school, etc.)
- Add old reddit UI
- Adding voice features for outputs to increase engagement and accessibility
- Alter reply based on how far in the future after college
- Allow for multiple job possibilities (multiple future selves)
- Rabbit Hole: Integrating other platforms with the app may raise issues. ex: possible compatibility issues when integrating the app with web browser on computers vs. phones
- Adding on using AI, do  want to develop an algorithm that can better provide meaningful and relevant response facilitating
- Describing how successful the person will be at their job
- Account for much younger/older students (high schoolers, students starting college when older)



## Figma Diagrams and Wireframes ##
- https://tinyurl.com/timelesstwitterfigma
<br>
<br>
![](https://res.cloudinary.com/dounttx9k/image/upload/v1683528887/CSE%20110/Reddit/Screenshot_2023-05-07_at_11.53.36_PM_qxltrt.png)
![](https://res.cloudinary.com/dounttx9k/image/upload/v1683528885/CSE%20110/Reddit/Screenshot_2023-05-07_at_11.53.42_PM_qlnpzm.png)
![](https://res.cloudinary.com/dounttx9k/image/upload/v1683528885/CSE%20110/Reddit/Screenshot_2023-05-07_at_11.53.56_PM_mtdxcf.png)







