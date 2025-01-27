"use client";

import Image from 'next/image';
import React, {useState } from 'react';

const BusinessSignup = () => {
    // Define a type for the location structure
    interface Location {
      province: string;
      district: string;
      city: string;
      street: string;
    }

    interface Cities {
      [district: string]: string[];
    }

    interface ProvinceData {
      districts: string[];
      cities: Cities;
    }

    type ProvincesData = {
      [province: string]: ProvinceData;
    };
    // Initialize the provincesData state with the appropriate type
    const [provincesData] = useState<ProvincesData>({
      "province-1": {
        districts: ["Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", "Sunsari", "Taplejung", "Terhathum"],
        cities: {
            "Bhojpur": ["Bhojpur", "Shadanand"],
            "Dhankuta": ["Dhankuta", "Sangurigadhi", "Basantapur"],
            "Ilam": ["Ilam", "Maijogmai", "Dholboka"],
            "Jhapa": ["Birtamod", "Damak", "Mechinagar"],
            "Khotang": ["Diktel", "Mahadev", "Halesi"],
            "Morang": ["Biratnagar", "Urlabari", "Itahari"],
            "Okhaldhunga": ["Okhaldhunga", "Khijidemba"],
            "Panchthar": ["Phidim", "Fikkal"],
            "Sankhuwasabha": ["Khandbari", "Khibar", "Kimathanka"],
            "Solukhumbu": ["Salleri", "Lukla"],
            "Sunsari": ["Inaruwa", "Dharan"],
            "Taplejung": ["Taplejung", "Phungling"],
            "Terhathum": ["Myanglung", "Suryodaya"]
        }
    },
    "province-2": {
        districts: ["Bara", "Dhanusha", "Mahottari", "Madhesh", "Parsa", "Saptari", "Sarlahi", "Siraha"],
        cities: {
            "Bara": ["Kalaiya", "Nijgadh"],
            "Dhanusha": ["Janakpur", "Mithila"],
            "Mahottari": ["Jaleshwar", "Bardibas"],
            "Madhesh": ["Lahan", "Siraha"],
            "Parsa": ["Birgunj", "Nawalpur"],
            "Saptari": ["Rajbiraj", "Kanchan"],
            "Sarlahi": ["Malangawa", "Barahathwa"],
            "Siraha": ["Siraha", "Lahan"]
        }
    },
    "bagmati": {
        districts: ["Bhaktapur", "Chitwan", "Dhading", "Kathmandu", "Lalitpur", "Makwanpur", "Nuwakot", "Ramechhap", "Rasuwa", "Sindhuli", "Sindhupalchok"],
        cities: {
            "Bhaktapur": ["Bhaktapur", "Sallaghari"],
            "Chitwan": ["Bharatpur", "Ratnanagar"],
            "Dhading": ["Dhading", "Benighat"],
            "Kathmandu": ["Kathmandu", "Patan", "Bhaktapur"],
            "Lalitpur": ["Lalitpur (Patan)"],
            "Makwanpur": ["Hetauda", "Thaha"],
            "Nuwakot": ["Bidur", "Dandagaun"],
            "Ramechhap": ["Manthali", "Okhaldhunga"],
            "Rasuwa": ["Dhunche", "Timure"],
            "Sindhuli": ["Sindhuli", "Kamalamai"],
            "Sindhupalchok": ["Chautara", "Melamchi"]
        }
    },
    "gandaki": {
        districts: ["Baglung", "Gorkha", "Kaski", "Lamjung", "Manang", "Mustang", "Nawalparasi", "Syangja"],
        cities: {
            "Baglung": ["Baglung", "Taman"],
            "Gorkha": ["Gorkha", "Palungtar"],
            "Kaski": ["Pokhara", "Lekhnath"],
            "Lamjung": ["Besisahar", "Sundarbazar"],
            "Manang": ["Chame", "Besisahar"],
            "Mustang": ["Jomsom", "Lo Manthang"],
            "Nawalparasi": ["Parasi", "Kawasoti"],
            "Syangja": ["Syangja", "Waling"]
        }
    },
    "lumbini": {
        districts: ["Arghakhanchi", "Banke", "Bardiya", "Dang", "Kapilvastu", "Nawalparasi", "Rupandehi"],
        cities: {
            "Arghakhanchi": ["Sandhikharka", "Bhilampur"],
            "Banke": ["Nepalgunj", "Khajura"],
            "Bardiya": ["Gulariya", "Thakurbaba"],
            "Dang": ["Tulsipur", "Ghorahi"],
            "Kapilvastu": ["Taulihawa", "Krishnanagar"],
            "Nawalparasi": ["Parasi", "Kawasoti"],
            "Rupandehi": ["Siddharthanagar", "Butwal"]
        }
    },
    "karnali": {
        districts: ["Bardiya", "Dailekh", "Dolpa", "Humla", "Jajarkot", "Kalikot", "Mugu", "Rukum", "Salyan", "Surkhet"],
        cities: {
            "Bardiya": ["Gulariya", "Thakurbaba"],
            "Dailekh": ["Dailekh", "Dullu"],
            "Dolpa": ["Dunai", "Jufal"],
            "Humla": ["Simkot", "Sarkegad"],
            "Jajarkot": ["Jajarkot", "Chhedagad"],
            "Kalikot": ["Manma", "Bhur"],
            "Mugu": ["Gamgadhi", "Mugu"],
            "Rukum": ["Rukum", "Musikot"],
            "Salyan": ["Salyan", "Khalanga"],
            "Surkhet": ["Birendranagar", "Sadhbhawana"]
        }
    },
    "sudurpaschim": {
        districts: ["Achham", "Baitadi", "Bajhang", "Bajura", "Darchula", "Dadeldhura", "Doti", "Kailali", "Kanchanpur"],
        cities: {
            "Achham": ["Mangalsen", "Sanphebagar"],
            "Baitadi": ["Baitadi", "Dasharath"],
            "Bajhang": ["Bajhang", "Chainpur"],
            "Bajura": ["Bajura", "Martadi"],
            "Darchula": ["Darchula", "Khalanga"],
            "Dadeldhura": ["Dadeldhura", "Bhuleswar"],
            "Doti": ["Doti", "Silgadhi"],
            "Kailali": ["Dhangadhi", "Tikapur"],
            "Kanchanpur": ["Mahendranagar", "Krishnanagar"]
        }
    }
    });

    
    // State to manage multiple locations
    const [locations, setLocations] = useState<Location[]>([
      { province: '', district: '', city: '', street: '' }
    ]);

    // Update districts based on the selected province
    const updateDistricts = (province: string) => {
      return provincesData[province] ? provincesData[province].districts : [];
    };

    // Update cities based on the selected district
    const updateCities = (district: string, province: string) => {
      return provincesData[province] && provincesData[province].cities[district] || [];
    };

    // Add another location
    const addLocation = () => {
      setLocations([...locations, { province: '', district: '', city: '', street: '' }]);
    };

    // Handle changes for each location
    const handleLocationChange = (index: number, field: keyof Location, value: string) => {
      const newLocations = [...locations];
      newLocations[index][field] = value;

      // Update districts when province is selected
      if (field === 'province') {
        newLocations[index].district = ''; // Reset district and city when province changes
        newLocations[index].city = '';
      }

      // Update cities when district is selected
      if (field === 'district') {
        newLocations[index].city = ''; // Reset city when district changes
      }

      setLocations(newLocations);
    };

  
  return (
    <div className='signup-continue'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f0f8ff",
        fontFamily: "Roboto Flex, sans-serif",
      }}
    >
      <div
        style={{
          width: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(135, 206, 235, 0.3))",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          paddingBottom: "40px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <div style={{ 
          marginBottom: "16px", 
          marginTop: "6px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
         }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={40}
            style={{ marginBottom: "0px" }}
          />
          <hr
            style={{
              height: "0.05rem",
              marginTop: "0.5rem",
              backgroundColor: "#8080804c",
              alignSelf: "stretch",
              width: "100%",
              border: "none",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "1.88rem",
            fontWeight: 600,
            fontFamily: "Alexandria",
            marginBottom: "8px",
            color: "#333333",
          }}
        >
          Tell us about your business.
        </h1>
        <p
          style={{
            fontSize: "0.91rem",
            fontFamily: "Roboto Flex",
            fontWeight: 500,
            color: "#666666",
          }}
        >
          Let us show you how Calenify can meet your business&apos;s unique needs. Fill out the form below, and
          we&apos;ll provide tailored insights just for you!
        </p>

        <form>
          <div
            style={{
              marginTop: "2.38rem",
              maxWidth: "100%",
              gap: "1.25rem",
              display: "flex",
              alignSelf: "stretch",
            }}
          >
            {/* Field for Legal Business Name */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Legal business name
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Your legal business name should match the name registered with the government or your local authority. This ensures compliance with regulations.
                </div>
              </h2>

              <label
                style={{
                  display: "flex",
                  cursor: "text",
                  border: "1px solid #a39daabf",
                  borderRadius: "5px",
                  color: "#808080",
                  paddingLeft: "1.13rem",
                  paddingRight: "1.13rem",
                  letterSpacing: "0rem",
                  fontSize: "0.90rem",
                  alignSelf: "stretch",
                  height: "2.75rem",
                  backgroundColor: "white",
                }}
              >
                <input
                  name="name"
                  placeholder="Business name"
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    padding: "0",
                    fontSize: "inherit",
                    fontFamily: "Roboto Flex",
                    fontWeight: 500,
                    color: "#333333",
                  }}
                />
                <style>
                  {`
                    input::placeholder {
                      color: #808080; /* Placeholder text color */
                    }
                  `}
                </style>
              </label>

            </div>

            {/* Field for Business PAN Number */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Business PAN number
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Please provide your official PAN number for tax registration.
                </div>
              </h2>

              <label
                style={{
                  display: "flex",
                  cursor: "text",
                  border: "1px solid #a39daabf",
                  borderRadius: "5px",
                  color: "#808080",
                  paddingLeft: "1.13rem",
                  paddingRight: "1.13rem",
                  letterSpacing: "0rem",
                  fontSize: "0.90rem",
                  alignSelf: "stretch",
                  height: "2.75rem",
                  backgroundColor: "white",
                }}
              >
                <input
                  name="pan"
                  placeholder="PAN number"
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    padding: "0",
                    fontSize: "inherit",
                    fontFamily: "Roboto Flex",
                    fontWeight: 500,
                    color: "#333333",
                  }}
                />
              </label>
            </div>
          </div>
                
          {/* Business Type and Category Section*/}
          <div
            style={{
              marginTop: "1.88rem",
              maxWidth: "100%",
              gap: "1.25rem",
              display: "flex",
              alignSelf: "stretch",
            }}
          >
            {/* Field for Business Type */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Type of business
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Please select the business type that best describes your company. This helps us tailor the experience for your specific needs.
                </div>
              </h2>

              {/* Dropdown for Business Type */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <select
                  className="business-signup__dropdown--type"
                  name="business-type"
                  style={{
                  display: "block",
                  width: "100%",
                  height: "2.75rem",
                  padding: "0.75rem 1rem",
                  paddingRight: "2.5rem", // Space for the dropdown icon
                  fontSize: "0.90rem",
                  color: "#808080", // Text color for the select itself
                  border: "1px solid #a39daabf",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  fontFamily: "Roboto Flex",
                  outline: "none",
                  appearance: "none", // Hide the default dropdown icon
                  backgroundImage: "url('/dropdown.svg')", // Custom dropdown icon
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1.13rem center", // Position with gap
                  backgroundSize: "1rem", // Adjust icon size
                  cursor: "pointer",
                }}
                defaultValue="" // Default to placeholder
              >
                <option value="" disabled>
                  Please select...
                </option>
                <option value="beauty-personal-care">Beauty and Personal Care</option>
                <option value="charities">Charities</option>
                <option value="education-membership">Education and Membership</option>
                <option value="fitness">Fitness</option>
                <option value="food-drink">Food and Drink</option>
                <option value="health-care">Health Care</option>
                <option value="home-repair">Home and Repair</option>
                <option value="leisure-entertainment">Leisure and Entertainment</option>
                <option value="pet-care">Pet Care</option>
                <option value="professional-services">Professional Services</option>
                <option value="retail">Retail</option>
                <option value="transportation">Transportation</option>
                <option value="other">Other</option>
              </select>

              </div>
            </div>



            {/* Field for Business Category */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Business category
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Please select the category that best fits your business. This helps us to better understand and categorize your business.
                </div>
              </h2>

              {/* Dropdown for Business Category */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <select
                  className="business-signup__dropdown--type"
                  name="business-type"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "2.75rem",
                    padding: "0.75rem 1rem",
                    paddingRight: "2.5rem", // Space for the dropdown icon
                    fontSize: "0.90rem",
                    color: "#808080",
                    border: "1px solid #a39daabf",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    fontFamily: "Roboto Flex",
                    outline: "none",
                    appearance: "none", // Hide the default dropdown icon
                    backgroundImage: "url('/dropdown.svg')", //dropdown.svg", // Custom dropdown icon
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1.13rem center", // Position with gap
                    backgroundSize: "1rem", // Adjust icon size
                    cursor: "pointer",
                  }}
                  defaultValue="" // Default to placeholder
                >
                  
                  <option value="" disabled>
                    Please select...
                  </option>
                                                 
                  <option value="events-festivals">Events/Festivals</option>
                  <option value="misc-goods">Miscellaneous Goods</option>
                  <option value="misc-services">Miscellaneous Services</option>
                  <option value="outdoor-market">Outdoor Market</option>
                  <option value="other">Other</option>
                </select>
              </div>
            
            </div>
          </div>

          {/* Business status and Estimated Revenue */}
          <div
            style={{
              marginTop: "1.88rem",
              maxWidth: "100%",
              gap: "1.25rem",
              display: "flex",
              alignSelf: "stretch",
            }}
          >
            {/* Field for Business Status */}
            <div
              style={{
                marginTop: "-1.43rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Business status
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Select whether your business is already established or a new venture. This helps us understand the stage of your business.
                </div>
              </h2>

              {/* Checkboxes for Business Status */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1.75rem",
                }}
                className="business-signup__checkbox-group"
              >
                <label
                  className="business-signup__checkbox--new"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.95rem",
                    color: "#333",
                    fontFamily: "Roboto Flex",
                  }}
                >
                  <input
                    type="checkbox"
                    name="established"
                    className="ui checkbox size-xs primary"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      cursor: "pointer",
                    }}
                  />
                  <div>New</div>
                </label>
                <label
                  className="business-signup__checkbox--established"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.95rem",
                    color: "#333",
                    fontFamily: "Roboto Flex",
                  }}
                >
                  <input
                    type="checkbox"
                    name="new"
                    className="ui checkbox size-xs primary"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      cursor: "pointer",
                    }}
                  />
                  <div>Established</div>
                </label>
              </div>
            </div>



            {/* Field for Business Estimated Annual Revenue */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Estimated annual revenue
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Please select the estimated annual revenue of your business to help us better understand your company&apos;s scale.
                </div>
              </h2>

              {/* Dropdown for Estimated Annual Revenue */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <select
                  className="business-signup__dropdown--type"
                  name="business-type"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "2.75rem",
                    padding: "0.75rem 1rem",
                    paddingRight: "2.5rem", // Space for the dropdown icon
                    fontSize: "0.90rem",
                    color: "#808080",
                    border: "1px solid #a39daabf",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    fontFamily: "Roboto Flex",
                    outline: "none",
                    appearance: "none", // Hide the default dropdown icon
                    backgroundImage: "url('/dropdown.svg')", //dropdown.svg", // Custom dropdown icon
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1.13rem center", // Position with gap
                    backgroundSize: "1rem", // Adjust icon size
                    cursor: "pointer",
                  }}
                  defaultValue="" // Default to placeholder
                >
                  
                  <option value="" disabled>
                    Please select...
                  </option>
                                                 
                  <option value="less-than-1-lakh">Less than 1 lakh</option>
                  <option value="1-to-4-lakh">1 to 4 lakhs</option>
                  <option value="4-to-8-lakh">4 to 8 lakhs</option>
                  <option value="8-to-12-lakh">8 to 12 lakhs</option>
                  <option value="12-to-20-lakh">12 to 20 lakhs</option>
                  <option value="20-to-30-lakh">20 to 30 lakhs</option>
                  <option value="30-to-40-lakh">30 to 40 lakhs</option>
                  <option value="above-40-lakh">Above 40 lakhs</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Business Contact Section */}
          <div
            style={{
              marginTop: "0.4rem",
              maxWidth: "100%",
              gap: "1.25rem",
              display: "flex",
              alignSelf: "stretch",
            }}
          >
            {/* Field for Legal Business Name */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Business contact
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Your business contact details, including name and phone number, should be accurate to ensure smooth communication.
                </div>
              </h2>

              <label
                style={{
                  display: "flex",
                  cursor: "text",
                  border: "1px solid #a39daabf",
                  borderRadius: "5px",
                  color: "#808080",
                  paddingLeft: "1.13rem",
                  paddingRight: "1.13rem",
                  letterSpacing: "0rem",
                  fontSize: "0.90rem",
                  alignSelf: "stretch",
                  height: "2.75rem",
                  backgroundColor: "white",
                
                }}
              >
                <input
                  name="name"
                  placeholder="Contact name"
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    padding: "0",
                    fontSize: "inherit",
                    fontFamily: "Roboto Flex",
                    fontWeight: 500,
                    color: "#333333",
                  }}
                />
              </label>
            </div>

            {/* Field for Phone Number */}
            <div
              style={{
                marginTop: "2.2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "25rem",
                position: "relative", // Required for tooltip positioning
              }}
            >

              <label
                style={{
                  display: "flex",
                  cursor: "text",
                  border: "1px solid #a39daabf",
                  borderRadius: "5px",
                  color: "#808080",
                  paddingLeft: "1.13rem",
                  paddingRight: "1.13rem",
                  letterSpacing: "0rem",
                  fontSize: "0.90rem",
                  alignSelf: "stretch",
                  height: "2.75rem",
                  backgroundColor: "white",
                }}
              >
                <input
                  name="pan"
                  placeholder="Phone number"
                  type="tel"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    padding: "0",
                    fontSize: "inherit",
                    fontFamily: "Roboto Flex",
                    fontWeight: 500,
                    color: "#333333",
                  }}
                />
              </label>
            </div>
          </div>

           {/* Business location*/}
           <div
            style={{
              marginTop: "1.88rem",
              maxWidth: "100%",
              gap: "1.25rem",
              display: "flex",
              alignSelf: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "0.73rem",
                width: "100%",
                position: "relative", // Required for tooltip positioning
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.5)",
                  letterSpacing: "0.01em",
                  color: "#000",
                  fontFamily: "Roboto Flex",
                }}
              >
                Business location
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "0.3rem",
                    width: "1.15rem",
                    height: "1.15rem",
                    backgroundColor: "#FFA07A",
                    color: "#000",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "1.15rem",
                    fontSize: "0.9rem",
                    textShadow: "0.03em 0.03em 0 rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click for more info"
                  className="info-icon"
                >
                  ?
                </span>
                <div className="tooltip">
                  Please select the registered business location that accurately represents your company. This helps us ensure compliance and provide tailored services based on your region.
                </div>
              </h2>

              {/* Iterate over locations to render each location's form */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "1.25rem",
                  }}
                >
                  {/* Province Dropdown */}
                  <select
                    className="dropdown--province"
                    value={location.province}
                    onChange={(e) => handleLocationChange(index, 'province', e.target.value)}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "2.75rem",
                      padding: "0.75rem 1rem",
                      paddingRight: "2.5rem", // Space for the dropdown icon
                      fontSize: "0.90rem",
                      color: "#808080",
                      border: "1px solid #a39daabf",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      fontFamily: "Roboto Flex",
                      outline: "none",
                      appearance: "none", // Hide the default dropdown icon
                      backgroundImage: "url('/dropdown.svg')", // Custom dropdown icon
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1.13rem center", // Position with gap
                      backgroundSize: "1rem", // Adjust icon size
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>
                      Select province
                    </option>
                    <option value="province-1">Province 1</option>
                    <option value="province-2">Province 2</option>
                    <option value="bagmati">Bagmati</option>
                    <option value="gandaki">Gandaki</option>
                    <option value="lumbini">Lumbini</option>
                    <option value="karnali">Karnali</option>
                    <option value="sudurpaschim">Sudurpaschim</option>
                    {/* Add other provinces here */}
                  </select>

                  {/* District Dropdown */}
                  <select
                    className="dropdown--district"
                    value={location.district}
                    onChange={(e) => handleLocationChange(index, 'district', e.target.value)}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "2.75rem",
                      padding: "0.75rem 1rem",
                      paddingRight: "2.5rem", // Space for the dropdown icon
                      fontSize: "0.90rem",
                      color: "#808080",
                      border: "1px solid #a39daabf",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      fontFamily: "Roboto Flex",
                      outline: "none",
                      appearance: "none", // Hide the default dropdown icon
                      backgroundImage: "url('/dropdown.svg')", // Custom dropdown icon
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1.13rem center", // Position with gap
                      backgroundSize: "1rem", // Adjust icon size
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>Select district</option>
                    {updateDistricts(location.province).map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>

                  {/* City Dropdown */}
                  <select
                    className="dropdown--city"
                    value={location.city}
                    onChange={(e) => handleLocationChange(index, 'city', e.target.value)}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "2.75rem",
                      padding: "0.75rem 1rem",
                      paddingRight: "2.5rem", // Space for the dropdown icon
                      fontSize: "0.90rem",
                      color: "#808080",
                      border: "1px solid #a39daabf",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      fontFamily: "Roboto Flex",
                      outline: "none",
                      appearance: "none", // Hide the default dropdown icon
                      backgroundImage: "url('/dropdown.svg')", // Custom dropdown icon
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1.13rem center", // Position with gap
                      backgroundSize: "1rem", // Adjust icon size
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>Select city</option>
                    {updateCities(location.district, location.province).map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>

                  {/* Street Address Input */}
                  <label
                    style={{
                      display: "flex",
                      cursor: "text",
                      border: "1px solid #a39daabf",
                      borderRadius: "5px",
                      color: "#808080",
                      paddingLeft: "1.13rem",
                      paddingRight: "1.13rem",
                      letterSpacing: "0rem",
                      fontSize: "0.90rem",
                      alignSelf: "stretch",
                      height: "2.75rem",
                      backgroundColor: "white",
                      fontFamily: "Roboto Flex",
                    }}
                  >
                    <input
                      value={location.street}
                      onChange={(e) => handleLocationChange(index, 'street', e.target.value)}
                      name="street"
                      placeholder="Street address"
                      type="text"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        padding: "0",
                        fontSize: "inherit",
                        fontFamily: "Roboto Flex",
                        fontWeight: 500,
                        color: "#333333",
                      }}
                    />
                  </label>
                </div>
              ))}
                
              {/* Add another location button */}
              <h2
                onClick={addLocation}
                style={{
                  cursor: "pointer",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                  fontWeight: 550,
                  textShadow: "0.03em 0.03em 0 rgba(0, 174, 239, 0.12)",
                  letterSpacing: "0.01em",
                  color: "#00AEEF",
                  fontFamily: "Roboto Flex",
                  WebkitTextStroke: "0.1px #00AEEF",
                }}
              >
                <span
                  style={{
                    marginTop: "0.23rem",
                    display: "inline-block",
                    marginRight: "0.5rem",
                  }}
                >
                  + Add another location
                </span>
              </h2>
          
            </div> 
          </div>
          
        </form>
        <hr
            style={{
              height: "0.05rem",
              marginTop: "2rem",
              backgroundColor: "#8080804c",
              alignSelf: "stretch",
              width: "100%",
              border: "none",
            }}
          />
          <button
            style={{
              color: "#ffffff",
              marginTop: "2.25rem",
              marginLeft: "6rem",
              paddingLeft: "2.13rem",
              paddingRight: "2.13rem",
              letterSpacing: "0rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              alignSelf: "flex-start",
              backgroundColor: "#6fb434",
              boxShadow: "0 4px 4px 0 #0000003f",
              height: "3rem",
              minWidth: "30.88rem",
              borderRadius: "5px",
            }}
          >
            Continue
          </button>

      </div>
    </div>
  );
};

export default BusinessSignup;
