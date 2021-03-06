import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {showHeader: false}
		this.handleScroll = this.handleScroll.bind(this)
	}
	handleScroll = this.throttle((event) => {
		let { scrollTop } = event.srcElement.body
		this.setState({showHeader: scrollTop > 50})
	}, 100)
	throttle(callback, wait, context = this) {
		let timeout = null
		let callbackArgs = null
		const later = () => {
			callback.apply(context, callbackArgs)
			timeout = null
		}
		return function() {
			if (!timeout) {
				callbackArgs = arguments
				timeout = setTimeout(later, wait)
			}
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
  render() {
    return (
	    <header className={'Header' + (this.state.showHeader ? '' : ' alt')}>
		    {this.props.children}
	    </header>
    );
  }
}

export default Header;
