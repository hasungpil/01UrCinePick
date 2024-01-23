import React, { useState } from "react";
import "./Utillity.scss";
import Button from "../Common/Button";
import Search from "../Dialog/Search";

const Utillity = () => {
  const [isDialog, setIsDialog] = useState(false);
  const handleDialog = () => {
    setIsDialog(!isDialog);
  };
  return (
    <>
      <div className="utillity">
        <Button className="btn-search" ariaLabel="검색" onClick={handleDialog} />
        <Button className="btn-insta" ariaLabel="인스타그램" />
        <Button className="btn-facebook" ariaLabel="페이스북" />
        <Button className="btn-watcha" ariaLabel="왓챠피디아" />
      </div>
      <Search toggle={isDialog} />
    </>
  );
};

export default Utillity;
