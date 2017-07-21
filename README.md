Test harness for testing tools syndication.

Please check the wiki for more info:

https://maswiki.valiantyscloud.net/display/DEV/Syndicate+a+tool+for+partners

How do I run the test harness locally?
--------------------------------------

1. `bundle install`
2. Modify `public_website_url` in `_config.yml` to point to your local server
running the responsive public website and set `development` to `true`
3. Modify `syndicated_tool_request?` in app/controllers/application_controller
to always return `true` in public_website or responsive_site
4. Run `bundle exec jekyll serve --watch`

In order to test the partner tools in the test environment, the test harness uses a key
in that you can point to any partner tools test you want to point it to. 
You can change the partner tools here: https://github.com/moneyadviceservice/test-harness/blob/gh-pages/_config.yml#L4

Helpful Links
-------------
QA Website: https://qa.test.moneyadviceservice.org.uk
QA Partner Tools: https://qa-partner-tools.test.moneyadviceservice.org.uk
