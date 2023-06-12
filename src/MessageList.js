import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import ShareBnBApi from "./api";
import SearchForm from "./SearchForm";
import MessageCard from "./MessageCard";

function MessageList({ messages, type }) {

  return (
    <div className="background">
      {messages &&
        messages.map((m) => (
          <MessageCard key={m.id} message={m} type={type} />
        ))}
    </div>
  );
}

export default MessageList;
