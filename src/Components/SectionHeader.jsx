import { title_img } from "../assets/Images";

export default function SectionHeader(title, desc) {
    return(
        <div className="flex flex-col items-center gap-1 lg:gap-3 lg:py-3">
            <h2
              className="text-highlight font-extrabold text-2xl md:text-5xl font-calligraffitti"
              data-aos="fade-down"
            >
              {title}
            </h2>
            <p className="text-primary text-base md:text-2xl font-Caveat">
              {desc}
            </p>
            <img src={title_img} alt="" />
          </div>
    )
}
