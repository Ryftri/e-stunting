import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const FooterComponent = () => (
    <Footer container>
        <Footer.Copyright href="#" by="Rayhan Zulfitri" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/r.e_ray/" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/Ryftri" target="_blank" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/rayhan-zulfitri-dwi-cahyo/" icon={BsLinkedin} />
        </div>
    </Footer>
)
