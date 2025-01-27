"use client";

import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.8rem",
            height: "60px",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between", // Spread items across the header
            backgroundColor: "#f0f8ff",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",  // Increase shadow intensity
            zIndex: 10, // Ensure it is above other content
            position: "relative", // Make sure it can cast a shadow properly
        }}>
            {/* Left Section: Logo and Search Box */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "9rem",
            }}>
                {/* Logo and Menu */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                }}>
                    <Image src="/list.svg" alt="Menu Icon" width={25} height={25} style={{ cursor: "pointer" }}/>
                    <Image src="/business-logo.png" alt="Business Logo" width={98} height={50} style={{ cursor: "pointer" }}/>
                </div>

                {/* Search Box Section */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    height: "35px",
                    width: "245px",
                    border: "1px solid rgba(51, 51, 51, 0.5)",
                }}>
                    <Image src="/search.svg" alt="Search Icon" width={22} height={22} />
                    <input
                        type="text"
                        placeholder="Search"
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            padding: "5px 10px",
                            width: "200px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            fontFamily: "Roboto",
                        }}
                    />
                </div>
            </div>

            {/* Center Section: Icons */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                marginLeft: "1rem",
            }}>
                {/* Chat Icon with Notification Circle */}
                <div style={{ position: "relative", cursor: "pointer" }}>
                    <div style={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        width: "16px",
                        height: "16px",
                        backgroundColor: "#FF7F00",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "10px",
                        color: "#fff",
                        fontWeight: "bold",
                        fontFamily: "Roboto Flex",
                    }}>
                        10
                    </div>
                    <Image src="/chat.svg" alt="Chat Icon" width={30} height={30} />
                </div>

                {/* Notification Icon with Notification Circle */}
                <div style={{ position: "relative", cursor: "pointer" }}>
                    <div style={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        width: "16px",
                        height: "16px",
                        backgroundColor: "#F50100",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "10px",
                        color: "#fff",
                        fontWeight: "bold",
                        fontFamily: "Roboto Flex",
                    }}>
                        50
                    </div>
                    <Image src="/notification.svg" alt="Notification Icon" width={20} height={22} />
                </div>

                {/* Help Icon */}
                <Image src="/help.svg" alt="Help Icon" width={28} height={28} style={{ cursor: "pointer", zIndex: 10 }}/>
            </div>

            {/* Center Section: Logo */}
            <div style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "-8rem",
            }}>
                <Image src="/logo.png" alt="Logo" width={55} height={55} style={{ cursor: "pointer" }} />
            </div>


            {/* Right Section: Upgrade, My Booking Channels, Dark Mode */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                
            }}>
                {/* Upgrade Now Section */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "transparent",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    height: "35px",
                    gap: "0.5rem",
                    border: "1px solid #00AEEF",
                    cursor: "pointer",

                }}>
                    <Image src="/up-arrow.svg" alt="Upgrade Icon" width={24} height={24} />
                    <p style={{
                        backgroundColor: "transparent",
                        textWrap: "nowrap",
                        fontSize: "14px",
                        fontFamily: "Roboto Flex",
                        color: "#00AEEF",
                        fontWeight: "550",
                        textAlign: "center",
                        cursor: "pointer",
                    }}>
                        Upgrade Now
                    </p>
                </div>

                {/* My Booking Channels Section */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "#67B434",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    height: "35px",
                    gap: "0.5rem",
                    cursor: "pointer",
                }}>
                    <Image src="/link.svg" alt="Link Icon" width={24} height={24} />
                    <p style={{
                        backgroundColor: "transparent",
                        textWrap: "nowrap",
                        fontSize: "14px",
                        fontFamily: "Roboto Flex",
                        color: "#ffffff",
                        fontWeight: "550",
                        textAlign: "center",
                        cursor: "pointer",
                    }}>
                        My Booking Channels
                    </p>
                    {/* Vertical Divider */}
                    <div style={{
                        width: "1px",
                        height: "15px",
                        backgroundColor: "#ffffff",
                    }} />
                    <Image src="/down.svg" alt="Dropdown Icon" width={24} height={24} />
                </div>

                {/* Dark Mode Section */}
                <div style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#1B3A57",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                }}>
                    <Image src="/dark-mode.svg" alt="Dark Mode Icon" width={24} height={24} />
                </div>
            </div>
        </div>
    );
};

export default Header;
