import React from "react";
import TeamMember from "./TeamMember";

function Team(){
    const info=[
        {   id:1,
            nime:"Walter White",
            img:"/img/WalterWhite.jpg",
            pos:"actor",
            phone:"0669638235",
            imail:"benkaida@gmail.com", 
            website:"www.prakingbad.com"},
            {   id:2,
                nime:"Walter White",
                img:"/img/WalterWhite.jpg",
                pos:"actor",
                phone:"0669638235",
                imail:"benkaida@gmail.com", 
                website:"www.prakingbad.com" },
        {   id:3,
            nime:"Walter White",
            img:"/img/WalterWhite.jpg",
            pos:"actor",
            phone:"0669638235",
            imail:"benkaida@gmail.com", 
            website:"www.prakingbad.com"}
    ];
    const members = info.map(member=>
        <TeamMember 
       key={member.id}
       nime={member.nime}
       img={member.img}
       pos={member.pos}
       phone={member.phone}
       imail={member.imail}
       website={member.website}
       />
    );
    return(
        <div className="row">
        {members}
        </div>
    )

}
export default Team;