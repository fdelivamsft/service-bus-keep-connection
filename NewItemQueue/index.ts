import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import serviceBusService from "../Service/serviceBusService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    await serviceBusService.send();

    const responseMessage = "New item added";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;