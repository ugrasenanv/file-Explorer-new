const MockFileStructure = [
    {
      name: "Folder 1",
      type: "folder",
      children: [
        { name: "File 1-1", type: "file" },
        { name: "File 1-2", type: "file" },
        {
          name: "Folder 1-1",
          type: "folder",
          children: [
            { name: "File 1-1-1", type: "file" },
          ],
        },
      ],
    },
    {
      name: "Folder 2",
      type: "folder",
      children: [
        { name: "File 2-1", type: "file" },
      ],
    },
    { name: "File 3", type: "file" },
  ];

  export default MockFileStructure;
