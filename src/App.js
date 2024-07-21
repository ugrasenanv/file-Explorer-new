
import React from 'react';
import FileExplorerNew from './components/FileExplorerNew';

function App() {
  return (
    <div className="App">
      <FileExplorerNew />
    </div>
  );
}

export default App;

// import React from 'react';
// // import FileBrowser from './FileBrowser';
// import FileBrowser from './components/ FileBrowser';
// import MockFileStructure from './components/MockFileStructure';


// const App = () => {
//   return (
//     <div>
//       <FileBrowser />
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// // import MockFileStructure from './MockFileStructure';
// import MockFileStructure from './components/MockFileStructure';

//    const File = ({ name }) => (
//      <div className="file">
//        📄 {name}
//      </div>
//    );

//    const Folder = ({ name, children }) => {
//      const [isOpen, setIsOpen] = useState(false);

//      const toggleFolder = () => {
//        setIsOpen(!isOpen);
//      };

//      return (
//        <div className="folder">
//          <div onClick={toggleFolder}>
//            {isOpen ? '📂' : '📁'} {name}
//          </div>
//          {isOpen && (
//            <div className="folder-content">
//              {children}
//            </div>
//          )}
//        </div>
//      );
//    };

//    const FileExplorer = ({ structure }) => {
//      return (
//        <div className="file-explorer">
//          {structure.map((item, index) => (
//            item.type === 'file' ? (
//              <File key={index} name={item.name} />
//            ) : (
//              <Folder key={index} name={item.name} children={<FileExplorer structure={item.children} />} />
//            )
//          ))}
//        </div>
//      );
//    };

//    const App = () => {
//      return (
//        <div className="App">
//          <h1>File Explorer</h1>
//          <FileExplorer structure={MockFileStructure} />
//        </div>
//      );
//    };

//    export default App;

// import React from "react";
// import "./style.css";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
