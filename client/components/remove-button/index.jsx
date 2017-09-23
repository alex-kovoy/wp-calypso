/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, identity } from 'lodash';
import Gridicon from 'gridicons';
import { localize } from 'i18n-calypso';

// todo create issue to incorporate other variants in future? or are they different enough to justify being separate?
	// client/post-editor/media-modal/gallery/remove-button.jsx
	// client/components/tinymce/plugins/contact-form/dialog/field-remove-button.jsx

/**
 * Internal dependencies
 */
import Button from 'components/button';

// this breaks in browser though? or my local build is just broken?

export class RemoveButton extends Component {
	static propTypes = {
		onRemove: PropTypes.func,
		translate: PropTypes.func,
	};

	static defaultProps = {
		onRemove: noop,
		translate: identity,
	};

	render() {
		const { onRemove, translate } = this.props;

		if ( ! onRemove ) {
			return;
			// why is this needed? just make it required? make sure doesn't mess up the old usage of it though
		}

		return (
			<Button
				onClick={ onRemove }
				compact
				className="remove-button"
			>
				<span className="remove-button__label screen-reader-text">
					{ translate( 'Remove' ) }
				</span>

				<Gridicon
					icon="cross"
					size={ 24 }
					className="remove-button__icon"
				/>
			</Button>
		);
	}
}

export default localize( RemoveButton );
