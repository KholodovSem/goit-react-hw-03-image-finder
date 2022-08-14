import Button from '@mui/material/Button';
import style from './Button.module.css';
import PropTypes from 'prop-types';

function Btn({onLoadMore}) {
  return (
    <Button variant='contained' className={style.button} onClick={onLoadMore}>Load More</Button>
  );
}

Btn.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}

export default Btn;

