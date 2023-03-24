import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NavItem({
  href,
  title,
  download,
  classes = '',
  children,
}) {
  const className = `pl-4 text-black ${classes}`;
  console.log('children::: ', children);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      {download && (
        <Tooltip
          arrow
          title='Clicking will triger a file download. Please make sure your browser permissions allow downloads.'
        >
          <a href={href} download='CV - Tsvetomira Hristova.pdf'>
            <Typography>{title}</Typography>
          </a>
        </Tooltip>
      )}

      {!download && !children && (
        <a href={href} color='primary' key={title}>
          <Typography>{title}</Typography>
        </a>
      )}

      {children && (
        <>
          <Button
            disableRipple
            disableFocusRipple
            disableElevation
            onClick={handleClick}
            onMouseOver={handleClick}
            endIcon={<ExpandMoreIcon />}
            style={{ color: 'black', padding: 0, verticalAlign: 'top' }} // TODO: Fix the height of this item
          >
            <Typography className='capitalize'>{title}</Typography>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            transitionDuration={300}
          >
            {children.map((child) => (
              <a href={`/work/${child.id}`}>
                <MenuItem onClick={handleClose} href={href}>
                  {' '}
                  {child.name}
                </MenuItem>
              </a>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
}
