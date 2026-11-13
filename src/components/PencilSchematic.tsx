import { useRef, useState } from 'react'
import {
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react'

export function PencilSchematic() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const next = !isMuted
    videoRef.current.muted = next
    setIsMuted(next)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center select-none">
      {/* Ambient glowing gradient behind the video card */}
      <div className="relative w-full max-w-[700px]">
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#6336C5]/20 via-purple-500/10 to-[#0284C7]/15 rounded-[28px] blur-xl opacity-75 -z-10 pointer-events-none" />

        {/* Video Card Container */}
        <div
          ref={containerRef}
          className="w-full bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] relative overflow-hidden group"
        >
          {/* Subtle architectural grid watermark */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Browser / Studio Chrome Bar */}
          <div className="flex items-center justify-between px-2 pb-2.5 pt-1 border-b border-slate-100">
            {/* macOS-style Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80 border border-red-500/30" />
              <span className="size-2.5 rounded-full bg-amber-400/80 border border-amber-500/30" />
              <span className="size-2.5 rounded-full bg-emerald-400/80 border border-emerald-500/30" />
            </div>

            {/* Address / Route Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-600">
              <span className="size-1.5 rounded-full bg-[#6336C5]" />
              <span>arixpro.studio/overview.mp4</span>
            </div>

            {/* Status Live Badge */}
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="font-mono text-[10.5px] font-semibold text-[#059669] hidden sm:inline">
                LIVE DEMO
              </span>
            </div>
          </div>

          {/* Video Player Box */}
          <div className="relative mt-2.5 aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950">
            <video
              ref={videoRef}
              src="/home_video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Overlay Gradient on Hover */}
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none cursor-pointer"
            />

            {/* Floating Quick Action Buttons */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-20">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
                className="size-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="size-3.5 fill-white" />
                ) : (
                  <Play className="size-3.5 fill-white ml-0.5" />
                )}
              </button>

              {/* Mute / Unmute Toggle */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 text-[11px] font-mono transition-transform hover:scale-105 active:scale-95 shadow-sm"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="size-3.5 text-white/80" />
                    <span className="hidden sm:inline text-white/90">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="size-3.5 text-[#059669]" />
                    <span className="hidden sm:inline text-[#059669] font-semibold">Audio On</span>
                  </>
                )}
              </button>

              {/* Fullscreen Toggle */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFullscreen()
                }}
                className="size-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 hidden sm:flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? (
                  <Minimize2 className="size-3.5 text-white" />
                ) : (
                  <Maximize2 className="size-3.5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Clean Subtitle & Telemetry Bar Below Video */}
          <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11.5px] text-slate-600 gap-2 px-1">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#6336C5]" />
              <span className="font-sans font-semibold text-slate-900">
                Custom Web Applications &amp; Scalable APIs
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-slate-500">React 19 · Python · PostgreSQL</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-[#059669] font-medium hidden sm:inline">
                Shipped to Production
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PencilSchematic
