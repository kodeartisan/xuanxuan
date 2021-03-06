import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HTML from '../utils/html-helper';
import Icon from './icon';

class Avatar extends Component {

    render() {
        let {
            image,
            icon,
            label,
            size,
            iconSize,
            className,
            iconClassName,
            children,
            style,
            ...other
        } = this.props;

        if(size) {
            style = Object.assign({}, style);
            style.width = HTML.rem(size);
            style.height = style.width;

            if(!iconSize) {
                iconSize = Math.floor(size * 0.5);
            }
        }

        return <div className={HTML.classes('avatar', className)} {...other} style={style}>
            {image && <img src={image}/>}
            {!image && icon && <Icon className={iconClassName} name={icon} size={iconSize}/>}
            {!image && !icon && label}
            {children}
        </div>;
    }
}

export default Avatar;
