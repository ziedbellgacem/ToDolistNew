export const Add = (des) => {
  return {
    type: "ADD",
    payload: des,
  };
};
export const Done = (id) => {
  return {
    type: "DONE",
    payload: id,
  };
};

export const Delete = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

// export const FilAll = () => {
//   return {
//     type: "FILALL",
//   };
// };

export const done = (status) => {
  return {
    type: "FILTER",
    payload: status,
  };
};

export const edit = (id, text) => {
  return {
    type: "EDIT",
    payload: { id, text },
  };
};

// export const FilInDone = () => {
//   return {
//     type: "FILINDONE",
//   };
// };
