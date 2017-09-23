/**
 * External dependencies
 */
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { spy } from 'sinon';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import { RemoveButton } from '../index';

describe( 'Remove Button', function() {
	it( 'should render the button if a remove callback is provided', () => {
		const wrapper = shallow( <RemoveButton onRemove={ noop } /> );

		expect( wrapper ).to.have.className( 'remove-button' );
		expect( wrapper.find( '.remove-button' ).length ).to.equal( 1 );
	} );

	it( 'should return early if no callback provided', () => {
		const wrapper = shallow( <RemoveButton /> );

		expect( wrapper.find( '.remove-button' ).length ).to.equal( 0 );
	} );

	it( 'should call the provided callback', () => {
		const onRemove = spy();
		const wrapper = shallow( <RemoveButton onRemove={ onRemove } /> );

		wrapper.find( Button ).simulate( 'click' );
		expect( onRemove.calledOnce ).to.equal( true );
	} );
} );
