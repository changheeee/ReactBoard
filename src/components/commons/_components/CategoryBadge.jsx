import React from "react";

function CategoryBadge({ category }) {
  const categoryColors = {
    일반: "#999",
    연애: "#F8B7D0",
    결혼: "#99D7F3",
    육아: "#FFC83A",
    가족: "#84DE8D",
    친구: "#99B2F3",
    학교: "#BB99F3",
    회사: "#F39999",
    골라줘: "#89B1FF",
    몇대몇: "#2FB2C4",
    "YES or No": "#C8B7F8",
  };

  const color = categoryColors[category] || "#999";

  const style = {
    width: "fit-content",
    border: `1px solid ${color}`,
    color: color,
    padding: "2px 8px",
    borderRadius: "4px",
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "700",
  };

  return <div style={style}>{category}</div>;
}

export default CategoryBadge;
