import React, { useState } from 'react';
import { FaFile, FaFolder } from 'react-icons/fa';
import './FileExplorer.css'; // optional for styling

const filesData = [
  { name: 'File 1.txt', type: 'file' },
  { name: 'File 2.txt', type: 'file' },
  { name: 'Folder 1', type: 'folder' },
  { name: 'File 3.txt', type: 'file' },
  { name: 'Folder 2', type: 'folder' },
];

const FileExplorerNew = () => {
  const [files, setFiles] = useState(filesData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');

  const handleSort = () => {
    const sortedFiles = [...files].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFiles(sortedFiles);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="file-explorer">
      <div className="controls">
        <button onClick={handleSort}>Sort ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})</button>
        <input 
          type="text" 
          placeholder="Filter files" 
          value={filter} 
          onChange={handleFilter} 
        />
      </div>
      <div className="file-list">
        {filteredFiles.map((file, index) => (
          <div key={index} className="file-item">
            {file.type === 'file' ? <FaFile /> : <FaFolder />}
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorerNew;
