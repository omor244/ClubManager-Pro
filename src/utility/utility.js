import axios from "axios"



export const Imageupload = async imagedata => {

    const fromdata = new FormData()
    fromdata.append('image', imagedata)

    const img = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, fromdata)




    return img?.data.data.display_url
}


export const saveorupdateuser = async (userdata) => {

    const { data } = await axios.post('https://clubmanagement-jade.vercel.app/users', userdata)
    
    return data
}