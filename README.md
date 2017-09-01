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


Widget QA
-------------------
Most commonly used environments should already be setup. However if you want to
setup a new environment add a new template to the `qa` directory. 

For example the configuration for `myqa` might look like:

`/qa/myqa.html`

```
---
layout: default
env: myqa
site: 'https://myqa.dev.mas.local'
tools: 'https://mascdn.azureedge.net/frontend-myqa'
partner: 'https://myqa-partner-tools.dev.mas.local'
---
{% include widget-qa.html %}
```
