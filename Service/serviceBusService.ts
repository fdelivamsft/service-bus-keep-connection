const { ServiceBusClient } = require("@azure/service-bus");

const connectionString = process.env.SERVICE_BUS_CONNECTION;

const queueName = "messagesqueue";

const messages = [
	{ body: "Albert Einstein" },
	{ body: "Werner Heisenberg" },
	{ body: "Marie Curie" },
	{ body: "Steven Hawking" },
	{ body: "Isaac Newton" },
	{ body: "Niels Bohr" },
	{ body: "Michael Faraday" },
	{ body: "Galileo Galilei" },
	{ body: "Johannes Kepler" },
	{ body: "Nikolaus Kopernikus" }
 ];

const serviceBusService = {
    init(){
        this.sbClient = new ServiceBusClient(connectionString);
        this.sender = this.sbClient.createSender(queueName);
        console.log("Service Bus connection initiated");
    },
    async send(){
        await this.sender.sendMessages(messages);
        console.log("Service Bus, message sent");
    },
    async close(){
        await this.sender.close();
        await this.sbClient.close();
    }
}

serviceBusService.init();

export default serviceBusService;