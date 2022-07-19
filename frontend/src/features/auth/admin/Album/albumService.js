import * as api from '../../../../api/admin'

export const getAlbum = async () => {
  const { data } = await api.getAlbum()
  return data
}
const addAlbum = async (AlbumData) => {
  const { data } = await api.addAlbum(AlbumData)

  return data
}
export const editAlbum = async (albumData, albumId) => {
  console.log('Album is Updating')
  const { data } = await api.editAlbum(albumData, albumId)
  console.log('here is the details are to be updated', data)
  return data
}
const deleteAlbum = async (albumId) => {
  const { data } = await api.deleteAlbum(albumId)
  return data
}

const albumService = {
  getAlbum,
  editAlbum,
  addAlbum,
  deleteAlbum,
}
export default albumService
