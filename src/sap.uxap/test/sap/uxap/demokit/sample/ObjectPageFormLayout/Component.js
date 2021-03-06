sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.uxap.sample.ObjectPageFormLayout.Component", {

		metadata: {
			rootView: {
				"viewName": "sap.uxap.sample.ObjectPageFormLayout.ObjectPageFormLayout",
				"type": "XML",
				"async": true
			},
			dependencies: {
				libs: [
					"sap.m"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"ObjectPageFormLayout.view.xml",
						"ObjectPageFormLayout.controller.js",
						"block/personal/PersonalFormBlock.js",
						"block/personal/PersonalFormBlock.view.xml",
						"block/blockscolor/BlockBlue.js",
						"block/blockscolor/BlockBlue.view.xml",
						"block/employment/BlockJobInfo.js",
						"block/employment/BlockJobInfo.view.xml"
					]
				}
			}
		}
	});
	return Component;
}, true);
