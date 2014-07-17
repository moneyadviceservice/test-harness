Test harness for testing tools syndication.

Please check the wiki for more info:

https://moneyadviceserviceuk.atlassian.net/wiki/display/DEV/Syndicate+a+tool+for+partners

How do I run the test harness locally?
--------------------------------------

1. `bundle install`
2. Modify `public_website_url` in `_config.yml` to point to your local server
3. Modify `syndicated_tool_request?` to always return true in public_website
4. Run `bundle exec jekyll serve --watch`
