export const fetchPosts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/posts`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error response:", errorText);
      throw new Error("Failed to Fetch Post");
    }

    const shows = await response.json();
    return shows;
  } catch (error) {
    console.error("fetchPosts error:", error);
    throw error;
  }
};

export const fetchMenus = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/menu`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error response:", errorText);
      throw new Error("Failed to Fetch Menu");
    }

    const shows = await response.json();
    return shows;
  } catch (error) {
    console.error("fetchMeus error:", error);
    throw error;
  }
};

export const fetchHomePageBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/home?slug=${slug}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error response:", errorText);
      throw new Error(`Failed to fetch page with slug: ${slug}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`fetchPageBySlug error:`, error);
    throw error;
  }
};
