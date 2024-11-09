import { GetDataApi } from "@/utils/fetcher";

export async function GET(
  _: Request,
  { params }: { params: { sku: string; } }
) {
  try {
    const res = await GetDataApi(
      `${process.env.NEXT_PUBLIC_HOST}/products/${params.sku}`
    );

    if (res.status !== 200) {
      return Response.json(res.data, { status: res.status });
    }

    return Response.json(res.data, {
      status: res.status,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
