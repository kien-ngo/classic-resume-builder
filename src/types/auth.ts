export type TUserInfoProps = {
  creationTime: TSupabaseDateTimeString;
  displayName: string;
  email: TEmail;
  photoUrl: string | null;
  providerId: string | null; //
  firstName: string | null;
  lastName: string | null;
  emailVerified: boolean;
};

// 2023-03-10 01:25:37.832954
type TSupabaseDateTimeString = `${number}-${number}-${number} ${number}:${number}:${number}.${number}`;

export type TSupabaseUuidString = `${string}-${string}-${string}-${string}-${string}`;

export type TEmail = `${string}@${string}.${string}`;

export type TSecuredUrl = `https://${string}.${string}` | `ipfs://${string}`;
