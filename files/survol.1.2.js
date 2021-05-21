$(document).ready(function(){
	var debug = false;
	var InsertImage = true;
	CSSColonneImpaire = 'grid-row-style2'
	CSSColonnePaire= 'grid-row-style1'
	$(".table1").attr("align","center")
	$(".table5 tr").attr("align","center")

	$(".table1>tbody>tr:not(:odd)").addClass(CSSColonneImpaire)
	$(".table1>tbody>tr:odd").addClass(CSSColonnePaire)
	$(".table2>tbody>tr:not(:odd)").addClass(CSSColonneImpaire)
	$(".table2>tbody>tr:odd").addClass(CSSColonnePaire)
	$(".table4>tbody>tr:not(:odd)").addClass(CSSColonneImpaire)
	$(".table4>tbody>tr:odd").addClass(CSSColonnePaire)
	$(".table5>tbody>tr:not(:odd)").addClass(CSSColonneImpaire)
	$(".table5>tbody>tr:odd").addClass(CSSColonnePaire)

	$(".tableau_new>tbody>tr:not(:odd)").addClass(CSSColonneImpaire)
	$(".tableau_new>tbody>tr:odd").addClass(CSSColonnePaire)

	CSSSurcol = 'ClassSurvol'

	$(".table1 tr,.table3 tr,.table5 tr,.tableau_new tr").hover(function(){
	   $(this).addClass(CSSSurcol);
	},function(){
	   $(this).removeClass(CSSSurcol);
	});	
})