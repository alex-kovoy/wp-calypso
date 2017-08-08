/**
 * External dependencies
 */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import React from 'react';

/**
 * Internal dependencies
 */
import EmbedDialog from '../index';

describe( 'EmbedDialog', () => {
	it( 'should render when passed an onInsert callback', () => {
		const wrapper = shallow( <EmbedDialog onInsert={ noop } /> );

		expect( wrapper.find( '.embed-dialog' ).length ).to.equal( 1 );

		// can probably get rid of this once add the others
	} );

	// update the state when new input given

	// return the new url to onInsert after updated

	// leave the old url untouched when canceld

	// not let or cause focus to get stolen

	// should test valid vs invalid embed urls? maybe only once get to preview PR

	// update the preview when new url given (other PR)
} );
