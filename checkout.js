var loggedin_name = "";

function myFunc_fname(){
    let first_name = document.getElementById("kafirst_name").value;
    let mandatory = document.getElementById("kafname_mand"); 
    if(first_name.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_lname(){
    let last_name = document.getElementById("kalast_name").value;
    let mandatory = document.getElementById("kalname_mand"); 
    if(last_name.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_mail(){
    let mail = document.getElementById("kaemail").value;
    let mandatory = document.getElementById("kamail_mand"); 
    if(mail.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_cmail(){
    let c_mail = document.getElementById("kac_email").value;
    let mandatory = document.getElementById("kacmail_mand"); 
    if(c_mail.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_country() {
    let country = document.getElementById("kacountry").value;
    let mandatory = document.getElementById("kacontry_mand"); 
    if(country == "empty"){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
function myFunc_pass() {
    let pass = document.getElementById("kapass").value;
    let mandatory = document.getElementById("kapass_mand"); 
    if(pass.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
function myFunc_cpass() {
    let cpass = document.getElementById("kac_pass").value;
    let mandatory = document.getElementById("kacpass_mand"); 
    if(cpass.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
  


let hide1 = document.getElementById("kahidding1");
let hide2 = document.getElementById("kahidding2");
let hide3 = document.getElementById("kahidding3");
let arrow1 = document.getElementById("kaacc_arrow");
arrow1.setAttribute("style", "background: rgb(0, 132, 189)")
let arrow2 = document.getElementById("kapay_arrow");
let arrow3 = document.getElementById("kareview_arrow");

function effect(){
    let user =JSON.parse(localStorage.getItem("loggedin_user"));
    if(user.length == 0){
        hide1.setAttribute("style", "display: block");
        hide2.setAttribute("style", "display: none");
        summary();
    }else{
      hide1.setAttribute("style", "display: none");
      hide2.setAttribute("style", "display: block");
      arrow2.setAttribute("style", "background: rgb(0, 132, 189)")
    }
}

effect();

console.log('loggedin_name:', loggedin_name)

function signup(){
 
    // *************validation********* //
  
     let f_name = document.getElementById("kafirst_name").value;
     let f_name_mand= document.getElementById("kafname_mand"); 
     if(f_name.length == 0){
        f_name_mand.innerText="First name required";
        f_name_mand.setAttribute("style", "display:block");
     }else {
        f_name_mand.innerText="Required";
        f_name_mand.setAttribute("style", "display:none");
     }

     let l_name = document.getElementById("kalast_name").value;
     let l_name_mand = document.getElementById("kalname_mand"); 
     if(l_name.length == 0){
      l_name_mand.innerText="Last name required";
      l_name_mand.setAttribute("style", "display:block");
     }else {
      l_name_mand.innerText="Required";
      l_name_mand.setAttribute("style", "display:none");
     }

     let mail = document.getElementById("kaemail").value;
     let mail_mand = document.getElementById("kamail_mand"); 
     if(mail.length == 0){
      mail_mand.innerText="Mail required"
      mail_mand.setAttribute("style", "display:block");
     }else {
      mail_mand.innerText="Required"
      mail_mand.setAttribute("style", "display:none");
     }

     let c_mail = document.getElementById("kac_email").value;
     let c_mail_mand = document.getElementById("kacmail_mand"); 
     if(c_mail.length == 0){
      c_mail_mand.innerText="Mail required"
      c_mail_mand.setAttribute("style", "display:block");
     }else if(c_mail !== mail) {
        c_mail_mand.innerText="Mail Mismatch";
        c_mail_mand.setAttribute("style", "display:block");
     }else {
        c_mail_mand.innerText="Required";
        c_mail_mand.setAttribute("style", "display:none");
     }

     let signup_pass = document.getElementById("kapass").value;
     let pass_mand = document.getElementById("kapass_mand"); 
     if(signup_pass.length == 0){
     pass_mand.innerText="Password required"
     pass_mand.setAttribute("style", "display:block");
     }else if(signup_pass.length < 8){
        pass_mand.innerText="Minimum password length 8";
        pass_mand.setAttribute("style", "display:block");
     }else {
        pass_mand.setAttribute("style", "display:none");
     }  
     
  
     let signup_Cpass = document.getElementById("kac_pass").value;
     let cpass_mand = document.getElementById("kacpass_mand"); 
     if(signup_Cpass.length == 0){
      cpass_mand.innerText="Password required"
      cpass_mand.setAttribute("style", "display:block");
     }else if(signup_Cpass !==  signup_pass){
        cpass_mand.innerText="Password Mismatch"
        cpass_mand.setAttribute("style", "display:block");
       }
     else {
        cpass_mand.innerText="Required"
      cpass_mand.setAttribute("style", "display:none");
     }  

    
      // *************validation********* //
  
      if(localStorage.getItem("plural_Signup") === null){
        localStorage.setItem(("plural_Signup"), JSON.stringify([]));
        }
     if((f_name.length != 0) && (l_name.length != 0) && (mail.length != 0) && (c_mail == mail) && (signup_pass == signup_Cpass)){
      let user ={
        f_name,
        l_name,
        mail,
        signup_pass,
    };
    
     // get array from localstorage
     let array=JSON.parse(localStorage.getItem("plural_Signup"));
     //push new user to array
     array.push(user); // adding new user
    
     console.log('array:', array);
     localStorage.setItem(("plural_Signup"), JSON.stringify(array));     
     hide1.setAttribute("style", "display: none");
     hide2.setAttribute("style", "display: block");
     arrow2.setAttribute("style", "background: rgb(0, 132, 189)");
     console.log('user:', user)
     }
  }

  function payment(){
  
     let card_name = document.getElementById("kacard_name").value;
      let card_name_mand= document.getElementById("kacardnme_mand"); 
      if( card_name.length == 0){
          card_name_mand.setAttribute("style", "display:block");
       }else {
        card_name_mand.setAttribute("style", "display:none");
       }

    let card_nmbr = document.getElementById("kacard_nmbr").value;
       let card_nmbr_mand= document.getElementById("kacardnmbr_mand"); 
       if( card_nmbr.length < 12){
           card_nmbr_mand.setAttribute("style", "display:block");
        }else if( card_nmbr.length > 12){
            card_nmbr_mand.innerText = "Invalid Number"
            card_nmbr_mand.setAttribute("style", "display:block");
         }else {
            card_nmbr_mand.innerText = "Required"
          card_nmbr_mand.setAttribute("style", "display:none");
         }

    let cvv_nmbr = document.getElementById("kacvv_nmbr").value;
        let cvv_mand= document.getElementById("cvv_mand"); 
        if( cvv_nmbr.length < 3){
            cvv_mand.setAttribute("style", "display:block");
         }else if( cvv_nmbr.length > 3){
            cvv_mand.innerText = "Invalid CVV"
            cvv_mand.setAttribute("style", "display:block");
         }else {
            cvv_mand.innerText = "Required"
          cvv_mand.setAttribute("style", "display:none");
         }

      let address = document.getElementById("kaaddress").value;
       let address_mand= document.getElementById("address_mand"); 
        if( address.length == 0){
             address_mand.setAttribute("style", "display:block");
          }else {
           address_mand.setAttribute("style", "display:none");
          }

       let address1 = document.getElementById("kaaddress1").value;
          let address1_mand= document.getElementById("kaaddress1_mand"); 
           if( address1.length == 0){
                address1_mand.setAttribute("style", "display:block");
             }else {
              address1_mand.setAttribute("style", "display:none");
             }

        let card_month = document.getElementById("kacard_month").value;
        let card_year = document.getElementById("kacard_year").value;
          let date_mand= document.getElementById("kadate_mand"); 
           if( card_month == "" || card_year == "" ){
                date_mand.setAttribute("style", "display:block");
             }else {
              date_mand.setAttribute("style", "display:none");
             }

         let card_contry = document.getElementById("kacard_contry").value;
          let card_contry_mand= document.getElementById("kacard_contry_mand"); 
           if( card_contry == 0){
                card_contry_mand.setAttribute("style", "display:block");
             }else {
              card_contry_mand.setAttribute("style", "display:none");
             }

        let state = document.getElementById("kastate").value;
          let state_mand= document.getElementById("kastate_mand"); 
           if( state.length == 0){
                state_mand.setAttribute("style", "display:block");
             }else {
              state_mand.setAttribute("style", "display:none");
             }

        let city = document.getElementById("kacity").value;
          let city_mand= document.getElementById("kacity_mand"); 
           if( city.length == 0){
                city_mand.setAttribute("style", "display:block");
             }else {
              city_mand.setAttribute("style", "display:none");
             }

        let postal = document.getElementById("kapost_code").value;
             let post_mand= document.getElementById("kapost_mand"); 
             if( postal.length < 6){
                 post_mand.setAttribute("style", "display:block");
              }else if( postal.length > 6){
                 post_mand.innerText = "Invalid Postal Code"
                 post_mand.setAttribute("style", "display:block");
              }else {
                 post_mand.innerText = "Required"
               post_mand.setAttribute("style", "display:none");
              }

      
      if(localStorage.getItem("plural_payment") === null){
        localStorage.setItem(("plural_payment"), JSON.stringify([]));
      }
     
    if((card_name.length != 0) && (card_nmbr.length == 12) && (cvv_nmbr.length == 3) && (postal.length == 6) &&
        (address.length !=0) && (address1.length !=0) && (card_month != "") && (card_year !="") && (state.length != 0) && (city.length != 0)) {
       let payment_det ={
          card_name,
          card_nmbr,
          cvv_nmbr,
          card_month,
          card_year,
          city,
          state,
          postal,
       };
     
      let pay_array=JSON.parse(localStorage.getItem("plural_payment"));
     
      pay_array.push(payment_det); 
        console.log('pay_array:', pay_array);
      localStorage.setItem(("plural_payment"), JSON.stringify(pay_array));     
       hide1.setAttribute("style", "display: none");
       hide2.setAttribute("style", "display: none");
       hide3.setAttribute("style", "display: block");
       arrow2.setAttribute("style", "background: rgb(0, 132, 189)");
       arrow3.setAttribute("style", "background: rgb(0, 132, 189)");
      }
  }




  function confirm_pay() {
      
  let last_btn = document.getElementById("kabtn_final");
  let hide_final = document.getElementById("kahide_thanks");
     last_btn.setAttribute("style","display:none");
     hide_final.setAttribute("style", "display: block");
    setTimeout(() => {
      window.location.href = "./home.html";
    },3000)
  }

  

 

  function closing_note(){
    let top_note =   document.getElementById("katop_error"); 
    top_note.setAttribute("style", "display: none")
  }

  function summary(){
   let price =JSON.parse(localStorage.getItem("kaplanPrice"));
   console.log('user:', price)
   let scheme_plan = document.getElementById("kascheme_plan");
   let scheme_price = document.getElementById("kascheme_price");
   let plan_sub_total = document.getElementById("kaplan_sub_total");
   let plan_total = document.getElementById("kaplan_total");
      
   if(price[0] == "1499"){
      scheme_plan.innerText = "Individual Standard";
      scheme_price.innerText = "₹ 1,499";
      plan_sub_total.innerText = "₹ 1,499";
      plan_total.innerText = "₹ 1,499";
   }else if(price[0] == "12299"){
      scheme_plan.innerText = "Individual Standard";
      scheme_price.innerText = "₹ 12,299";
      plan_sub_total.innerText = "₹ 12,299";
      plan_total.innerText = "₹ 12,299";
   }else if(price[0] == "18399"){
      scheme_plan.innerText = "Individual Premium";
      scheme_price.innerText = "₹ 18,399";
      plan_sub_total.innerText = "₹ 18,399";
      plan_total.innerText = "₹ 18,399";
   }else if(price[0] == "2299"){
      scheme_plan.innerText = "Individual Premium";
      scheme_price.innerText = "₹ 2,299";
      plan_sub_total.innerText = "₹ 2,299";
      plan_total.innerText = "₹ 2,299";
   }
  }
  summary();
 