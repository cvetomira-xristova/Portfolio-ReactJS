import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  Drawer,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function NavItem({ href, title, download, icon }) {
  return (
    <div className='pl-4 text-black'>
      {download && (
        <Tooltip title='Clicking will triger a file download. Please make sure your permissions are on.'>
          <a href={href} download='CV - Tsvetomira Hristova.pdf'>
            <Typography>{title}</Typography>
          </a>
        </Tooltip>
      )}

      {!download && (
        <a href={href} color='primary' key={title}>
          <Typography>{title}</Typography>
        </a>
      )}
    </div>
  );
}
