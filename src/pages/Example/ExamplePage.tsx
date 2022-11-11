import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import {RootState} from "../../reducers/index";
import { RamenSoup } from "./modules/RamenSoup";



// * 라면 페이지를 만든다 가정
function ExamplePage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div>
            <RamenSoup />
            {/* <RamenNoodle /> */}
                
        </div>
    );
}

export default ExamplePage;