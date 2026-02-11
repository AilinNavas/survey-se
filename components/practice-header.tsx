import Image from "next/image"

interface PracticeHeaderProps {
  showLocation?: boolean
  className?: string
}

export default function PracticeHeader({ className = "" }: PracticeHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
        <Image
          src="/images/southside-logo.jpg"
          alt="Southside Endodontics - Neal Horn DDS MS"
          width={400}
          height={120}
          className="h-24 xl:h-28 w-auto object-contain max-w-full "
          priority
        />
      </div>
  
    </div>
  )
}
