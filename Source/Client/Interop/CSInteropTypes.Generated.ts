/*!
 * Copyright (c) 2018 Omar Tawfik. All rights reserved. Licensed under the MIT License. See LICENSE file in the project root for license information.
 */

/// <summary>
/// This file is auto-generated by a build task. It shouldn't be edited by hand.
/// </summary>

// Definition of this file is not published yet to somewhere we can consume. Declare for now:
// https://github.com/aspnet/Blazor/issues/1452
// https://github.com/aspnet/Blazor/blob/0.5.1/src/Microsoft.JSInterop/JavaScriptRuntime/src/Microsoft.JSInterop.ts
export declare module DotNet {
    function invokeMethodAsync<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): Promise<T>;
}

export module CSIntrop {
    export module Graphics {
        export function notifyButtonClicked(buttonName: string): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyButtonClicked", buttonName).then(() => {
                Promise.resolve();
            });
        }

        export function notifyTextBoxControlEntry(textBoxName: string): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyTextBoxControlEntry", textBoxName).then(() => {
                Promise.resolve();
            });
        }

        export function notifyGraphicsWindowTextEntry(keyCode: number): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyGraphicsWindowTextEntry", keyCode).then(() => {
                Promise.resolve();
            });
        }

        export function notifyKeyDown(keyCode: number): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyKeyDown", keyCode).then(() => {
                Promise.resolve();
            });
        }

        export function notifyKeyUp(keyCode: number): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyKeyUp", keyCode).then(() => {
                Promise.resolve();
            });
        }

        export function notifyMouseDown(x: number, y: number): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyMouseDown", x, y).then(() => {
                Promise.resolve();
            });
        }

        export function notifyMouseMove(x: number, y: number): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyMouseMove", x, y).then(() => {
                Promise.resolve();
            });
        }

        export function notifyMouseUp(x: number, y: number): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.Graphics.NotifyMouseUp", x, y).then(() => {
                Promise.resolve();
            });
        }
    }

    export module File {
        export function reportFileError(error: string): Promise<void> {
            return DotNet.invokeMethodAsync<boolean>("SuperBasic.Editor", "CSIntrop.File.ReportFileError", error).then(() => {
                Promise.resolve();
            });
        }
    }
}