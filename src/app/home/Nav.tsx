import { useMemo } from "react";


interface NavProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Nav = ({activeSection, setActiveSection}:NavProps) => {
    const horizontalLine = useMemo(() => {
        const HorizontalLine = ({ active }: { active: boolean }) => (
          <hr className={`mx-2 ${active ? 'text-teal-50 w-[200px]' : 'text-[#5a545460] w-[100px]'} transition-all duration-300 ease-linear`}></hr>
        );
        HorizontalLine.displayName = 'HorizontalLine';
        return HorizontalLine;
      }, [activeSection]);

    return ( <nav className="hidden md:flex md:flex-col justify-start items-start gap-4 mt-12 px-2">
        <li className={`text-[#eaeaea9d] ${activeSection === 'about-me' && 'text-teal-50'} flex flex-row flex-auto tracking-tight justify-center items-center hover:text-gray-50 cursor-pointer`}
        onClick={() => {
          setActiveSection("about-me");
          const aboutMe = document.getElementById("about-me");
          aboutMe?.scrollIntoView({ behavior: "smooth" });
        }
        }
        >About Me {horizontalLine({ active: activeSection === 'about-me'})}</li>
        <li className={`text-[#eaeaea9d] ${activeSection === 'experiences' && 'text-teal-50'} flex flex-row flex-auto justify-center items-center hover:text-gray-50 cursor-pointer`}
         onClick={() => {
          setActiveSection("experiences");
          const aboutMe = document.getElementById("experiences");
          aboutMe?.scrollIntoView({ behavior: "smooth" });
        }}
        >Experiences
        {horizontalLine({ active: activeSection === 'experiences'})}
        </li>
        <li className={`text-[#eaeaea9d] ${activeSection === 'projects' && 'text-teal-50'} flex flex-row flex-auto justify-center items-center hover:text-gray-50 cursor-pointer`}
         onClick={() => {
          setActiveSection("projects");
          const aboutMe = document.getElementById("projects");
          aboutMe?.scrollIntoView({ behavior: "smooth" });
        }}
        >Projects
        {horizontalLine({ active: activeSection === 'projects'})}
        </li>
        {/* <li className={`text-[#eaeaea9d] ${activeSection === 'contact' && 'text-teal-50'} flex flex-row flex-auto justify-center items-center hover:text-gray-50 cursor-pointer`}
         onClick={() => {
          setActiveSection("contact");
          const aboutMe = document.getElementById("contact");
          aboutMe?.scrollIntoView({ behavior: "smooth" });
        }
        }
        >Contact
        {horizontalLine({ active: activeSection === 'contact'})}
        </li> */}
      </nav>
      )
    }

export default Nav;