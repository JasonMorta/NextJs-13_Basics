// Importing the 'users' array from the parent directory's 'route' module.
// This array is assumed to contain user objects with an 'id' property.
import { users } from "../route";

/**
 * Handles HTTP GET requests to fetch a user by their ID.
 * 
 * @param _request - The incoming HTTP request object (unused in this function). The underscore (_request) is a common convention in JavaScript/TypeScript to indicate that a parameter is intentionally unused in the function.
 * @param params - An object containing route parameters, specifically the 'id' of the user.
 * @returns A JSON response containing the user object if found, otherwise undefined.
 */
export async function GET(request: Request, { params }: { params: { id: string } }) {

  // Extracting 'id' from the route parameters.
  const { id } = await params; 

  // Finding the user in the 'users' array by converting the 'id' parameter to a number.
  // Note: parseInt(id) should be used carefully, as it may produce NaN for invalid inputs.
  const user = users.find(user => user.id === parseInt(id));

  // return found or not found user
  if (user) {
    // Returning the found user as a JSON response.
  // If the user is not found, this will return 'null' in JSON format.
    return Response.json(user);
  } else {
    // Returning a 404 response if the user is not found.
    return new Response(JSON.stringify({
      error: "User not found",
      requestType: request.method,
      requestObject: request,
    }), { status: 404 });
  }
  

  
}
