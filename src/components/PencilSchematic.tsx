export function PencilSchematic() {
  return (
    <div className="w-full flex items-center justify-center">
      <video
        src="/home_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto max-h-[460px] rounded-2xl object-cover"
      />
    </div>
  )
}

export default PencilSchematic
