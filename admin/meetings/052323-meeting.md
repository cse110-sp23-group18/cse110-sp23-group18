# Team 18 Meeting Minutes for Tuesday, May 23

## Details

Location: Geisel 1st Floor
Time: Tuesday, May 23 6:30pm
Meeting Type: Restructuring and Next Steps

### Attendance

-   Grant
-   Brian
-   Pramesh
-   Kavi
-   Shuyi
-   Fangyu
-   Damaris
-   Yulei
-   Jessie

### Agenda / Tasks

-   Update on our work
-   Talk about -ilities and the ADR
-   Talk about restructuring team and repo to be more efficient
    -   Changelogs
    -   CI/CD
    -   Naming conventions (issues, branches, file names, functions, variables, etc.)
    -   Roadmap
    -   Standups and sprints
-   Assigning Dev work

## From Last Week

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

## Minutes

### Topics Discussed in meeting

-   Team Updates
-   Roadmaps and sprints

### Updates

-   Creative
    -   Assets done
    -   Background for mobile is finished as well
-   CI/CD
    -   Almost done, need to implement testing and JSDocs
-   Dev Team
    -   Shuyi
        -   In terms of responsiveness, just researched stuff on W3Schools
        -   Is going to just apply responsiveness
    -   Will probably need to work on transitions and stuff soon

### The Mobile App

-   Will be doing a mobile app first because website is harder to develop
-   [Current Figma](https://www.figma.com/file/zHWvnly3rRonLV9HlnL8F0/Tea-Mockup?type=design&node-id=0%3A1&t=nerHfrHx7dIZQIM4-1)
-   We have a few screens/frames for selecting tea teaves, pouring the tea, selecting the cup, drain the cup (details in the figma)
    -   Can turn this into a few different screens
-   Will have mobile version done by the end of this week
-   Specifics
    -   Will need to style with responsiveness and media queries
    -   Will need to do some CSS animations translating things (most of the other more difficult animations have already been animated in the gifs)
    -   Currently there are different HTML files for each frame

### ADR / Roadmap

-   Will be managed by Pramesh
-   Will be following the MADR manual instructions from [here](https://adr.github.io/madr/)
-   Pramesh made a branch `branch-adr` and uploaded some ADR records in markdown format

### Naming Conventions

-   Naming conventions will be in `admin/guidelines` and the ADR
-   Images will be in camelCase, images will have the number after
-   Most things will be camelCase

### Standups

-   Brian will make a slack channel for standup updates
-   People will update everyday around 8-9pm

### Changelogs

-   Changelogs will be automatically generated

### Others

-   Will be meeting later this week too to sync up again
-   [LettuceMeet](https://lettucemeet.com/l/wReLL)

Meeting ended at 8:00pm.
