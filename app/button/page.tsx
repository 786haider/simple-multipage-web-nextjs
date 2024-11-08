export default function Button(){
    return(
        <>
        <>
  <title>Hover Button</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n            button {\n            width: 9em;\n            position: relative;\n            height: 2.2em;\n            border: 3px ridge #149CEA;\n            outline: none;\n            background-color: transparent;\n            color: white;\n            transition: 1s;\n            border-radius: 0.5em;\n            font-size: 16px;\n            font-weight: bold;\n            cursor: pointer;\n        }\n\n        button::after {\n            content: "";\n            position: absolute;\n            top: -10px;\n            left: 3%;\n            width: ;\n            height: ;\n            background-color: #212121;\n            transition: 0.5s;\n            transform-origin: center;\n        }\n\n        button::before {\n            content: "";\n            transform-origin: center;\n            position: absolute;\n            top: 80%;\n            left: 3%;\n            width: ;\n            height: ;\n            background-color: #212121;\n            transition: 0.5s;\n        }\n\n        button:hover::before, button:hover::after {\n            transform: scale(0)\n        }\n\n        button:hover {\n            box-shadow: inset 0px 0px 25px #1479EA;\n        }\n    '
    }}
  />
  <button className="ml-80"><b><i>Order Us</i></b></button>
</>

        </>
    )
}