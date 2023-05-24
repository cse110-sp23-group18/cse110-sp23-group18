# Team 18 Meeting Minutes for Tuesday, May 16

## Details

Location: PC East
Time: Tuesday, May 16 6:30pm
Meeting Type: Team Updates and Discussion

### Attendance

-   Grant
-   Brian
-   Pramesh
-   Kavi
-   Shuyi
-   Fangyu
-   Damaris
-   Emily
-   Yulei

### Agenda / Tasks

-   [ ] Update on our work
-   [ ] Brainstorm questions for the midterm

## Minutes

### Topics Discussed in meeting

-   Need an ADR - Pramesh will handle that
-   `prod` will be the main stable branch, `dev` will be for development, and any new features should be a separate issue with a separate branch that will be a pull request into `dev`
-   Project Overview

### Updates

-   Creative
    -   Grant and Brian are working on the assets
    -   Assets ideas and ones that are already generated are in the `#creative` channel on Slack
        -   Based off of West of Loathing / Shadows Over Loathing
        -   Rough proof of concept drawings have been drawn
    -   Will get a draft of the assets by next Tuesday (May 23)
    -   Choose this art style because it's simple, looks good, and easy to focus on animation
    -   Will try and have a Figma mockup for mobile and desktop so that dev team can work off of that
    -   Have brainstormed and delegated the assets that need to be drawn
-   CI/CD
    -   Mainly focusing on the coding format
        -   Using AirBnb coding standards with ESLint right now, code dev team will let us know how if we like it or not
    -   Netlify - automatic deploy previews
        -   Every time that you make a pull request, it will generate a deploy preview link with changes
-   Dev Team
    -   Created a branch that will output 10 different responses onto the screen by clicking a button
        -   Everyone take a look to make sure that we like the style of the responses that was generated
    -   Created some basic files that proof of concept it in code
        -   Generated via ChatGPT and LLM's along with own input
        -   Waiting on the figma mockups
    -   Researched how to make websites responsive
        -   Looked at W3schools to make things responsive
        -   Saved some links that hvae things that we can use
        -   Can also use JS to animate, but more complicated but can also add more details to it

### Standardizing Stuff

-   Coding style
    -   Will (tentatively) use AirBnb coding style unless if code dev thinks otherwise. Reason: it uses good conventions and works well for JS
-   CodeQL
    -   Code quality tool that can test for security issues with code given common problems
    -   Good to make sure that your code doesn't have a ton of hidden issues that you might not know about
-   Artstyle
    -   Art is simple, handdrawn
    -   Still looks pretty good
    -   Can focus on animation and making it really good
-   Branch/Issue names
    -   Issue names will be a short description of the issue
    -   Branch names will include the number of the issue
        -   e.g. `branch20-createassets` for `Issue #20: create assets`

Meeting ended at 8:00pm.
