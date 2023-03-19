export const returnError = (
  errorMsg: string,
  parsedResult: any,
): { success: false; error: string; parsedResult: any } => ({
  success: false,
  error: errorMsg,
  parsedResult: parsedResult,
});