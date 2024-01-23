import React, { useState } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import "./Search.scss";
import Text from "../Common/Text";

const Search = ({ toggle }) => {
  const [closeDialog, setCloseDialog] = useState(true);
  const isToggle = toggle ? { open: toggle } : "";
  const handleClose = () => {
    setCloseDialog(!closeDialog);
  };
  return (
    <dialog className="search" {...isToggle}>
      <div>
        <Input type="search" placeholder="Movie here to search." />
        <Button className="btn-search" ariaLabel="검색" />
      </div>
      <Button className="btn-close" ariaLabel="닫기" onClick={handleClose} />
      <Text
        type="type1"
        text="엔터키를 누르시면 검색이 됩니다. 페이지로 돌아가고 싶으시다면 ESC키 또는 닫기버튼을
        눌러주세요."
      />
    </dialog>
  );
};

export default Search;
