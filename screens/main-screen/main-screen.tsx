import AboutMeSection from "@/components/about-me-section/about-me";
import AppDescriptionSection from "@/components/app-description-section/app-description-section";
import ContactUsSection from "@/components/contact-us-section/contact-us";
import ScrolledImagesSection from "@/components/scrolled-images-section/scorolled-images";
import SkillsSection from "@/components/skills-section";
import TitleSection from "@/components/title-section/title-section";

export default function MainScreen() {

  return (
    <>
      <TitleSection /><AboutMeSection />
      <div className="flex">
        <AppDescriptionSection />
        <ScrolledImagesSection />
      </div>
      <SkillsSection /><ContactUsSection />
    </>
  );
}
