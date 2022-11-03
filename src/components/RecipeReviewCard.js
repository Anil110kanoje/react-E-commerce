import * as React from 'react';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoadingButton from '@mui/lab/LoadingButton';

import { useState } from "react";
import BasicRating from "./Rating";
import BasicMenu from './Menu';



export default function RecipeReviewCard({ item, handleClick, key, setProductList, productList, handlePdp }) {
    const { title, description, price, thumbnail, rating } = item;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <Card sx={{ maxWidth: 330, marginRight: 'auto', marginTop: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <>
                        <IconButton
                            aria-label="more"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <BasicMenu open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} item={item} productList={productList} setProductList={setProductList} />
                    </>
                }
                title={title}
                subheader={<BasicRating rating={rating} />}
            />
            <Link to={`productDetails`}>
                <CardMedia
                    component="img"
                    height="180"
                    image={thumbnail}
                    alt="Paella dish"
                    onClick={(e) => handlePdp(e, item)}
                />
            </Link>
            <CardContent>
                <div variant="body2" color="text.primary" sx={{ fontSize: 17, marginBottom: 1 }}>
                    {price + ' ' + 'Rs'}
                </div>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
                <LoadingButton variant="outlined" sx={{ marginTop: "auto" }} fullWidth className="add-to-cart bg-primary text-white" onClick={(e) => handleClick(e, item)}>
                    ADD TO CART
                </LoadingButton>
            </CardActions>
        </Card>
    );
}
