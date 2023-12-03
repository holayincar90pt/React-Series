import React from "react";
import { useState } from "react";

const Content = () => {
  const [lists, setlists] = useState([
    {
      id: 1,
      checked: false,
      list: "first Item",
    },
    {
      id: 2,
      checked: false,
      list: "second Item",
    },
    {
      id: 3,
      checked: false,
      list: "last item",
    },
  ]);

  const checkHandler = (id) => {
    console.log(id);
    const listItems = lists.map((listitem) =>
      listitem.id === id
        ? { ...listitem, checked: !listitem.checked }
        : listitem
    );
    setlists(listItems);
    window.localStorage.setItem("checklist", JSON.stringify(listItems));
  };

  const deleteHandler = (id) => {
    console.log(id);
    const newlists = lists.filter((newlist) => newlist.id !== id);
    setlists(newlists);
  };

  return (
    <main>
      <ul>
        {lists.map((list) => (
          <li className="list" key={list.id}>
            <div>
              <input
                type="checkbox"
                onChange={() => checkHandler(list.id)}
                checked={list.checked}
              />
              <label
                style={list.checked ? { textDecoration: "line-through" } : null}
                htmlFor="list"
                onDoubleClick={() => checkHandler(list.id)}
              >
                {list.list}
              </label>
            </div>
            <button onClick={() => deleteHandler(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
