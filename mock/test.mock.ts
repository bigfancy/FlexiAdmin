import { defineMock } from "./base";

export default defineMock([
  {
    url: "test",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        time: new Date().toISOString(),
        message: "Mock server is working"
      }
    }
  }
]); 