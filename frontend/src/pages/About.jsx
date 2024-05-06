import pictureOfMe from '../assets/DSCF0173.png'
import musicPicture1 from '../assets/dan-gold-PKmjFH8dGMU-unsplash.jpg'

export const About = () => {
    return (
        <div className="mx-48 mb-20 mt-10 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-20 md:flex-row">
                <img
                    className="h-[500px]"
                    src={pictureOfMe}
                    alt="personal-picture"
                />
                <div className="flex flex-col items-start text-left">
                    <h1 className="font-bold leading-normal">
                        Ciao! :)
                        <br /> Mi chiamo{' '}
                        <span className="text-red-500">Francesco Coco</span> e
                        sono un architetto!
                    </h1>
                    <p className="pt-10 text-[18pt] leading-relaxed">
                        Nutro diverse passioni da parecchi anni fra cui la
                        musica e la fotografia.
                    </p>
                    <p className="pt-4 text-[18pt] leading-relaxed">
                        Di recente ho sviluppato un forte interesse per lo
                        sviluppo web e per questo motivo ho deciso di
                        intraprendere un corso nella scuola di Epicode.
                    </p>
                </div>
            </div>
            <div className="mt-36 flex flex-col gap-20 md:flex-row">
                <div className="flex flex-col items-start text-left">
                    <h1 className="font-bold">
                        <span className="text-red-500">PlugInLive!</span>{' '}
                        Perché?
                    </h1>
                    <p className="pt-10 text-[18pt]">
                        Nutro diverse passioni da parecchi anni fra cui la
                        musica e la fotografia.
                    </p>
                    <p className="pt-4 text-[18pt]">
                        Di recente ho sviluppato un forte interesse per lo
                        sviluppo web e per questo motivo ho deciso di
                        intraprendere un corso nella scuola di Epicode.
                    </p>
                </div>
                <img
                    className="h-[500px]"
                    src={musicPicture1}
                    alt="personal-picture"
                />
            </div>
        </div>
    )
}
