"use client";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Appointments", href: "/appointments" },
    { name: "Products", href: "/products" },
    { name: "Marketing Suite", href: "/marketingsuite" },
    { name: "Social & Ads", href: "/social&ads" },
    { name: "Manage", href: "/manage" },
    { name: "Reports", href: "/reports" },
    { name: "Payments", href: "/payments" },
    { name: "Custom Features", href: "/customfeatures" },
    { name: "Plan & Price", href: "/plan&price" },
    { name: "Settings", href: "/settings" },
    { name: "Help", href: "/help" },
    { name: "Bytesoft Nepal", href: "/bytesoftnepal" },
  ];

  return (
    <nav
      className="min-h-screen bg-customGreen text-white p-4 w-64 flex flex-col"
      style={{ backgroundColor: "#6FB434" }} // Inline style for custom color
    >
      <h1 className="text-xl font-bold mb-6">App Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="mb-4">
            <a
              href={item.href}
              className="block p-2 rounded hover:bg-green-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
