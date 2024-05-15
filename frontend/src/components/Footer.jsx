export const Footer = () => {
    return (
        <>
            <footer className="fixed bottom-0 left-0 z-20 flex h-[50px] w-full items-center justify-between border-t border-gray-200 bg-white p-6">
                <span className="ps-4 text-sm text-gray-500 dark:text-gray-400 sm:text-center">
                    © 2024 PlugInLive. All Rights Reserved.
                </span>
                <ul className="mt-3 flex flex-wrap items-center text-base font-medium">
                    <li>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/francesco___coco/"
                            className="me-2 text-gray-500 hover:text-red-500"
                        >
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/fraco92"
                            className="me-2 text-gray-500 hover:text-red-500"
                        >
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://linkedin.com/in/coco-francesco"
                            className="me-2 text-gray-500 hover:text-red-500"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}
