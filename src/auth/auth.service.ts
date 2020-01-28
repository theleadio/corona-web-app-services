import { Injectable, Global } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { decode, verify } from 'jsonwebtoken';

/* exp token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyNTQ3Njk1NTUxOTI0MDkxIiwiZXhwIjoxNTYyNzQxOTQ5fQ.tQITv_P7oRZkCCY7_7YhIi35aFnlMYAxZMMCeYqKaxs
*/

@Global()
@Injectable()
export class AuthService {

    constructor(private readonly configService: ConfigService) { }

    async verifyAccessToken(openid: string, accessToken: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            verify(accessToken, this.configService.jwtSignKey, (err, decoded: { nameid: string, exp: number }) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (decoded.nameid) {
                    resolve(decoded.nameid === openid);
                    return;
                }
                reject(false);
            });
        });
    }

    async verifyAPIKey(request: any): Promise<boolean> {
        console.log(`apikey: ${request.query.apikey}`);
        const apikey = this.configService.apiKey;
        return apikey === request.query.apikey;
    }
}
