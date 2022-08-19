import VideoContext from "context/VideoContext"
import { useContext } from "react"


export const useVideo = () =>{
    return useContext(VideoContext)
}