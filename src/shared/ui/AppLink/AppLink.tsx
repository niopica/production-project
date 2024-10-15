import { classNames } from 'shared/lib/classNames/classNames';
import {FC} from "react";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}


export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props
  return (
    <Link
        to={to}
        className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
        {...otherProps}
    >
        {children}
    </Link>
  );
}