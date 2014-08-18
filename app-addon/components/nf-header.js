import Ember from 'ember';

/**
	Templating component for `nf-table`. Should always be contained in an `nf-column` component.
	@namespace components
	@class nf-header
	@extends Ember.Component
*/
export default Ember.Component.extend({
	tagName: 'th',

	/**
		The number of columns for the output header to span
		@property colspan
		@type Number
		@default 1
	*/
	colspan: 1,

	_setup: function(){
		var column = this.nearestWithProperty('isDataTableColumn');
		this.set('column', column);
		column.set('header', this);
	}.on('init'),

	renderToBuffer: function() {
		//overridden
	},
});