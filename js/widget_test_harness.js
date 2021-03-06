var widgetTestHarnessInit = function(window, $, websiteUrl) {
    'use strict';

    var syndication, removeWidget, createWidget, update, initialiseToolsDropdown;

    syndication = new window.PartnerMAS.ToolSyndication();

    removeWidget = function() {
        $('.mas-widget-container').remove();
    };

    createWidget = function (toolId, toolWidth, lang) {
        var aElement = '<a id="' + toolId + '" class="mas-widget" target="_blank" lang="'+ lang +'" href="' + websiteUrl + '"';
        if ('' !== toolWidth) {
            aElement += ' data-width="' + toolWidth + '"';
        }
        aElement += '></a>';

        $('.js-test-harness-widget-container').append(aElement);
        syndication.renderWidgets()
        $('#widget_code').text(aElement);
    };

    update = function() {
        $('.settings .page :text').each(function() {
            var container_class = $(this).attr('id').replace('_width', '');
            $('.' + container_class).css('width', $(this).val());
        });
    };

    initialiseToolsDropdown = function() {
        var select = $('.settings .tool #tool_id'),
            sortedKeys = Object.keys(masConfig.toolConfig).sort();

        select.find('option').remove();

        $.each(sortedKeys, function(_, toolId) {
            if ('default' !== toolId) {
                select.append('<option value="' + toolId + '">' + toolId + '</option>');
            }
        });
    };

    $('.settings').on('submit', function(e) {
        var selectedToolId = $(this).find('#tool_id').val(),
            selectedLang = $(this).find('#lang_id').val(),
            toolWidth = $('.settings .tool #tool_width').val();

        e.preventDefault();
        update();
        removeWidget();
        createWidget(selectedToolId, toolWidth, selectedLang);
    });

    $(function() {
        initialiseToolsDropdown();
    });
};
