import React from "react";

function TeamMember(props){

    return(
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="card-header">
                    <img style={{maxWidth:'90%'}} src={props.info.img}/>
                </div>
                <div className="card-body" style={{backgroundColor:props.info.website? `whate`:'black'}}>
                    <h5>{props.info.nime}</h5>
                    <h5>{props.info.pos}</h5>
                    <h5>{props.info.phone}</h5>
                    <h5>{props.info.imail}</h5>
                    <h5>{props.info.website}</h5>
                </div>
            </div>
            
        </div>
    )
}
export default TeamMember;