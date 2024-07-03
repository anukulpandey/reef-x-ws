// Copyright 2017-2024 @anukulpandey/reef-x-ws authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { exposeGlobal } from '@polkadot/x-global';
import { WebSocket } from './browser.js';
exposeGlobal('WebSocket', WebSocket);
