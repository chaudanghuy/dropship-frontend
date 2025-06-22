import { type NextRequest, NextResponse } from "next/server";
import { products } from "@/data/sample-data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: productId } = await params;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Product API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
