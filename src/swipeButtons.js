import React from 'react';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton"
import "./SwipeButtons.css"


function swipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontsize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
            <CloseIcon fontsize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
            <StarRateIcon fontsize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
            <FavoriteIcon fontsize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontsize="Large"/>
            </IconButton>
        </div>
    )
}

export default swipeButtons

