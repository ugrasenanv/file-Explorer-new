import React, { useState, useEffect } from 'react';

const mockFiles = [
  { name: 'file1.txt', size: 1024, date: '2024-01-01' },
  { name: 'file2.txt', size: 2048, date: '2024-02-01' },
  { name: 'folder1', size: 0, date: '2024-03-01', isDirectory: true },
  // Add more mock files/folders here
];

const FileBrowser = () => {
  const [files, setFiles] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');
  const [sortCriteria, setSortCriteria] = useState('name');
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    // Fetch files for the current path (use mock data here)
    setFiles(mockFiles);
  }, [currentPath]);

  const openFolder = (folderName) => {
    setCurrentPath(currentPath + folderName + '/');
  };

  const sortFiles = (files, criteria) => {
    return [...files].sort((a, b) => {
      if (criteria === 'name') return a.name.localeCompare(b.name);
      if (criteria === 'size') return a.size - b.size;
      if (criteria === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const sortedFiles = sortFiles(filteredFiles, sortCriteria);

  return (
    <div>
      <h1>File Browser</h1>
      <div>
        <label>
          Sort by:
          <select onChange={e => setSortCriteria(e.target.value)}>
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="date">Date</option>
          </select>
        </label>
        <label>
          Filter by name:
          <input
            type="text"
            value={filterQuery}
            onChange={e => setFilterQuery(e.target.value)}
          />
        </label>
      </div>
      <ul>
        {sortedFiles.map(file => (
          <li key={file.name}>
            {file.isDirectory ? (
              <button onClick={() => openFolder(file.name)}>
                {file.name}/
              </button>
            ) : (
              <span>{file.name}</span>
            )}
            <span> - {file.size} bytes - {file.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileBrowser;
