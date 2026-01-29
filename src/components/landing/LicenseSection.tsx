import { useState, useRef, useEffect } from "react";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Platform {
  name: string;
  url: string;
  iconName: string;
  color: string;
}

const platforms: Platform[] = [
  {
    name: "Spotify",
    url: "https://spotify.com",
    iconName: "Music",
    color: "from-green-500 to-green-600",
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com",
    iconName: "Youtube",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com",
    iconName: "Music2",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com",
    iconName: "Cloud",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Deezer",
    url: "https://deezer.com",
    iconName: "Disc3",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Yandex Music",
    url: "https://music.yandex.ru",
    iconName: "Radio",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "VK Music",
    url: "https://vk.com/music",
    iconName: "AudioWaveform",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Bandcamp",
    url: "https://bandcamp.com",
    iconName: "Disc",
    color: "from-cyan-500 to-cyan-600",
  },
];

const LicenseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="licenses" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Слушай на всех платформах</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Выбери свою любимую платформу и погружайся в мир хардстайла. Все треки доступны
            на основных стриминговых сервисах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`relative h-full bg-black border-white/10 ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } transition-all duration-300 cursor-pointer`}
                onClick={() => window.open(platform.url, '_blank')}
              >
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-white/20 to-white/0">
                  <div className="absolute inset-0 rounded-lg bg-black"></div>
                </div>

                <CardContent className="relative p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${platform.color} mb-4`}>
                    <Icon name={platform.iconName} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-sm text-zinc-400">Перейти на платформу</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;