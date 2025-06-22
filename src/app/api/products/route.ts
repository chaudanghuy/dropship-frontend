import { type NextRequest, NextResponse } from "next/server";
import {
  products,
  searchProducts,
  getProductsByCategory,
} from "@/data/sample-data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const sortBy = searchParams.get("sortBy");
    const limit = searchParams.get("limit");

    let filteredProducts = [...products];

    // Apply search filter
    if (search) {
      filteredProducts = searchProducts(search);
    }

    // Apply category filter
    if (category && category !== "all") {
      filteredProducts = getProductsByCategory(category);
    }

    // Apply price range filter
    if (minPrice || maxPrice) {
      const min = minPrice ? Number.parseFloat(minPrice) : 0;
      const max = maxPrice
        ? Number.parseFloat(maxPrice)
        : Number.POSITIVE_INFINITY;
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    // Apply sorting
    if (sortBy) {
      switch (sortBy) {
        case "name":
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "price-low":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "category":
          filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
          break;
      }
    }

    // Apply limit
    if (limit) {
      const limitNum = Number.parseInt(limit);
      filteredProducts = filteredProducts.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Products API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
