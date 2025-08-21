import React from "react";

const ServiceDetailsPage = ({ params }) => {
  const data = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      service_name: "Web Development",
      service_image: "/hp_elitebook.jpg",
      service_description:
        "Build modern, fast, and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.",
    },
    {
      id: "1c6e7a18-9d02-4a7c-a4f5-b1c71b5d630f",
      service_name: "Graphic Design",
      service_image: "/hp_elitebook.jpg",
      service_description:
        "Creative visual content such as logos, posters, and branding assets designed with Adobe tools.",
    },
    {
      id: "7b0c0a36-913a-4d02-bfd9-1945e2237a59",
      service_name: "SEO Optimization",
      service_image: "/hp_elitebook.jpg",
      service_description:
        "Optimize your website to rank higher on search engines and improve visibility organically.",
    },
    {
      id: "9f8f1b7e-316b-4666-bd69-47e27a8c8a02",
      service_name: "Digital Marketing",
      service_image: "/hp_elitebook.jpg",
      service_description:
        "Strategically market your business on platforms like Facebook, Instagram, and Google Ads.",
    },
    {
      id: "d2e7a34b-d616-4d64-91e1-7d40766b1cf4",
      service_name: "Mobile App Development",
      service_image: "/hp_elitebook.jpg",
      service_description:
        "Develop iOS and Android apps using Flutter, React Native, and other cross-platform tools.",
    },
    {
      id: "e4bb5a2d-0b83-4c79-a8a6-c2185f8771be",
      service_name: "Content Writing",
      service_image: "/hp_elitebook.jpg",
      service_description:
        "Professional content writing services for blogs, websites, and marketing materials.",
    },
  ];

  const id = params.id;
  const singleData = data.find((d) => d.id == id);

  if (singleData) {
    return (
      <div className="py-20">
        <h1 className="text-center font-bold text-2xl py-10">ServiceDetailsPage</h1>
        <div className="flex items-center justify-center gap-5">
          <div>
            <p>ID: {id}</p>
            <p>Name: {singleData.service_name}</p>
            <p>Description: {singleData.service_description}</p>
          </div>
          <div>
            <img className="w-xl" src={singleData.service_image} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <p>Not Fount</p>
      </>
    );
  }
};

export default ServiceDetailsPage;
