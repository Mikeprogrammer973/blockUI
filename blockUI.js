/*!
 *JavaScript blockUI plugin
 *Version 1.77.0-2022.12.12
 *Requires CSS Boostrap framework 
 *
 *Author: Mike D. Pascal 
 *
 *Source code at: https://github.com/Mikeprogrammer973/blockUI
 *
 *Examples at: https://mikeprogrammer973.github.io/blockUI/ or https://block-ui-two.vercel.app/
 *
 *Licenced under MIT license:
 *http://www.opensource.org/licenses/mit-license.php
 *
 *
 */

;(()=>{
 
  //métodos globais pra bloquear/desbloquear a página inteira 
  blockUI = (message,prms)=>{
    adicionar(message,prms)
  }
  unblockUI = (visible)=>{
    remover(visible)
  }
  //........//
  
  "use strict"
  
  function adicionar(message,prms = {"background-color":"black","opacity":.8})
  {
    from = message.parentNode
    block_msg = message
      setTimeout(()=>{
        let vista = document.createElement("div")
        vista.setAttribute("style",`position:fixed;top:0px;left:0px;width:100%;height:100%;background-color: ${prms["background-color"]};opacity:${prms["opacity"]};`)
        vista.id="vista"
        
        if(block_msg == null)
        {
          let spinner = document.createElement("span")
          
          spinner.setAttribute("style","width:70px;height:70px;position:absolute;top:40%;left:40%;color: black;")
          spinner.setAttribute("class","spinner-border")
          
          vista.append(spinner)
        }
        else
        {
          //Verificar se a mensagem passada é válida
          if(typeof(block_msg) !== "object")
          {
            throw Error("Invalid message parameter at blockUI method!")
          }
          
          //Exibir a mensagem de bloqueio 
          try {
            block_msg.style.display = "block"
          } catch (e) {
            console.log(e.message + "\n\n" + e.stack)
            return
          }
          
          //Colocar a mensagem de bloqueio na vista
          vista.append(block_msg)
        }
        
        //Exibir bloqueio 
        document.body.append(vista)
        document.body.style.cursor="wait"
      },1000)
    }
    
    function remover(visible)
    {
      //Verificar se valor do parâmetro visible é válido 
      if(visible !== true && visible !== false)
      {
        throw Error("Invalid parameter at unblockUI method, parameter must be a boolean!")
        return
      }
      
      //Remover bloqueio 
      document.getElementById('vista').remove()
      document.body.style.cursor="default"

      //....//
      //Configuarar visibilidade do elemento da msg de bloqueio
      if(visible)
      {
        block_msg.style.display = "block"
      }
      else 
      {
        block_msg.style.display = "none"
      }
      //...//
      
      //Colocar o elemento da msg de bloqueio de volta no DOM aonde saiu 
      from.append(block_msg)
    }
})()
