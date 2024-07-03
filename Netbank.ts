type User = {
    name: string;
    email: string
}

enum State {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    DONE= 'ERROR'
}

enum Currency {
    DKK ='DKK',
    SEK = 'SEK',
    NOK = 'NOK',
    USD = 'USD',
    EUR = 'EUR'
}

enum PageType {
    ACCOUNT = 'ACCOUNT',
    SUPPORT = 'SUPPORT',
}


type AccountPage = {
    type: PageType.ACCOUNT;
    state: State;
}

type SupportPage = {
    type: PageType.SUPPORT;
    state: State;
}

type Page = AccountPage | SupportPage;

type BaseAccount = {
    name: string;
    iban: string;
}

enum AccountType  {
    REGULAR = 'REGULAR',
    POCKET = 'POCKET'
}

enum ChatWindowState {
    MINIMIZED = 'MINIMIZED',
    OPEN = 'OPEN',
    FULL_SCREEN = 'FULL_SCREEN'
}

enum ChatStatus {
    NOT_STARTED = 'NOT_STARTED',
    CONNECTING = 'CONNECTING',
    QUEUE_LONG = 'QUEUE_LONG',
    CLOSED = 'CLOSED'
}

type ChatInfo = {
    status: ChatStatus;
    state: ChatWindowState;
}

type Pocket = {
    currency: Currency;
    amount: number;
}

export type PocketAccount = BaseAccount & {
    type: AccountType.POCKET;
    pockets: Pocket[];
}

export type RegularAccount = BaseAccount & {
    type: AccountType.REGULAR;
    balance: number;
}

export type Accounts = PocketAccount | RegularAccount;


type NetBankState = {
    user?: User;
    page: Page;
    accounts?: Accounts;
    chat?: ChatInfo;
}

