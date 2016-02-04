# Google Analytics strategy and implementation documentaion

c-app.org.uk (UA-5941566-5)
esa-assessment.support(UA-5941566-6)
pip-assessment.support(UA-5941566-7)

## Each site has 4 views:

* All Web Site Data
* Dev stats (traffic from Neontribe offices to any of the sites)
* Public all (all public traffic to the production sites)
* Staging site (all traffic to github pages staging sites)

## Events fired from src/js/seap-analytics.js in this repo

## Percentage values are recorded as whole numbers (e.g. 9% is 9, NOT 0.09)

* **on hashchange** - pageview
* **on anchor click** - event category:[page slug], action:a-link-cick, label:[a link text], value:null
* **on button click** - event category:[page slug], action:button-cick, label:[button text], value:null
* **on open or close of collapsable element** - event category:[page slug], action:expandies-cick, label:[clicked text], value:null
* **on visit to #your-assessment page** (percent of questions seen and skipped, percent of all questions answered)
  - event category:#your-assessment, action:question-progress, label:percent skipped, [% of skipped questions]
  -event category:#your-assessment, action:question-progress, label:percent answered, [% of questions answered]

