import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SellIcon from '@mui/icons-material/Sell'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import { Link } from 'react-router-dom'

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1)
  }
}))

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Cadastrar
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to="/#">
          <MenuItem disableRipple>
            <SellIcon />
            Venda
          </MenuItem>
        </Link>
        <Link to="/createLivro">
          <MenuItem disableRipple>
            <ChangeCircleIcon />
            Troca
          </MenuItem>
        </Link>
        <Link to="/createLivro">
          <MenuItem disableRipple>
            <VolunteerActivismIcon />
            Doação
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  )
}
