import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {

    const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map((item)=>{
        return {
            file:item,
            preview:URL.createObjectURL(item),
        }
    }))
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  useEffect(()=>{
      console.log(files);
  },[files])

  return (
    <div 
    {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Solte os arquivos aqui ...</p> :
          <p>Arraste e solte os arquivos ou clique aqui para seleciona-los</p>
      }
    </div>
  )
}

export default MyDropzone;