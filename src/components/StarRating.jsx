import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StarRating = ({ value }) => {
  return (
    <Rating
      value={value}
      precision={1}
      readOnly
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      icon={<StarIcon fontSize="inherit" />}
    />
  );
};

export default StarRating;