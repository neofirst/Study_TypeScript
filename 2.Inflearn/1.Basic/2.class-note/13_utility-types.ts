interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  somthing: object;
}

const fetchProducts = (): Promise<Product[]> => {};

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

//Pick
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
const displayProductDetail = (
  shoppingItem: Pick<Product, "id" | "name" | "price">
) => {};

//Omit
//Pick과 반대 개념
const omitTemp: Omit<Product, "brand" | "stock"> = {
  id: 1,
  name: "name",
  price: 2,
  somthing: { test: "test" },
};

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
//interfect UpdateProduct와 동일 효과
type UpdateProduct = Partial<Product>;
const updateProductItem = (productItem: Partial<Product>) => {};

// Patial 구현
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// 1번
type UserProfileUpdate = {
  username: UserProfile["username"];
  email: UserProfile["email"];
  profilePhotoUrl: UserProfile["profilePhotoUrl"];
};

// 2번 Mapped Type
type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};
type UserProfileKeys = keyof UserProfile;

// 3번
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 4번
type Subset<T> = {
  [p in keyof T]?: T[p];
};
