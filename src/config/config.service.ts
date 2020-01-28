import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';
import * as path from 'path';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    let pathlocal = filePath;
    if (!filePath) {
      pathlocal = path.resolve('./', '.env', `development.env`);
    }
    const config = dotenv.parse(fs.readFileSync(pathlocal));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      PORT: Joi.number().default(3000),
      API_AUTH_ENABLED: Joi.boolean().required(),
      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.number().default(3306),
      DB_USER: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_NAME: Joi.string().required(),
      DB_TYPEORM_SYNC: Joi.boolean().default(false),
      DB_TYPEORM_LOG: Joi.boolean().default(true),
      REDIS_PORT: Joi.number().default(6379),
      REDIS_URL: Joi.string().required(),
      JWT_SIGN_KEY: Joi.string().required(),
      API_KEY: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get nodeENV(): string {
    return process.env.NODE_ENV;
  }

  get isDev(): boolean {
    return process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
  }

  get isApiAuthEnabled(): boolean {
    return Boolean(this.envConfig.API_AUTH_ENABLED);
  }

  get dbHost(): string {
    return this.envConfig.DB_HOST;
  }

  get dbPort(): number {
    return Number(this.envConfig.DB_PORT);
  }

  get dbUser(): string {
    return this.envConfig.DB_USER;
  }

  get dbPassword(): string {
    return this.envConfig.DB_PASSWORD;
  }

  get dbName(): string {
    return this.envConfig.DB_NAME;
  }

  get dbSYNC(): boolean {
    return Boolean(this.envConfig.DB_TYPEORM_SYNC);
  }

  get dbLogging(): boolean {
    return Boolean(this.envConfig.DB_TYPEORM_LOG);
  }

  get redisPort(): number {
    return Number(this.envConfig.REDIS_PORT);
  }

  get redisURL(): string {
    return this.envConfig.REDIS_URL;
  }

  get jwtSignKey(): string {
    return this.envConfig.JWT_SIGN_KEY;
  }

  get apiKey(): string {
    return this.envConfig.API_KEY;
  }
}
