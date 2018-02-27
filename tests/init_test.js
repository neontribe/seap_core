(function() {
  var url;

  url = 'http://localhost:9001/capp_portal';

  casper.test.begin('Title page', 7, function(test) {
    return casper.start(url, function() {
      test.comment(this.getCurrentUrl());
      test.assertHttpStatus(200, 'c-App is up');
      test.assertTitle('c-App', 'c-App index page title is the one expected');
      test.assertElementCount('header nav li a', 2, '2 header menu links');
      test.assertElementCount('.wrapper a button', 2, '2 buttons in view');
      test.assertExists('footer .social-profile-buttons', 'Social buttons in footer');
      test.assertExists('footer .winner', 'Award winner image in footer');
      return test.assertExists('footer div div a', 3, 'footer contains 3 sponsor links');
    }).run(function() {
      return test.done();
    });
  });

}).call(this);
