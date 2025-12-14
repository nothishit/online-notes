import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CloseSquareOutlined, EditOutlined } from "@ant-design/icons";

import { Card, Flex } from "antd";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const NoteCard = ({ id, title, description, setDeleteId }) => {
  const { store } = useContext(Context);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const actions = [
    <Link to={`/online-notes/edit_note/${id}`}>
      <EditOutlined key="edit" />
    </Link>,
    <CloseSquareOutlined
      key="delete"
      onClick={() => store.note_delete(id, setDeleteId)}
      style={{ marginTop: 1, color: isEditHovered ? "crimson" : "inherit" }}
      onMouseEnter={() => setIsEditHovered(true)}
      onMouseLeave={() => setIsEditHovered(false)}
    />,
  ];
  let res_title, res_description;
  if (title.length > 12) {
    res_title = title.slice(0, 12) + "...";
  } else {
    res_title = title;
  }
  if (description.length > 220) {
    res_description = description.slice(0, 221) + "...";
  } else {
    res_description = description;
  }
  return (
    <Flex gap="middle" align="start" className="card" vertical>
      <Card
        actions={actions}
        style={{ width: 300, margin: "auto" }}
        className="border border-white/15 px-2 py-1 rounded outline-0 text-white"
      >
        <Link to={`/online-notes/note/${id}`}>
          <Card.Meta
            style={{ height: 200, fontSize: 24 }}
            title={
              <span style={{ fontSize: 32, fontWeight: 600 }}>{res_title}</span>
            }
            description={
              <>
                <p>{res_description}</p>
              </>
            }
          />
        </Link>
      </Card>
    </Flex>
  );
};
export default observer(NoteCard);
