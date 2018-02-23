/* global Module */

/* Magic Mirror
 * Module: MMM-Alexa-X-GoogleAssistant
 *
 * By Shinichi_kudo https://github.com/Krato5
 * MIT Licensed.
 */

Module.register("MMM-Alexa-X-GoogleAssistant",{

	// Default module config.
	defaults: {
		text: "MMM-Alexa-X-GoogleAssistant!"
	},

	getTemplate: function () {
		return "MMM-Alexa-X-GoogleAssistant.njk"
	},

	getTemplateData: function () {
		return this.config
	}
});
