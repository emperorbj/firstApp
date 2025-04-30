import api from "./axios"

export const fetchVideos = async ()=> {
    // const response = await api.get('/api/videos?latest=new')
    // return response.data
    // Fetch new videos
  const newVideosResponse = await api.get('/api/videos?latest=new');
  // Fetch old videos (assuming backend supports latest=old)
  const oldVideosResponse = await api.get('/api/videos?latest=old');

  return {
    newVideos: newVideosResponse.data.videos,
    oldVideos: oldVideosResponse.data.videos,
  };
}