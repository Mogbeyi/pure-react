import React from 'react';
import FileListItem from './FileListItem'
import PropTypes from 'prop-types';

const FileList = ({ files }) => (
    <table className="file-list">
      <tbody>
        {files.map((file) => (
          <FileListItem file={file} key={file.id} />
        ))}
      </tbody>
    </table>
  );
  
  FileList.propTypes = {
    files: PropTypes.array,
  };

  export default FileList;