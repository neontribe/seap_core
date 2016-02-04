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
* **on anchor click** - event (clicked an anchor link on which page)
  - category:[page slug], action:a-link-cick, label:[a link text], value:null
* **on button click** - event (clicked a button on which page)
  - category:[page slug], action:button-cick, label:[button text], value:null
* **on open or close of collapsable element** - event (opened or closed info section)
  - category:[page slug], action:expandies-cick, label:[clicked text], value:null
* **on visit to #your-assessment page** - events (percent of questions seen and skipped, percent of all questions answered)
  - category:#your-assessment, action:question-progress, label:percent skipped, [value:% of skipped questions]
  - category:#your-assessment, action:question-progress, label:percent answered, value:[% of questions answered]
* **on print or view assessement button click** - event (printed your assessment)
  - category:#your-assessment, action:more-prepared:print-button-click, label:percent answered, value:[% of questions answered]
* **on click #your-assessment from #seen-all** - event (view assessment after seen all questions)
  - category:#seen-all, action:more-prepared:assessment-button-click, label:percent answered, value:[% of questions answered]
* **on click #your-assessment from #seen-all-even-skipped** - event (viewed assessment from #seen-all-even-skipped)
  - category:#seen-all-even-skipped-prepared:assessment-button-click, label:percent answered, value:100
* **on guide page scroll to half-way** - event (scrolled half way down the info sections on the #about page)
  - category:#about-[site acronym], action:reached-waypoint, label:id#looks-at, value:null


