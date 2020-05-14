import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const MinclaColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default MinclaColorButton
