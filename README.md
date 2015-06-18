Test harness for testing tools syndication.

Please check the wiki for more info:

https://moneyadviceserviceuk.atlassian.net/wiki/display/DEV/Syndicate+a+tool+for+partners

How do I run the test harness locally?
--------------------------------------

1. `bundle install`
2. Modify `public_website_url` in `_config.yml` to point to your local server and set `development` to `true`
3. Modify `syndicated_tool_request?` in app/controllers/application_controller
to always return `true` in public_website or responsive_site
4. Run `bundle exec jekyll serve --watch`

How do I deploy syndicated tools to Test Harness?
-------------------------------------------------

1. Merge feature branch with master branch 'gh-pages'
NB: TestHarness is hosted on Github Pages
here(http://moneyadviceservice.github.io/test-harness/index.html). Any updates
to the gh-pages are automatically deployed by webhooks. So there's no need to do
anything else.

How do I deploy syndicated tools to QA environment after Puppet Changes?
------------------------------------------------------------------------

1 Make your changes to the script repository
here(https://github.com/moneyadviceservice/scripts)
2. Build the 'puppet_commit' pipeline on the Go server
3. Once the 'puppet_commit' pipeline build is complete, your are good to
deploy to the QA environment using Go.
