const DESTINATION_IMAGES: Record<string, string> = {
  goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
  kashmir: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
  manali: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  shimla: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  darjeeling: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  sikkim: 'https://images.unsplash.com/photo-GdlEMsUsOy0?w=800&q=80',
  focus: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
  ladakh: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
  rajasthan: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
  jaipur: 'https://images.unsplash.com/photo-1578556881786-851d4b79cb73?w=800&q=80',
  udaipur: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
  agra: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  delhi: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
  kerala: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  munnar: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  alleppey: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80',
  andaman: 'https://images.unsplash.com/photo-1X3YSIuqYeM?w=800&q=80',
  lakshadweep: 'https://images.unsplash.com/photo-LQ_SoWQDk84?w=800&q=80',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
  thailand: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
  bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  nepal: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
  bhutan: 'https://images.unsplash.com/photo-1638246438556-5d5042582f05?w=800&q=80',
  vietnam: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
  japan: 'https://images.unsplash.com/photo-E_eWwM29wfU?w=800&q=80',
  switzerland: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  paris: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
  london: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  "new york": 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  "golden triangle": 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
  "gujarat": 'https://images.unsplash.com/photo-tFmQjEldygI?w=800&q=80',
  "himachal pradesh": 'https://images.unsplash.com/photo-e3orsiJa178?w=800&q=80',
  "pilgrim package": 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  "madhya pradesh": 'https://images.unsplash.com/photo-AZ4y6Bc3qeI?w=800&q=80',
  "meghalaya assam": 'https://images.unsplash.com/photo-1579761922573-04bcf7f1e72f?w=800&q=80',
  "arunachal pradesh": 'https://images.unsplash.com/photo-1622037198442-1264c1c9c054?w=800&q=80',
  "coorg mysore": 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  "odisha": 'https://images.unsplash.com/photo-1634568856111-9f94eb9725f7?w=800&q=80',
  "uttarakhand": 'https://images.unsplash.com/photo-1610416955097-bf0e54d5d3ff?w=800&q=80',
  "hyderabad": 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  "maharashtra": 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
  "west bengal": 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80',
};

const CATEGORY_IMAGES: Record<string, string> = {
  honeymoon: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  luxury: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  adventure: 'https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=800&q=80',
  family: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  wildlife: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  pilgrimage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
  cruise: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
  weekend: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
};

const GENERIC_TRAVEL = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';

// Helper to determine if a URL is one of the generic placeholder images
const isGenericPlaceholder = (url?: string | null): boolean => {
  if (!url) return true;
  return url.includes('photo-1488646953014-85cb44e25828') || 
         url.includes('photo-1524492412937-b28074a5d7da') || 
         url.includes('photo-1476514525535-07fb3b4ae5f1');
};

export function resolveImage(
  type: 'destination' | 'package' | 'category',
  identifier: string,
  fallback?: string
): string {
  // If we have a valid, specific database image fallback, we ALWAYS prefer it over the static maps
  if (fallback && fallback.startsWith('http') && !isGenericPlaceholder(fallback)) {
    return fallback;
  }

  if (!identifier) return fallback || GENERIC_TRAVEL;

  const searchStr = identifier.toLowerCase();

  if (type === 'destination') {
    for (const [key, url] of Object.entries(DESTINATION_IMAGES)) {
      if (searchStr.includes(key)) return url;
    }
  }

  if (type === 'category') {
    for (const [key, url] of Object.entries(CATEGORY_IMAGES)) {
      if (searchStr.includes(key)) return url;
    }
  }

  if (type === 'package') {
    // Check destinations first, they are more specific
    for (const [key, url] of Object.entries(DESTINATION_IMAGES)) {
      if (searchStr.includes(key)) return url;
    }
    // Check categories next
    for (const [key, url] of Object.entries(CATEGORY_IMAGES)) {
      if (searchStr.includes(key)) return url;
    }
  }

  return fallback || GENERIC_TRAVEL;
}

const DESTINATION_GALLERIES: Record<string, string[]> = {
  goa: [
    'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    'https://images.unsplash.com/photo-1599059021750-82716ae2b661?w=800&q=80',
    'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&q=80',
    'https://images.unsplash.com/photo-1587922546307-776227941871?w=800&q=80',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80'
  ],
  kashmir: [
    'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80',
    'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
  ],
  dubai: [
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
    'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80',
    'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80',
    'https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=800&q=80'
  ],
  bali: [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
    'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80',
    'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80'
  ],
  manali: [
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    'https://images.unsplash.com/photo-1578556881786-851d4b79cb73?w=800&q=80',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80'
  ]
};

export function resolveGallery(identifier: string, fallback?: string[]): string[] {
  if (!identifier) return fallback || [GENERIC_TRAVEL];
  
  const searchStr = identifier.toLowerCase();
  
  for (const [key, gallery] of Object.entries(DESTINATION_GALLERIES)) {
    if (searchStr.includes(key)) {
      return gallery;
    }
  }

  const singleImage = resolveImage('destination', identifier);
  if (singleImage !== GENERIC_TRAVEL) {
    return [singleImage, singleImage, singleImage, singleImage, singleImage];
  }

  return fallback || [GENERIC_TRAVEL];
}

// Reusable centralized functions for components to consistently fetch images
export function buildUnsplashQuery(item: { name?: string; title?: string; destination?: any; country?: string; category?: any }): string {
  const parts: string[] = [];
  if (item.name) parts.push(item.name);
  if (item.title) parts.push(item.title);
  if (item.destination) {
    if (typeof item.destination === 'string') parts.push(item.destination);
    else if (item.destination.name) parts.push(item.destination.name);
  }
  if (item.country) parts.push(item.country);
  if (item.category) {
    if (typeof item.category === 'string') parts.push(item.category);
    else if (item.category.name) parts.push(item.category.name);
  }
  return parts.filter(Boolean).join(" ");
}

export function getDestinationImage(dest: any): string {
  if (!dest) return GENERIC_TRAVEL;
  return resolveImage('destination', dest.slug || dest.name, dest.image);
}

export function getPackageImage(pkg: any): string {
  if (!pkg) return GENERIC_TRAVEL;
  return resolveImage('package', pkg.slug || pkg.title, pkg.thumbnail || pkg.coverImage || pkg.images?.[0]);
}

export function getCategoryImage(cat: any): string {
  if (!cat) return GENERIC_TRAVEL;
  return resolveImage('category', cat.slug || cat.name, cat.image);
}
