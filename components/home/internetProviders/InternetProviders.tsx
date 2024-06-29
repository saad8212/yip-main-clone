import useDimensions from "../../../hooks/use-dimensions";
import InternerProviderBox from "./InternerProviderBox";
export type t_Provider = {
  provider: string;
  text: string;
  num?: string;
  number: string;
  url?:string;
};
const InternetProviders = () => {
  const { width } = useDimensions();
  const providers: t_Provider[] = [
    {
      provider: `/providers/ATnnT.webp`,
      text: "Get best AT&T internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
      num: "+18009623418",
      url:"/att",
    },
    {
      provider: `/providers/spectrum.webp`,
      text: "Get best Spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1(800)-962-3418",
      num: "+18009623418",
      url:"/spectrum",
    },
    {
      provider: `/providers/Exfinity.webp`,
      text: "Get best xfinity internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
      num: "+18009623418",
      url:"/xfinity",

    },
    {
      provider: `/providers/century.webp`,
      text: "Get best CenturyLink internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",

    },
    {
      provider: `/providers/verizon.webp`,
      text: "Get best Verizon internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/medicom.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },

    {
      provider: `/providers/optimum.webp`,
      text: "Get best Optimum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
      url:"/optimum",

    },
    {
      provider: `/providers/visasat.webp`,
      text: "Get best Viasat internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/earthlink.webp`,
      text: "Get best EarthLink internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/hughes.webp`,
      text: "Get best HughesNet internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/starry.webp`,
      text: "Get best Starry internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/rcn.webp`,
      text: "Get best RCN internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/towerstream.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/Consolidated.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
      
    },
    {
      provider: `/providers/honest.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },

    {
      provider: `/providers/sonic.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/connecto.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/goCreactive.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/smartaira.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/ace.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/cox.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
      url:"/cox"
    },
    {
      provider: `/providers/fiber.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/medicom.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
    {
      provider: `/providers/HomeInternet.webp`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "+1+1(800) 962-3418",
    },
  ];
  const updatedProviders =
    width < 600 && providers.length == 24 ? providers.slice(0, 9) : providers;

  return <InternerProviderBox providers={updatedProviders} />;
};

export default InternetProviders;
