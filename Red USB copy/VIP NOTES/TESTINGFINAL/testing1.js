// App wrapper component
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
test("shows a commentBox component", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
test("shows a ListBox component", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// CommentBox
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("it has a textarea and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { name: "comment", value: "new comment" }
    });
    wrapped.update();
  });
  it("it has a text area that user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });
  it("when form is submitted, textarea get emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

// CommentList
let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["1", "2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
test("had one li per comment  ", () => {
  expect(wrapped.find("li").length).toEqual(2);
});
test("it contains the text of each component", () => {
  expect(wrapped.render().text()).toContain("1");
  expect(wrapped.render().text()).toContain("2");
});

// Actions
describe("saveComment", () => {
  test("it has correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  test("it has correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});

// reducer
test("it handles action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

test("it handles actions with unknown type", () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
