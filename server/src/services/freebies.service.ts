import path from "node:path";
import {Freebie} from "@models/freebie";
import fs from "fs/promises";
import {BeehiivService} from "./beehiiv.service";
import {Resend} from "resend";


export class FreebieService {
    private keysPath = path.join(__dirname, '../../data/freebies_access_keys.json');
    private freebiesPath = path.join(__dirname, '../../data/freebies.json');

    private beehiivService = new BeehiivService();
    private resend = new Resend("re_UNtvUnwV_PoE99mHCp8rveBXW7T5R1ZQ4");

    // 1. Generate a key, send the email, but only save the key
    async subscribe(name: string, email: string): Promise<void> {

        await this.beehiivService.subscribeToBeehiiv(email, name);

        const rawData = await fs.readFile(this.keysPath, 'utf-8');
        const authorizedKeys: string[] = JSON.parse(rawData);

        // Generate the unique access key
        const accessKey = crypto.randomUUID();

        // Save ONLY the key to your ledger
        authorizedKeys.push(accessKey);
        await fs.writeFile(this.keysPath, JSON.stringify(authorizedKeys, null, 2));

        /** * LOGIC:
         * 1. Trigger the Email Service here (using name and email).
         * 2. Once the function finishes, the name/email variables are
         * garbage collected. They never touch your permanent storage.
         */
        console.log(`MAILER: Sending key ${accessKey} to ${email}`);

        const { error } = await this.sendVaultKey(email, name, accessKey);

        if (error) {
            throw new Error(`Messenger failed: ${error.message}`);
        }
        console.log('Succesfully sent email.')
    }

    // 2. Simple check: Is this key in our list of strings?
    async validateKey(key: string): Promise<boolean> {
        const rawData = await fs.readFile(this.keysPath, 'utf-8');
        const authorizedKeys: string[] = JSON.parse(rawData);
        return authorizedKeys.includes(key);
    }

    async getFreebies(): Promise<Freebie[]> {
        const rawData = await fs.readFile(this.freebiesPath, 'utf-8');
        return JSON.parse(rawData);
    }

    async sendVaultKey(email: string, name: string, accessKey: string) {
        const archiveUrl = `https://thegrainbound.com/archive?key=${accessKey}`;

        return await this.resend.emails.send({
            from: 'Tony | The Grainbound <tony@send.thegrainbound.com>',
            to: [email],
            subject: `Archive Entry Granted: ${name}`,
            // 1. THE PLAIN TEXT VERSION (Huge for deliverability)
            text: `Greetings ${name},\n\nYou have been granted access to the Grainbound internal archive. Use the link below to unlock the ledger:\n\n${archiveUrl}\n\nKey: ${accessKey}\n\nSafe travels,\nTony`,

            // 2. THE CLEAN HTML VERSION
            html: `
            <div style="font-family: 'Georgia', serif; max-width: 550px; margin: 0 auto; padding: 40px; background-color: #F5E6D3; color: #2D241E; line-height: 1.6;">
                <div style="border-bottom: 1px solid #3A4D39; padding-bottom: 20px; margin-bottom: 30px;">
                    <h1 style="font-size: 20px; text-transform: uppercase; letter-spacing: 2px; color: #3A4D39; margin: 0;">The Grainbound Archive</h1>
                </div>

                <p style="font-size: 16px;">Greetings <strong>${name}</strong>,</p>

                <p style="font-size: 16px;">
                    The request to access the internal ledger has been processed. You now have permission to view and download the current collection of worldbuilding worksheets and system frameworks.
                </p>

                <div style="margin: 40px 0;">
                    <a href="${archiveUrl}" style="background-color: #8B2622; color: #F5E6D3; padding: 14px 24px; text-decoration: none; font-family: sans-serif; font-weight: bold; font-size: 14px; display: inline-block; border-radius: 2px;">
                        UNLOCK THE LEDGER
                    </a>
                </div>

                <p style="font-size: 14px; opacity: 0.8;">
                    If the button above does not work, copy and paste this link into your browser:<br>
                    <span style="color: #8B2622;">${archiveUrl}</span>
                </p>

                <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #3A4D39; font-size: 12px; color: #3A4D39; opacity: 0.6;">
                    <p style="margin: 0;">Sent by Tony from The Grainbound</p>
                </div>
            </div>
        `,
        });
    }
}