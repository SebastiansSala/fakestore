const Video = () => {
  return (
    <div className='aspect-video mt-10'>
      <iframe
        className='w-full mx-auto h-full rounded-3xl'
        src='https://www.youtube.com/embed/OaVsCM0Zeio'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
