var widgetTestHarnessInit = function(window, $, websiteUrl) {
    'use strict';

    var syndication, removeWidget, createWidget, update, initialiseToolsDropdown;
    var currentToolId, currentToolWidth;

    syndication = new window.PartnerMAS.ToolSyndication();

    removeWidget = function() {
        $('.mas-widget-container').remove();
    };

    createWidget = function (toolId, toolWidth) {
        var aElement = '<a id="' + toolId + '" class="mas-widget" target="_blank" href="' + websiteUrl + '"';
        if ('' !== toolWidth) {
            aElement += ' data-width="' + toolWidth + '"';
        }
        aElement += '></a>';

        $('.left').append(aElement);
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
        var select = $('.settings .tool #tool_id');
        select.find('option').remove();
        $.each(masConfig.toolConfig, function(toolId, toolConfig) {
            if ('default' !== toolId) {
                select.append('<option value="' + toolId + '">' + toolId + '</option>');
            }
        });
    };

    $('.settings').on('submit', function(e) {
        var selectedToolId = $(this).find('#tool_id').val(),
            toolWidth = $('.settings .tool #tool_width').val();

        e.preventDefault();

        update();

        if ((selectedToolId !== currentToolId) ||
            (toolWidth !== currentToolWidth)) {
            currentToolId = selectedToolId;
            currentToolWidth = toolWidth;

            removeWidget();
            createWidget(selectedToolId, toolWidth);
        }
    });

    $(function() {
        initialiseToolsDropdown();
    });
};
