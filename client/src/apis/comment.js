import endpoint from ".";

export const getAllComments = async () => {
  const { data } = await endpoint.get("/");
  return data;
};

export const createComment = async ({ nickname, text, score }) => {
  const { data } = await endpoint.post("/", { nickname, text, score });
  return data;
};

export const voteUp = async ({ id }) => {
  const { data } = await endpoint.put("/", { id });
  return data;
};
