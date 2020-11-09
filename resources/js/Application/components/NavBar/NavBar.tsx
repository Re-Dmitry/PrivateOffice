import React from 'react';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useTheme } from '@material-ui/core/styles';
import { AppBar, Badge, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';

import useStyles from './includes/style';
import { NavLink } from 'react-router-dom';
import INavbarProps from '../../interfaces/INavbarProps';

const NavBar: React.FC<INavbarProps> = (props: any) => {
	const classes = useStyles();
	const theme = useTheme();
	//меню при клике на аватарку

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
		</Menu>
	);

	return (
		<>
			<AppBar
				position="static"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: props.open,
				})}
			>
				<Toolbar>
					<IconButton
						onClick={props.handleDrawer}
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						IATU
                    </Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="secondary">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton aria-label="show 17 new notifications" color="inherit">
							<Badge badgeContent={17} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={props.open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={props.handleDrawer}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
								<ChevronRightIcon />
							)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{[{ 'title': "Articles", 'url': '/' }, { 'title': "Products", 'url': '/products' }].map((value, index) => (
						<ListItem button key={index}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<NavLink to={value.url}>
								<ListItemText primary={value.title} />
							</NavLink>
						</ListItem>
					))}
				</List>
			</Drawer>
			{renderMenu}
		</>
	)
}

export default NavBar;