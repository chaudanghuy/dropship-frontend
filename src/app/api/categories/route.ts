import { type NextRequest, NextResponse } from "next/server";
import { categories, getProductsByCategory } from "@/data/sample-data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeProductCount =
      searchParams.get("includeProductCount") === "true";

    let categoriesData = [...categories];

    // Add product count if requested
    if (includeProductCount) {
      categoriesData = categoriesData.map((category) => ({
        ...category,
        productCount: getProductsByCategory(category.id).length,
      }));
    }

    return NextResponse.json({
      success: true,
      data: categoriesData,
      total: categoriesData.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Categories API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
