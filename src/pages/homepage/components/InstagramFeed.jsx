import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const InstagramFeed = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop&auto=format&q=80",
      likes: 2847,
      comments: 156,
      caption:
        "Golden hour magic at Sarah & Michael's engagement session ✨ #CaptureStudioPro #EngagementPhotography",
      hashtags: ["#prewedding", "#goldenhour", "#love"],
      date: "2 days ago",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop&auto=format&q=80",
      likes: 3521,
      comments: 203,
      caption:
        "The joy in Jennifer's eyes as she walked down the aisle 💕 Pure magic captured forever",
      hashtags: ["#weddingday", "#bride", "#emotion"],
      date: "4 days ago",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop&auto=format&q=80",
      likes: 1923,
      comments: 89,
      caption:
        "Welcome to the world, little Emma! 👶 First family portraits are always so special",
      hashtags: ["#newborn", "#family", "#babyphotography"],
      date: "1 week ago",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop&auto=format&q=80",
      likes: 2156,
      comments: 134,
      caption:
        "Celebrating the beauty of motherhood with Amanda's maternity session 🤱",
      hashtags: ["#maternity", "#motherhood", "#expecting"],
      date: "1 week ago",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=600&fit=crop&auto=format&q=80",
      likes: 4102,
      comments: 267,
      caption:
        "Fashion meets art in this stunning editorial shoot 📸 Behind the scenes coming soon!",
      hashtags: ["#fashion", "#editorial", "#art"],
      date: "2 weeks ago",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=600&fit=crop&auto=format&q=80",
      likes: 2834,
      comments: 178,
      caption:
        "Every portrait tells a story. What's yours? 📖 Book your session today!",
      hashtags: ["#portrait", "#storytelling", "#photography"],
      date: "2 weeks ago",
    },
  ];

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + "k";
    }
    return num?.toString();
  };

  return (
    <section className="section-padding bg-muted/20 max-w-6xl mx-auto">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-deep-teal font-medium mb-4">
            <Icon name="Instagram" size={20} />
            <span>Follow Our Journey</span>
          </div>
          <h2 className="text-headline mb-3">Latest from Instagram</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-6">
            Get a behind-the-scenes look at our latest shoots and see real
            moments as they happen.
          </p>
          <a
            href="https://instagram.com/capturestudiopro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-deep-teal font-medium transition-colors duration-300"
          >
            <span>@thedreamcapturestudio</span>
            <Icon name="ExternalLink" size={16} />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6 mb-10">
          {instagramPosts?.map((post) => (
            <div
              key={post?.id}
              className="relative aspect-square group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post?.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="w-full h-full rounded-lg overflow-hidden shadow-soft">
                <Image
                  src={post?.image}
                  alt={`Instagram post ${post?.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>

              {/* Hover Overlay */}
              {hoveredPost === post?.id && (
                <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center transition-all duration-300">
                  <div className="text-center text-white space-y-3">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={20} className="fill-current" />
                        <span className="font-medium">
                          {formatNumber(post?.likes)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={20} />
                        <span className="font-medium">
                          {formatNumber(post?.comments)}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm opacity-80">{post?.date}</p>
                  </div>
                </div>
              )}

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="Instagram" size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/5 to-deep-teal/5 rounded-2xl p-8">
            <h3 className="text-title mb-4">Stay Connected</h3>
            <p className="text-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Follow us on Instagram for daily inspiration, behind-the-scenes
              content, and real-time updates from our latest shoots.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://instagram.com/thedreamcapturestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex m-auto"
              >
                <Icon name="Instagram" size={20} className="mr-2" />
                <span>Follow @thedreamcapturestudio</span>
              </a>
            </div>
          </div>

          {/* Hashtag Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "#CaptureStudioPro",
              "#WeddingPhotography",
              "#PreweddingShoot",
              "#FamilyPortraits",
              "#MaternityPhotography",
              "#FashionPhotography",
            ]?.map((hashtag) => (
              <span
                key={hashtag}
                className="text-caption text-deep-teal bg-deep-teal/10 px-3 py-1 rounded-full hover:bg-deep-teal/20 transition-colors duration-300 cursor-pointer"
              >
                {hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
