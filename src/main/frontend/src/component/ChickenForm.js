import React, { useState } from "react";
import axios from "axios";
import "../css/ChickenForm.css";

const ChickenForm = () => {
  const [chickenName, setChickenName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const chickenData = {
    chickenName,
    description,
    price,
  };

  const handleSubmit = () => {
    axios
      .post("/api/chicken", chickenData)
      .then((response) => {
        alert("메뉴가 성공적으로 등록되었습니다.");
      })
      .catch((e) => {
        console.error("메뉴 등록에 실패했습니다:", e);
        alert("메뉴 등록에 실패했습니다.");
      });
  };

  return (
    <div className="chickenform-container">
      <label>
        메뉴 이름:
        <input
          type="text"
          value={chickenName}
          onChange={(e) => setChickenName(e.target.value)}
        />
      </label>
      <label>
        메뉴 설명:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        가격:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>등록하기</button>
    </div>
  );
};

export default ChickenForm;
