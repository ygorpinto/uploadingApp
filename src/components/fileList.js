import { useContext } from "react"
import { AllContext } from "../context"

const FileList = () => {

    const {
        state,
    } = useContext(AllContext);

    return (
        <div>
            {state.files.map(item => {
                return (
                    <img src={item.preview} alt="dropimg"/>
                )
            })}
        </div>
    )
}

export default FileList;