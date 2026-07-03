import { useRef } from 'react';

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '经历', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '能力', href: '#skills' },
  { label: '荣誉', href: '#honors' },
  { label: '联系', href: '#contact' },
];

export default function Navbar() {
  const ref = useRef(null);

  return (
    <nav
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-max">
        <div className="flex items-center justify-center h-16 md:h-20 rounded-b-2xl bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[22px] text-white/70 hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" id="mobile-menu-btn">
            <span className="block w-6 h-px bg-primary" />
            <span className="block w-6 h-px bg-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
}
