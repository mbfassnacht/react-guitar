import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './fret.scss';

export default class Fret extends Component {
    static propTypes = {
        dots: PropTypes.number,
        width: PropTypes.number.isRequired,
    };

    static defaultProps = {
        dots: 0,
    };

    renderDots() {
        const dots = [];

        for (let i = 0; i < this.props.dots; i++) {
            dots.push(<div key={`${i}-dot`} className="dot" />);
        }

        return(
            <div className={`dots ${this.props.dots > 1 ? 'two' : 'one'}`}>
                {
                    dots
                }
            </div>
        );
    }

    render() {
        return (
            <div
                className='b-fret'
                style={{width: `${this.props.width}%`}}
            >
                {this.props.dots > 0 && this.renderDots()}
            </div>
        );
    }
}
