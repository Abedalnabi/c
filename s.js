/** components *****************************************************************************************************************************/
// start components

/* start dataDisplay */

export declare namespace Avatar{
    function Avatar(
        src:string,
        alt:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"circle"|"oval"|"square"|"rectangle"|"pentagon"|"hexagon"|"heptagon"|"octagon"|"star"|"topChevron"|"leftChevron"|"bottomChevron"|"rightChevron"| string,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Badge{
    function Badge(
        content:string,
        vertical:"top" | "bottom",
        horizontal: "left" | "right",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"dot"|"default"| string,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Chip{
    function Chip(
        label:string,
        icon:string,
        avatar:JSX.Element,
        endIcon:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        size:"sm" | "md",
        mode:"outlined" | "filled",
        eventClicked:Function,
        eventIconClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Counter{
    function Counter(
        count: number | string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Modal{
    function Modal(
        open:boolean,
        eventClose:Function,
        size: "xl" | "lg" | "md" | "sm" | "xs" | "fluid" | "half",
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace ModalHeader{
    function ModalHeader(
        closeIcon: string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace ModalBody{
    function ModalBody(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace ModalFooter{
    function ModalFooter(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Table{
    function Table(
        mobileMode:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace TableHead{
    function TableHead(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace TableBody{
    function TableBody(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace TableFooter{
    function TableFooter(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace TableRow{
    function TableRow(
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace TableCell{
    function TableCell(
        headLabel:string,
        rowSpan: number | string,
        colSpan: number | string,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Tooltip{
    function Tooltip(
        title:string,
        position: "top" | "left" | "bottom" | "right",
        mode: "arrow" | "default",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Typography{
    function Typography(
        as:"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline",
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace VideoPlayer{
    function VideoPlayer(
        src:string,
        imageSrc:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
/* end dataDisplay */

/* start navigation */
export declare namespace AppBar{
    function AppBar(
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        sideBarColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        sideBarTextColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        position: "fixed" | "relative" | "static" | "absolute" | "sticky",
        sideBarTitle:string | JSX.Element,
        sideBarMode: "overlay" | "overlay-opacity" | "show-header",
        justify:"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly",
        isClose:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace GroupBar {
    function GroupBar (
        logoTextDir:"top" | "start" | "bottom" | "end",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        pathPages:object,
        position:"start" | "end",
        sxMode:"logo" | "sidebar" | "navbar" | "bottomBar" | "none",
        ssMode:"logo" | "sidebar" | "navbar" | "bottomBar" | "none",
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace Nav{
    function Nav(
        content:string,
        ssMode:string,
        label:string,
        path:string,
        headItem:JSX.Element,
        headItemPosition:"top" | "start" | "bottom" | "end",
        footerItem:JSX.Element,
        menu:object,
        badge:boolean,
        icon:string,
        iconSize: string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Breadcrumbs{
    function Breadcrumbs(
        separator:"/" | "|" | "-" | "*" | JSX.Element | "string",
        breadcrumbs:object,
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace BtnGoToTop{
    function BtnGoToTop(
        icon:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        position:"left" | "right",
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}



export declare namespace Menu{
    function Menu(
        open:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace MenuItem{
    function MenuItem(
        headItem:JSX.Element,
        eventClicked:Function,
        footerItem:JSX.Element,
        outlined:boolean,
        selected:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace ParallaxScrolling{
    function ParallaxScrolling(
        src:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string):(props: any) => JSX.Element;
}

export declare namespace Slideshow{
    function Slideshow(
        slides:object,
        autoShow:boolean,
        delay:string | number,
        activeColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        dotsShow:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string):(props: any) => JSX.Element;
}

export declare namespace SpeedDial{
    function SpeedDial(
        icon:string,
        openIcon:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
        ):(props: any) => JSX.Element;
}
export declare namespace SpeedDialAction{
    function SpeedDialAction(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
        ):(props: any) => JSX.Element;
}

export declare namespace Stepper{
    function Stepper(
        mode: "default" | "isVertical" | "isInline" | "dot",
        stepperContent:object,
        currentTab:number | string,
        completedColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        activeColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        stepClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string):(props: any) => JSX.Element;
}

export declare namespace Tab{
    function Tab(
        tabsContent:object,
        currentTab: number | string,
        activeColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode: "nav" | "box" | "pill" | "vertical",
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
/* end navigation */

/* start feedback */
export declare namespace Alert{
    function viewAlert(
        message:string, 
        type:"warning" | "error" | "info" | "success",
        vertical:"top" | "center" | "bottom", 
        horizontal:"left" | "center" | "right", 
        fade:boolean,
        canClose:boolean
    ):undefined;
}

export declare namespace Confirmation{
    function viewConfirmation(
        message:string,
        targetFunction:Function,
        cancelFunction:Function,
        acceptLabel:string,
        cancelLabel:string
    ):undefined;
}

export declare namespace Note{
    function Note(
        type:"warning" | "error" | "info" | "success",
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
/* end feedback */

/* start input */

export declare namespace Button{
    function Button(
        label:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        size:"lg" | "md" | "sm",
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        iconSize:string,
        endIcon:string,
        buttonAdornment:string,
        endAdornment:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"outlined" | "contained" | "link",
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Text{
    function Text(
        eventChange:Function,
        eventFocus:Function,
        eventBlur:Function,
        value:object,
        defaultValue:string,
        inputRef:object,
        readOnly:boolean,
        label:string,
        errorMessage:string,
        placeholder:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        endIcon:string,
        inputAdornment:string,
        endAdornment:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"placeholder" | "outlined" | "noOutlined",
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string,
        as:string,
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        eventClicked:Function,
        maxWord:number | string,
        objLang:object,
        currentLang:string,
        getCurrentValue:Function,
        canEdit:boolean,
        allRequired:boolean,
        setCurrentLang:Function,

    ):(props: any) => JSX.Element;
}

export declare namespace TextArea{
    function TextArea(
        eventChange:Function,
        eventFocus:Function,
        eventBlur:Function,
        value:object,
        defaultValue:string,
        inputRef:object,
        readOnly:boolean,
        label:string,
        errorMessage:string,
        placeholder:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        endIcon:string,
        inputAdornment:string,
        endAdornment:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"placeholder" | "outlined" | "noOutlined",
        line:number | string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string,
        as:string,
        textColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        eventClicked:Function,
        maxWord:number | string,
        objLang:object,
        currentLang:string,
        getCurrentValue:Function,
        canEdit:boolean,
        allRequired:boolean,
        setCurrentLang:Function,
    ):(props: any) => JSX.Element;
}

export declare namespace Password{
    function Password(
        id:string,
        label:string,
        placeholder:string,
        errorMessage:string,
        eventChange:Function,
        eventFocus:Function,
        eventBlur:Function,
        mode:"placeholder" | "outlined" | "noOutlined",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        inputAdornment:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        inputRef:object,
        readOnly:boolean
    ):(props: any) => JSX.Element;
}

export declare namespace Checkbox{
    function Checkbox(
        id:string,
        label:string,
        errorMessage:string,
        eventChange:Function,
        checkMode:"tick" | "cross" | "indeterminate",
        display:"inline" | "block",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        inputAdornment:string,
        options:object,
        defaultValue:object,
        ss:object,
        sx:object,
        optionStyle:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        inputRef:object
    ):(props: any) => JSX.Element;
}

export declare namespace RadioButtons{
    function RadioButtons(
        id:string,
        label:string,
        errorMessage:string,
        eventChange:Function,
        checkMode:"colored" | "border",
        display:"inline" | "block",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        inputAdornment:string,
        options:object,
        defaultValue:object,
        ss:object,
        sx:object,
        optionStyle:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        inputRef:object
    ):(props: any) => JSX.Element;
}

export declare namespace DatePicker{
    function DatePicker(
        eventChange:Function,
        eventFocus:Function,
        eventBlur:Function,
        value:string | object,
        defaultValue:string | object,
        inputRef:object,
        readOnly:boolean,
        label:string,
        errorMessage:string,
        placeholder:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        endIcon:string,
        inputAdornment:string,
        endAdornment:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"placeholder" | "outlined" | "noOutlined",
        min:"2023-06-01" | string,
        max: "2023-06-01" | string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}


export declare namespace List{
    function List(
        eventChange:Function,
        eventFocus:Function,
        eventBlur:Function,
        value:object,
        defaultValue:string,
        inputRef:object,
        readOnly:boolean,
        label:string,
        errorMessage:string,
        placeholder:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        endIcon:string,
        inputAdornment:string,
        endAdornment:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"placeholder" | "outlined" | "noOutlined",
        options:object,
        optionStyle:object,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace MultipleList{
    function MultipleList(
        eventChange:Function,
        eventFocus:Function,
        eventBlur:Function,
        value:object,
        defaultValue:string,
        inputRef:object,
        readOnly:boolean,
        label:string,
        errorMessage:string,
        placeholder:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        endIcon:string,
        inputAdornment:string,
        endAdornment:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        mode:"placeholder" | "outlined" | "noOutlined",
        checkMode:"tick" | "cross" | "indeterminate",
        options:object,
        optionStyle:object,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Rating{
    function List(
        eventChange:Function,
        value:object,
        defaultValue:string,
        label:string,
        errorMessage:string,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        icon:string,
        iconSize:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
/* end input */


/***** * layout * start *****/

export declare namespace Grid{
    function Grid(
        container:boolean,
        item:boolean,
        xs:number,
        sm:number,
        md:number,
        lg:number,
        xl:string,
        spacing:number,
        alignItems:string,
        alignSelf:string,
        justify:string,
        direction:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Container{
    function Container(
        width:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace Box{
    function Box(
        textColor:string,
        color:string,
        outline:number,
        hoverElevation:number,
        shadow:number,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace Line{
    function Line(
        label:string,
        mode:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
/***** * layout * end *****/

/***** * surfaces * start *****/
export declare namespace Accordion{
    function Accordion(
        children:(props: any) => JSX.Element,
        ariaControl:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace AccordionDetails{
    function AccordionDetails(
        children:(props: any) => JSX.Element,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace AccordionSummary{
    function AccordionSummary(
        children:(props: any) => JSX.Element,
        expandIcon:string,
        open:boolean,
        arrowIcon:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace AccordionTab{
    function AccordionTab(
        children:(props: any) => JSX.Element,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Card{
    function Card(
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace CardBack{
    function CardBack(
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace CardFront{
    function CardFront(
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace CardDetails{
    function CardDetails(
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
export declare namespace CardImage{
    function CardImage(
        src:string,
        title:string,
        hoverContent:(props: any) => JSX.Element,
        eventClicked:Function,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Glass{
    function Glass(
        color:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Loader{
    function Loader(
        mode:"noBorder" | "borderTop" | "doubleBorder",
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        backdrop:boolean,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}

export declare namespace Paper{
    function Paper(
        elevation:"0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|0|1|2|3|4|5|6|7|8|9,
        width: "xl" | "lg" | "md" | "sm" | "fluid" |"half",
        outline:"0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|0|1|2|3|4|5|6|7|8|9,
        eventClicked:Function,
        color:string,
        ss:object,
        sx:object,
        hidden:boolean,
        disabled:boolean,
        dir:"rtl"|"ltr",
        className:string,
        id:string
    ):(props: any) => JSX.Element;
}
/***** * surfaces * end *****/
// end components


/********************************************************************************************************************/

/***** * Icon * start *****/

    export declare namespace Icon{
        function Icon(
            icon:string,
            color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
            size:string,
            title:string,
            ss:object,
            sx:object,
            hidden:boolean,
            disabled:boolean,
            dir:"rtl"|"ltr",
            className:string,
            id:string,
            eventClicked:Function
        ):(props: any) => JSX.Element;
    }

/***** * Icon * end *****/

/********************************************************************************************************************/

/***** * formApi * start *****/

export declare namespace useForm{
    function useForm(formState:object, setFormState:Function):Function;
    function getCurrentFormValues():Function;
    function getValueByStateName(stateName:string):Function;
    function eventInputValue(stateName:string, newTextInput:string):Function;
    function eventAddCheckboxValue(newPairValue:object, stateName:string):Function;
    function eventDeleteCheckboxValue(key:string, stateName:string):Function;
    function eventInputError(stateName:string,newError:string):Function;
    function eventButtonReset():Function;
    function eventButtonNext():Function;
    function eventButtonPrevious():Function;
    function isFormValid():Function;
    function getCurrentFormStep():Function;
}

export declare namespace FormControl{
    function FormControl(control:string,
        placeholder:string,errorMessage:string,eventChange:Function,eventFocus:Function,eventBlur:Function,
        as:string,maxWord:number,objLang:object,currentLang:string,getCurrentValue:Function,canEdit:boolean,allRequired:boolean,setCurrentLang:Function,
        value:object,defaultValue:object,inputRef:object,readOnly:boolean,line:number,options:object,
        label:string,color:string,size:string,textColor:string,icon:string,iconSize:string,endIcon:string,inputAdornment:string,endAdornment:string,iconColor:string,mode:string,eventClicked:Function,ss:object,sx:object,hidden:boolean,disabled:boolean,dir:"rtl"|"ltr",className:string,id:string
        ):(props: any) => JSX.Element;
}
/***** * formApi * end *****/

/********************************************************************************************************************/


/*** react reouter * start */
import React from "react"

export declare function BrowserRouter( basename?: string,children?: React.ReactNode,window?: Window):(props: any) => JSX.Element;

export declare function Navigate( to: string):(props: any) => JSX.Element;

export declare function Outlet(context?: unknown):(props: any) => JSX.Element;

export declare function Route(basename?: string, children?: React.ReactNode, location: Partial<Location> | string, navigationType?: NavigationType, navigator: Navigator, static?: boolean):(props: any) => JSX.Element;

export declare function Routes(basename?: string, children?: React.ReactNode, location: Partial<Location> | string,  navigationType?: NavigationType, navigator: Navigator, static?: boolean):(props: any) => JSX.Element;

export declare function createBrowserRouter(routes: RouteObject[], opts?: { basename?: string; hydrationData?: HydrationState; window?: Window;}): Router;

export declare function createRoutesFromChildren(children: React.ReactNode, parentPath?: number[]): RouteObject[];

export declare function createRoutesFromChildren(children: React.ReactNode, parentPath?: number[]): RouteObject[];

export declare function RouterProvider(fallbackElement?: React.ReactNode,router: Router,): React.ReactElement

export declare function enhanceManualRouteObjects(routes: RouteObject[]): RouteObject[];

/* just For org end*/

/***** * SecureRoute * start *****/
export namespace SecureRoute{
    function SecureRoute(routingConfig:object, userRole : object | string | number | undefined,strRoleType: "blnMultiFlag" | "defaultRole", errorPath :string, userStatus :string | number | undefined, isTesting :boolean | undefined): (props: any) => JSX.Element;
   
    const SECURE_ROUTE_ROLE_TYPE:{
       defaultRole: "defaultRole",
       blnMultiFlag: "blnMultiFlag",
     };
}

/***** * SecureRoute * end *****/

/********************************************************************************************************************/


/***** * ClientFunction * start *****/
export declare namespace ClientFunction{
    function blnIsTodayBiggerThanTheDate(theDate:Date) :boolean;
    function isDate(theDate:Date) :boolean;
    function getCurrentDate():object;
    function getISODate(theDate:Date, time_OR_date_OR_all:string):object;
    function getSpecificDateFromNow(after_OR_before:string,second_OR_minute_OR_hour_OR_day_OR_month_OR_year:string,number:number,currentDate:Date):object;
    function checkParseObject(object:object):object;
    function checkObject(object:object):object;
    function checkNumber(number:number):number;
    function getRandomNumber(number:number):number;
    function safeInvoke(theObject:object, strKeyNameTarget:string):object;
    function trimDash(value:string):String;
    function encryptText(strPlaintText:string, strKeyOfEncrypt:string):string
    function decryptText(strCipherText:string, strKeyOfDecrypt:string):string
    function setAppLocalStorage(appStateObject:object, strLocalStorageName:string, blnIsEncrypted:boolean, strEncryptKey:string):object
    function getAppLocalStorage(strLocalStorageName:string, blnIsEncrypted:boolean, strEncryptKey:string):object;
    function clearLocalStorageObject(appStateObject:object,LocalStorageName:string,LocalStorageIsEncrypted:boolean,LocalStoragePrivateKey:string):object;
    function setAppSessionStorage(object:object, strSessionStorageName:string, blnIsEncrypted:boolean, strEncryptKey:string):object
    function getAppSessionStorage(strSessionStorageName:string, blnIsEncrypted:boolean, strEncryptKey:string):object;
    function clearSessionStorageObject(object:object,SessionStorageName:string,SessionStorageIsEncrypted:boolean,SessionStoragePrivateKey:string):object;
    function checkFileName(objFile:object, strAlternativeName:string):object
    function addDaysToDate(date:Date, days:number):object
    function getDifferenceBetweenTwoDate(dtmOldestDate:Date, dtmNewestDate:Date, strIntervalReturnValue:string):number
    function resizeImg( lstFileList:FileList | any[],intMaxWidth:number, intMaxHeight:number, fltQuality:number,strImgType:string, blnForceResize:boolean, blnShowPreview:boolean, blnDownloadAfterConvert:boolean):object;
    function processFile(objFile:File, intIndex:number, intMaxWidth:number, intMaxHeight:number, fltQuality:number, strImgType:string, blnForceResize:boolean, blnShowPreview:boolean):Promise<string | false>;
    function copyTextToClipboard(copyText:string):undefined

}
/***** * ClientFunction * end *****/


/***** * ClientData * start *****/
export declare namespace Data{
    function fetchData(strURL:string, strPageInfo:string, queryName:string, newQuery:object):Promise<{response:any, blnIsRequestSuccessful:boolean}>;
    function fetchFiles(strPageInfo:string, strUploadFileLink:string, userFiles:object,userData:object):object;
    function uploadFile(strPageInfo:string,strUploadFileLink:string, lstFiles:object, fileType:string,objUploadConfig:object):object;
    function fetchGenericPost(strURL:string, strPageInfo:string, body:object):object;
}
/***** * ClientData * end *****/

/***** * ClientTest * start *****/
export declare namespace ClientTest{
    function ViewAlert(strMessage:string,App_IsInTestingMode:boolean):object;
    function ThrowError(error:string,App_IsInTestingMode:boolean):object;
    function logMessage(strPageName:string, strTitle:string, strMessage,App_IsInTestingMode:boolean):object;
}
/***** * ClientTest * end *****/

/***** * ClientDirection * start *****/
export declare namespace ClientDirection{
    function setDirection(dir:string):undefined;
}
/***** * ClientDirection * end *****/

/***** * ClientNotification * start *****/
export declare namespace ClientNotification{
    function offlineNotification(title:string, option:NotificationOptions, isTest:boolean):undefined;
    function pushNotification(strSubscribeLink:string, strGetPublicKeyLink:string, strServerWorkerPath:string, isTest:boolean):object | undefined;
    function unregisterServiceWorker(isTest:boolean):undefined;
    function pushNotificationForMe(strSubscribeLink:string, strGetPublicKeyLink:string, strServerWorkerPath:string,isTest:boolean):object | undefined;
    function registerPushServiceWorker(strSetSubscriptionLink:string, strGetPublicKeyLink:string, strServerWorkerPath:string,isTest:boolean):object | undefined;

}
/***** * ClientNotification * end *****/

/***** * AppProvider * start *****/
export declare namespace AppProvider{
    function AppProvider(
        appInitialState: any,
        AppContext: any,
        strAppLocalStorageName: string,
        blnIsEncrypt: boolean,
        strEncryptKey: string,
        blnIsTestingMode:boolean | undefined
    ):(props: any) => JSX.Element;

}
/***** * AppProvider * end *****/


/***** * InfiniteScroll  * start *****/

export declare namespace InfiniteScroll{
    function InfiniteScroll(
        data:object, 
        Component:object,
        itemNumber:number | string
    ):(props: any) => JSX.Element;

}
/***** * InfiniteScroll  * end *****/


/********************************************************************************************************************/

// hooks ------->

/***** * useCheckUserLoginKey * start *****/
export declare namespace useCheckUserLoginKey{
    function useCheckUserLoginKey(
        appState:any,
        intHourToCheckCheck:number,
        funFetchFunction:() => Promise<{blnIsRequestSuccessful:boolean,
             response:any}>,
        strPathPublicPage:string,
        strLocalStorageName:string,
        blnIsTestingMode:boolean,
        objEncryptOption:{blnIsAppStateEncrypt:boolean, strSecretKey:string}
    ):null;

}
/***** * useCheckUserLoginKey * end *****/


/********************************************************************************************************************/
// API ------->

export declare namespace ChatBot{
    function ChatBot(
        chat:object,
        errorMsg:string,
        mode:"full" | "default",
        positionHorizontal:"right" | "left",
        positionVertical:"top" | "bottom",
        blnAgentImg:boolean,
        icon:string,
        iconColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        iconSize:string,
        avatarColor:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        avatarSize:object,
    ):(props: any) => JSX.Element;

}


export declare namespace PermissionControl{
    function PermissionControl(
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        lang:"eng" | "arb",
        blnBackUrl:boolean,
        appPermissionState:object,
        viewLst:object,
        changeAppPermissionState:Function,
    ):(props: any) => JSX.Element;

}

export declare namespace Uploader{
    function Uploader(
        images:object,
        setImages:Function, 
        maxImage: number | string,
        maxSizeKB:number | string,
        maxWidth:string,
        maxHeight:string,
        quality:number | string,
        changeAppPermissionState:Function,
    ):(props: any) => JSX.Element;

}

export declare namespace ManageCategories{
    function ManageCategories(
        categoriesList:object,
        handleSubmit:Function,
        handleUpdate:Function,
        color:"primary" | "secondary" | "success" | "info" | "warning" | "error" | "light" | "dark" | string,
        rootID:number | string,
    ):(props: any) => JSX.Element;
}






