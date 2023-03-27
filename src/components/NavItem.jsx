import React, { useState } from 'react';
import {
  Typography,
  Button,
  useMediaQuery,
  Collapse,
  List,
  ListItem,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTheme } from '@mui/material/styles';

export default function NavItem({ href, title, classes = '', subItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  const handleClose = () => setAnchorEl(null);
  const handleMouseOver = (event) => setAnchorEl(event.currentTarget);

  const className = `sm:pl-4 text-black ${classes}`;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={className}>
      {!subItems && (
        <a href={href} color='primary' key={title}>
          <Typography>{title}</Typography>
        </a>
      )}

      {subItems && (
        <>
          <Button
            disableRipple
            disableFocusRipple
            disableElevation
            onMouseOver={handleMouseOver}
            onClick={handleClick}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            style={{ color: 'black', padding: 0, verticalAlign: 'top' }} // TODO: Fix the height of this item
          >
            <Typography className='capitalize'>{title}</Typography>
          </Button>

          {isMobile ? (
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List className='ml-6'>
                {subItems.map((item) => (
                  <ListItem divider className='border-slate-200	'>
                    {/* TODO: Add border-color to theme*/}
                    <Typography>
                      <a href={`/work/${item.id}`} key={item.id}>
                        {item.name}
                      </a>
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          ) : (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              transitionDuration={300}
              disableAutoFocusItem
            >
              {subItems.map((item) => (
                <MenuItem onClick={handleClose} key={item.id}>
                  <a href={`/work/${item.id}`}>{item.name}</a>
                </MenuItem>
              ))}
            </Menu>
          )}
        </>
      )}
    </div>
  );
}
