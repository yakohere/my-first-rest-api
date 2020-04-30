exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "My cat",
        content: "This is Tom, he likes Jerry!",
        imageUrl: "images/cat.jpg",
        creator: {
          name: "Yako",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Post created!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Umar" },
      createdAt: new Date(),
    },
  });
};
