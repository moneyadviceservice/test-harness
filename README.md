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


Widget QA Setup
-------------------
The test harness uses a set of keys that point to the environment you want to use here:
https://github.com/moneyadviceservice/test-harness/blob/gh-pages/_config.yml#L2-L4

Generally this will follow the pattern below:
```
qa_website_url: 'https://<env>.dev.mas.local'
test_tools_js: 'https://mascdn.azureedge.net/frontend-<env>'
qa_partner_tools_url: 'https://<env>-partner-tools.dev.mas.local'
```

So for instance to point at the `preview` QA environment you would use the following config:
```
qa_website_url: 'http://preview.dev.mas.local'
test_tools_js: 'https://mascdn.azureedge.net/frontend-preview'
qa_partner_tools_url: 'https://preview-partner-tools.dev.mas.local'
```

Helpful Links
-------------
QA Website: https://qa.test.moneyadviceservice.org.uk
QA Partner Tools: https://qa-partner-tools.test.moneyadviceservice.org.uk
