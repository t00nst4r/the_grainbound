import axios from "axios";

export class BeehiivService {
    subscribeToBeehiiv = (email: string, name: string) => {


        const { BEEHIIV_API_KEY, BEEHIIV_PUB_ID } = process.env;
        const body =            {
                email,
                reactivate_existing: true,
                send_welcome_email: false,
                custom_fields: [{ name: 'Name', value: name }]
            }
        console.log(BEEHIIV_API_KEY, BEEHIIV_PUB_ID, body)


        return axios.post(
            `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
            body,
            {
                headers: {
                    'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}

