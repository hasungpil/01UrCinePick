import React from "react";
import "./Utillity.scss";
import Button from "../Common/Button";

const Utillity = () => {
  return (
    <div className="utillity">
      <Button className="btn-search" ariaLabel="검색" />
      <Button className="btn-insta" ariaLabel="인스타그램" />
      <Button className="btn-facebook" ariaLabel="페이스북" />
      <Button className="btn-watcha" ariaLabel="왓챠피디아" />
    </div>
  );
};

export default Utillity;
