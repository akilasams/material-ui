import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('You Clicked Me')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* Icons
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon color='secondary' fontSize='small' />
      <AcUnitOutlinedIcon color='action' fontSize='small' />
      <AcUnitOutlinedIcon color='error' fontSize='small' />
      <AcUnitOutlinedIcon color='disabled' fontSize='small' /> */}

      {/* <Button type='submit'>Submit</Button>
      <Button type='submit' variant='outlined' color='secondary'>
        Submit
      </Button>

      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
}
