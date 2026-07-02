import React, { useEffect } from 'react'
import { fetchGif, fetchPhotos, fetchVideos } from '../api/mediaApi';
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const ResultGrid = () => {

    const dispatch = useDispatch()

  const {query, activeTab, loading, results, error} = useSelector((store) => store.search)

    useEffect(function() {

        const getData = async () => {
        let data
        if(activeTab == 'photos') {
            let response = await fetchPhotos(query)
            data = response.results.map((item) => ({
                id:item.id,
                type:'photo',
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full
            }))            
        }
        if(activeTab == 'videos') {
            let response = await fetchVideos(query)
            data = response.videos.map((item) => ({
                id:item.id,
                type:'videos',
                title:item.video || 'video',
                thumbnail:item.image,
                src:item.video_files[0].link
            })) 
        }
        if(activeTab == 'gif') {
            let response = await fetchGif(query)
            data = response.data.map((item) => ({
                id: item.id,
                type: "gif",
                title: item.title || "GIF",
                thumbnail: item.images.fixed_width.url,
                src: item.images.original.url,
        }));
            
        }
        dispatch(setResults(data))
    }
        getData()
    },[query, activeTab])

  return (
    <div>
    </div>
  )
}

export default ResultGrid
