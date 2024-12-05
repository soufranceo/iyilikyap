import { Facebook, Link2, Twitter, Share2, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  canShare,
  copyToClipboard,
  nativeShare,
  getSocialShareUrls,
} from "@/lib/utils/share";

interface ShareButtonsProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  variant?: 'default' | 'minimal';
  className?: string;
}

export function ShareButtons({ 
  title, 
  description, 
  url,
  variant = 'default',
  className 
}: ShareButtonsProps) {
  const shareData = { title, description, url };
  const socialUrls = getSocialShareUrls(shareData);

  const openShareWindow = (url: string) => {
    window.open(url, 'social-share', 'width=600,height=400');
  };

  if (variant === 'minimal') {
    return (
      <div className={cn("flex gap-1", className)}>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => openShareWindow(socialUrls.facebook)}
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => openShareWindow(socialUrls.twitter)}
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => window.open(socialUrls.whatsapp)}
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
        {canShare ? (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => nativeShare(shareData)}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => copyToClipboard(url)}
          >
            <Link2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(socialUrls.facebook)}
        className="gap-2"
      >
        <Facebook className="w-4 h-4" />
        <span className="hidden sm:inline">Facebook</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(socialUrls.twitter)}
        className="gap-2"
      >
        <Twitter className="w-4 h-4" />
        <span className="hidden sm:inline">Twitter</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(socialUrls.whatsapp)}
        className="gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>

      {canShare ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => nativeShare(shareData)}
          className="gap-2"
        >
          <Share2 className="w-4 h-4" />
          <span className="hidden sm:inline">Paylaş</span>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={() => copyToClipboard(url)}
          className="gap-2"
        >
          <Link2 className="w-4 h-4" />
          <span className="hidden sm:inline">Kopyala</span>
        </Button>
      )}
    </div>
  );
}