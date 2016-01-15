# Check site is serving
# Check title is c-App 
# Check count 2 menu links in main nav (ESA, PIP)
# Check count 2 option buttons - (Help preparing for ESA, Help preparing for PIP)
# Check for footer social links, logos

url = 'http://localhost:9001/capp_portal'

casper.test.begin 'Title page', 6, (test)->
  casper
    .start url, ->
      test.comment @getCurrentUrl()
      test.assertHttpStatus 200, 'c-App is up'
      test.assertTitle 'c-App', 'c-App index page title is the one expected'
      # 2 Menu links in header
      test.assertElementCount 'header nav li a', 2, '2 header menu links'
      # 2 buttons
      test.assertElementCount '.wrapper a button', 2, '2 buttons in view'
      test.assertExists 'footer .social-profile-buttons', 'Social buttons in footer'
      test.assertExists 'footer p a', 3, 'footer contains 3 sponsor links'
    .run ->
      test.done()
