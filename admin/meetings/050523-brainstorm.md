# Team 18 Meeting Minutes for Friday, May 5

## Details

Location: Zoom
Time: Friday, May 5 at 7:15pm
Meeting Type: Brainstorm meeting

### Attendance
- Grant
- Brian
- Pramesh
- Shuyi
- Jessie
- Fangyu
- Damaris
- Kavi
- Emily


### Agenda / Tasks
- [ ] Rethink Timeless Tweets idea
- [ ] Consider logistics of app
- [ ] Start thinking about and delegating work for the pitch

## Minutes

### Links to Important Documents
- [Google Docs with more details](https://docs.google.com/document/d/1JezWzzdS7xpDPmtYzGWAP4wgzL_Lw-7Lxp0NKwXPNgI/edit#)

### The Issue
- The current topic (Timeless Tweets) is too broad, we need to implement something local first
  - Need to have pregenerated responses, like a Buzzfeed quiz, and not something that we need to rely on ChatGPT API for
- In terms of pitch requirements
  - Wireframes and designs shoulkd have mobile and desktop versions (cross compatibility)
  - Images
  - Designs
  - User personas need to be less broad and be more specific -- create a fake person/user
  - Can't just copy Twitter's UI/branding exactly. We may be able to d a mock Twitter app, like Pear Phone for iPhone clone or something like that
- Project Needs
  - Use modern stndards such as [these](https://web.dev/learn/pwa/)
  - Use lots of Web API's such as local storage, indexed DB, and [others](https://developer.mozilla.org/en-US/docs/Web/API/)
  - Use modern CSS: CSS variables, Media queries, CSS Grid / Flexbox for responsiveness
  - CI/CD. Start making pipelines for
    - Linting
    - Unit + Integration Testing
    - Deployment
    - Doc Generation (JSDoc)
  - Documentation
    - User End:
      - FAQ's, About Us, Pages
    - Dev end:
      - Automated Docs
      - Wikis
      - Markdown files
    - README on how to run the app

### Brainstorming

#### Initial Thinking
- Rethink how out question to answer flow will be. Right now, our questions are too open-ended. There is no way for us to hard code answers to questions right now
- Should foxus on one topic. Examples:
  - `What classes should I take at UCSD if I love art?` will recommend good classes
    - Unsure if this is fortune telling or not
    - Easy to hardcode answers
  - `What chinese food should I eat today?` will recommend clasic dishes

#### Topic Brainstorming
- Which anime character are you?
- Which UC is right for you?
- Which college (Muir/ERC/etc.) are you?
- What style should I dress myself today?
- What should you make for dinner?
- Where should you eat for dinner?
- Which TV character from a show are you?
- Make our own version of an MBTI test
- What is your future job?
- What sport should you watch?
- What music genre should you start listening to?
- What programming language is perfect for you?

#### Further Thinking
- Can we bounce off the Reddit idea? Already have some planning that went into that (like the Subreddit as topics idea)
- The more specific the topic is, the easier it is to hardcode
- What would UI look like?
  - Reply chain (followed from the Twitter idea), and they respond with a question, you respond with an answer until you get a final response
  - Random person / future self will talk to you, and eventually Dwayne Johnson or something will reply to you going like "Hey that's me" (for the character idea)
- **Seems more like a recommender system now that a fortune telling app**
  - Potential to make it fortune-teller-esque, just need to make sure we don't lean in too hard to the recommender system parts
- Potentially use Reddit to keep up with the new interface (switch from Twitter)
- Prioritize functionality over personalization
- Potential name: `Rebbit - tonight's dinner`, which would bounce off the Reddit UI idea
  - Content of fortune telling is included as well
- Should guide users to ask questions about the future
- User persona should be remade
- Fangyu raises an idea and is suggesting to be put in the doc, everyone else is also encouraged to do so

### Action Items
- By Saturday night, decide on the topic that we want
- By Sunday night, have the preliminary pitch ready to go

Meeting ended at 8:10pm