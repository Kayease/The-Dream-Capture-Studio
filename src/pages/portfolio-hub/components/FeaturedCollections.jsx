import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const FeaturedCollections = ({ collections, onCollectionClick }) => {
  const featuredCollections = collections
    ?.filter((collection) => collection?.featured)
    ?.slice(0, 3);

  return (
    <div className="bg-muted/30 py-16">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-display text-foreground mb-4">
            Featured Collections
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Discover our most celebrated works that showcase the artistry and
            emotion captured in every frame
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCollections?.map((collection, index) => (
            <div
              key={collection?.id}
              className={`group cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => onCollectionClick(collection)}
            >
              <div className="relative overflow-hidden rounded-xl bg-muted">
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={collection?.coverImage}
                    alt={collection?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={index === 0 ? 1200 : 800}
                    height={index === 0 ? 900 : 800}
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 50vw, 33vw"
                    }
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-deep-teal/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-deep-teal text-xs font-medium uppercase tracking-wider">
                            {collection?.category}
                          </span>
                        </div>
                        {collection?.award && (
                          <div className="bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <div className="flex items-center gap-1">
                              <Icon
                                name="Award"
                                size={12}
                                color="var(--color-primary)"
                              />
                              <span className="text-primary text-xs font-medium">
                                {collection?.award}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <h3
                        className={`text-white font-heading font-semibold mb-2 ${
                          index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                        }`}
                      >
                        {collection?.title}
                      </h3>

                      <p
                        className={`text-white/80 mb-4 ${
                          index === 0 ? "text-base" : "text-sm"
                        }`}
                      >
                        {collection?.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-white/60 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            <span>{collection?.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            <span>{collection?.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Image" size={14} />
                            <span>{collection?.images?.length}</span>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          iconName="ArrowRight"
                          iconPosition="right"
                        >
                          View Gallery
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Icon name="Eye" size={12} />
                        <span>{collection?.views}</span>
                      </div>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Icon name="Heart" size={12} />
                        <span>{collection?.likes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">
                      {collection?.style}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Grid3X3"
            iconPosition="left"
            className="shadow-soft hover:shadow-elevated border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white"
          >
            View All Collections
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedCollections;
