import React, {useCallback, useContext, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import api from '../api';
import { AllContext } from '../context'

function MyDropzone() {

    const {
        state,
        dispatch
    } = useContext(AllContext);

  const onDrop = useCallback(acceptedFiles => {
    dispatch({
        type:"setFiles",
        payload:acceptedFiles.map((item)=>{
            return {
                file:item,
                preview:URL.createObjectURL(item),
            }
        })
    })
   
  }, [dispatch])
  
  useEffect(()=>{
      if (state.files !== []) {
          state.files.forEach((item)=>{
              handleUpload(item)
          })
      }
  },[state.files])

  const handleUpload = (file) => {
    const data = new FormData();
    data.append('file',file.file)
    api.post('/images',data)
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


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