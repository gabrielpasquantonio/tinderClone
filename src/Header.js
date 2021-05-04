import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import {Link, useHistory} from "react-router-dom"

function Header({backButton}) {
  const history = useHistory();
  return (
    //BEM
    <div className="header">
      {/*if we pass a backbutton prop inside tag header in app.js, we render an arrowbackicon.otherwise we render person icon*/}
      {backButton ? (
         <IconButton onClick={()=> history.replace(backButton)}> 
        <ArrowBackIosIcon fontSize="large" ClassName="header__icon"/>
        </IconButton>
      ) : (
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      )}

      <Link to="/"> 
      <img
        className="header__logo"
        src="https://lh3.googleusercontent.com/proxy/68PZqNG0Mko9rszF_Ps6W30ji8Shd1OXKhe81RlRXS_qcbDeMDKUHm0qunWApjz1mPTzcMo1cwpkt3bZOJGBDGnZtWJky3oPiPJ08HxBql0TTTJNlV70IUdFwAnpnaCviRmI_GfupjPQwSGV5vwRrWDP"
        alt="tinder logo"
      />
      </Link>
      <Link to="/chat">     
      <IconButton>
      <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
      </Link>

    </div>
  );
}

export default Header;
