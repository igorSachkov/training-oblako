import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function ProgressSlider({progress, reduxProgress, setProgress, value, setValue}) {
  const classes = useStyles();
  
  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setProgress(newValue)
  };

  const handleInputChange = (event) => {
    
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        Прогресс
      </Typography>
      <Grid container spacing={2} alignItems="center">
        {/* <Grid item>
          <img src={progressPNG} className="progress-icon"/>
        </Grid> */}
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}