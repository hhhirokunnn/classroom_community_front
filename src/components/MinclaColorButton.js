import Button from '@material-ui/core/Button';
import { lime } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const MinclaColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#7EC101"),
    backgroundColor: "#7EC101",
    '&:hover': {
      backgroundColor: "#639703",
    },
  },
}))(Button);

export default MinclaColorButton
