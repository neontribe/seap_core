# Google Analytics strategy and implementation documentaion

- c-app.org.uk (UA-5941566-5)
- esa-assessment.support(UA-5941566-6)
- pip-assessment.support(UA-5941566-7)

## Each site has 4 views:

* All Web Site Data
* Dev stats (traffic from Neontribe offices to any of the sites)
* Public all (all public traffic to the production sites)
* Staging site (all traffic to github pages staging sites)

## Events fired from src/js/seap-analytics.js in this repo

## Percentage values are recorded as whole numbers (e.g. 9% is 9, NOT 0.09)

* **on hashchange** - pageview
* **on anchor click** - event (clicked an anchor link on which page)
  - category:[page slug], action:a-link-click, label:[a link text], value:null
* **on button click** - event (clicked a button on which page)
  - category:[page slug], action:button-click, label:[button text], value:null
* **on open or close of collapsable element** - event (opened or closed info section)
  - category:[page slug], action:expandies-click, label:[clicked text], value:null
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

## Goals set up in google account to track milestone events

INFORMATION ROUTE
 - Goal1 Set1 **Ill informed?** - visit the about (guide) page
 - Goal2 Set1 **Information!** - on the about page, click a link or button label containing the text 'video' or 'info'
 - Goal3 Set1 **More informed now?** - on the about page scroll to waypoint half way down page
 - Goal4 Set1 **Would you like some practise?** - on the about page, click a link or button containing the text 'questions'

PRACTISE ROUTE
 - Goal6 Set2 **Un-practised?** - visit the activities listing page
 - Goal7 Set2 **Practise!** - visit any question slide
 - Goal8 Set2 **More practised now?** - visit the #your-assessment page with more than 0% answered
 - Goal9 Set2 **Would you like some information?** - on the your-assessment page click the read more about button

 - Goal20 Set4 **More Prepared?** - printed assessment, viewed assessment page after seen all or seen all even skipped questions.
