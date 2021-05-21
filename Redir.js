
    console.log('im h3ere')
    function Redir() {
      //Global
      if (document.filtre.elements[0].options[document.filtre.elements[0].selectedIndex].value=='1')
        window.location.replace("SuiviInclusion_global.asp")
      //Repartition Inv/Centre
      if (document.filtre.elements[0].options[document.filtre.elements[0].selectedIndex].value=='2')
        window.location.replace("SuiviInclusion_Repartition.asp?p=2&type=g")
  
      //Repartition bras
      if (document.filtre.elements[0].options[document.filtre.elements[0].selectedIndex].value=='3')
        window.location.replace("SuiviInclusion_Repartition.asp?p=2&type=b")
  
      //Repartition strate
      if (document.filtre.elements[0].options[document.filtre.elements[0].selectedIndex].value=='4')
        window.location.replace("SuiviInclusion_Repartition.asp?p=2&type=s")
  
      //Repartition Pays
      if (document.filtre.elements[0].options[document.filtre.elements[0].selectedIndex].value=='6')
        window.location.replace("SuiviInclusion_RepartitionPays.asp?r=1&p=2&type=s")
  
      //Courbe inclusion
      if (document.filtre.elements[0].options[document.filtre.elements[0].selectedIndex].value=='5')
        window.location.replace("SuiviInclusionCourbe.asp?p=3")
      }