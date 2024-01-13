export const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [...state, action.value];
    case "update":
      return state.map((blog) => {
        if (blog.id === action.value.id) {
          return action.value.updatedBlog;
        }
        return blog;
      });
    case "delete":
      return state.filter((blog) => blog.id !== action.value);
    case "like":
      return state.map((blog) => {
        if (blog.id === action.value) {
          return { ...blog, liked: !blog.liked, disliked: false };
        }
        return blog;
      });
    case "dislike":
      return state.map((blog) => {
        if (blog.id === action.value) {
          return { ...blog, disliked: !blog.disliked, liked: false };
        }
        return blog;
      });
    case "set":
      return action.value;
    default:
      return state;
  }
};
