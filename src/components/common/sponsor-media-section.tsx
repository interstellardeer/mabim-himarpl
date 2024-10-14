import Image, { type StaticImageData } from "next/image";

import LogoAlloBank from "@/assets/sponsors/LogoAlloBank.png";
import LogoDicoding from "@/assets/sponsors/LogoDicoding.png";
import LogoKahf from "@/assets/sponsors/LogoKahf.png";
import LogoMenyala from "@/assets/sponsors/LogoMenyala.png";
import LogoRuru from "@/assets/sponsors/LogoRuru.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "PT Dicoding Akademi Indonesia",
    logo: LogoDicoding,
  },
  {
    name: "PT Allo Bank Indonesia Tbk",
    logo: LogoAlloBank,
  },
  {
    name: "Ruru Snack",
    logo: LogoMenyala,
  },
  {
    name: "PT Paragon Technology and Innovation",
    logo: LogoKahf,
  },
  {
    name: "Menyala by OCBC",
    logo: LogoRuru,
  },
];

const firstRow = sponsorMediaPartners.slice(0, sponsorMediaPartners.length / 2);
const secondRow = sponsorMediaPartners.slice(sponsorMediaPartners.length / 2);

const SponsorMediaPartnerCard = ({
  logo,
}: {
  logo: StaticImageData | null;
}) => {
  return (
    <figure className="relative flex aspect-video h-36 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl object-center p-4">
      {logo && (
        <Image
          src={logo}
          alt="Sponsor or Media Partner Logo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      )}
    </figure>
  );
};

export function SponsorMediaSection() {
  return (
    <section className="container relative z-10 space-y-4">
      <BlurFade inView delay={0.25 * 2}>
        <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50 md:text-4xl">
          SPONSOR & MEDIA PARTNER
        </h2>
      </BlurFade>

      <BlurFade inView delay={0.25 * 4}>
        <Marquee pauseOnHover className="[--duration:10s]">
          {firstRow.map((sponsorMediaPartner) => (
            <SponsorMediaPartnerCard
              key={sponsorMediaPartner.name}
              logo={sponsorMediaPartner.logo}
            />
          ))}
        </Marquee>
      </BlurFade>
      <BlurFade inView delay={0.25 * 6}>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((sponsorMediaPartner) => (
            <SponsorMediaPartnerCard
              key={sponsorMediaPartner.name}
              logo={sponsorMediaPartner.logo}
            />
          ))}
        </Marquee>
      </BlurFade>
    </section>
  );
}
