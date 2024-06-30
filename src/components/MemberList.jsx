import React, { useContext } from "react";
import { MyContext } from "../context/Mycontext";

export default function MemberList() {
  const { allMembers, setLoggedIn } = useContext(MyContext);
  return (
    <>
      {allMembers.map((member) => (
        <div key={member.id} className="card">
          <h4 className="label">
            Name :{" "}
            <span>
              {member.firstName} {member.firstName}
            </span>{" "}
          </h4>
          <h4 className="label">
            Club : <span>{member.club}</span>
          </h4>
          <h4 className="label">
            ID : <span>{member.memberId}</span>
          </h4>
        </div>
      ))}
      {allMembers.length === 0 && <p>No members found</p>}
      <div className="logout">
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      </div>
    </>
  );
}
