import React from "react";
import "../App.css";

function BBsWrite() {
  return (
    <div className="main_write">
      <div>
        <input name="b_writer" placeholder="작성자" />
      </div>
      <div>
        <input name="b_subject" placeholder="제목" />
      </div>
      <div>
        <input name="b_content" placeholder="내용" />
      </div>
      <div>
        <button className="btn_save">저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
