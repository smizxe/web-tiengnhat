import * as React from 'react';
import { HTMLMotionProps } from 'framer-motion';

declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'iconify-icon': any;
            }
        }
    }
}

// Bổ sung cho framer-motion nhận diện custom web components
declare module 'framer-motion' {
    export interface CustomDomComponent<Props> {
        (props: Props): React.ReactElement;
    }
}
