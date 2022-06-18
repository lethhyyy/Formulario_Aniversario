var dia_a, mes_a , ano_a;

function VerificarDia()
{
    dia_a=document.getElementById("dia").value;

    if(isNaN(dia_a))
    {
        alert("Digitar apenas números!");
        document.getElementById("dia").value="";
        document.getElementById("dia").focus();
    }

    else
    {
        if(dia_a=="")
        {
            alert("Digite os numeros");
        }

        dia_a=parseInt(dia_a);

        if((dia_a<1)||(dia_a>31))
        {
            alert("digite números de 1 ate 31");
            document.getElementById("dia").value="";
            document.getElementById("dia").focus();
        }
    }
}

function VerificarMes()
{
    mes_a=document.getElementById("mes").value;

    if(isNaN(mes_a))
    {
        alert("Digitar apenas numeros");
        document.getElementById("mes").value="";
        document.getElementById("mes").focus();
    }

    else
    {
        if(mes_a=="")
        {
            alert("Digite apenas numeros");
			document.getElementById("mes").focus();
        }

        mes_a=parseInt(mes_a);

        if((mes_a<1)||(mes_a>12))
        {
            alert("Digite apenas números validos.");
            document.getElementById("mes").value="";
            document.getElementById("mes").focus();
        }
    }
}

function VerificarAno()
{
    ano_a=document.getElementById("ano").value;
				
    if(isNaN(ano_a))
    {
        alert("Você não digitou somente números.");
        document.getElementById("ano").value="";
        document.getElementbyId("ano").focus();
    }
				
	else if(ano_a=="")
	{
		alert("Por favor, digite números validos.");
        document.getElementById("ano").focus();
	}
				
	else if(ano_a.length !=4)
    {
        alert("Por favor, digite números validos.");
        document.getElementById("ano").value="";
        document.getElementById("ano").focus();
    }

	else
	    ano_a=parseInt(ano_a);
}
            
function Limpar()
{
	document.getElementById("dia").focus();
}
    
function Exibir()
{
    var hoje = new Date();
    
    var d_hoje = hoje.getDate();
    
    var m_hoje = hoje.getMonth() + 1;
    
    var a_hoje = hoje.getFullYear();
    
    var idade = a_hoje - ano_a; //ano completo
    
    if (mes_a > m_hoje) 
    idade = idade -1;
    
    else if ((mes_a == m_hoje) && (dia_a > d_hoje))
    idade = idade -1;
    
    document.getElementById("idade").value = idade;
    
	hoje.setDate(dia_a);
    hoje.setMonth(mes_a-1);
    hoje.setFullYear(ano_a);

    var semana = new Array();

    semana[0]="Domingo";
    semana[1]="Segunda";
    semana[2]="Terça";
    semana[3]="Quarta";
    semana[4]="Quinta";
    semana[5]="Sexta";
    semana[6]="Sábado";

    document.getElementById("diasem").value=semana[hoje.getDay()];

        if (((dia_a>=20) && (mes_a==1)) || ((dia_a <=18) && (mes_a ==2)))
		    document.getElementById("signo").value="Aquário";
	        
		else if (((dia_a>=19) && (mes_a==2)) || ((dia_a <=20) && (mes_a ==3)))
			document.getElementById("signo").value="Peixes";
				
		else if (((dia_a>=21) && (mes_a==3)) || ((dia_a <=19) && (mes_a ==4)))
			document.getElementById("signo").value="Áries";
		
		else if(((dia_a>=20) && (mes_a==4)) || ((dia_a <=20) && (mes_a ==5)))
			document.getElementById("signo").value="Touro";
				
		else if(((dia_a>=21) && (mes_a==5)) || ((dia_a <=20) && (mes_a ==6)))
			document.getElementById("signo").value="Gêmeos";
				
		else if (((dia_a>=21) && (mes_a==6)) || ((dia_a <=22) && (mes_a ==7)))
			document.getElementById("signo").value="Câncer";
				
		else if (((dia_a>=23) && (mes_a==7)) || ((dia_a <=22) && (mes_a ==8)))
			document.getElementById("signo").value="Leão";
				
		else if (((dia_a>=23) && (mes_a==8)) || ((dia_a<=22) && (mes_a ==9)))
			document.getElementById("signo").value="Virgem";
				
		else if (((dia_a>=23) && (mes_a=9)) || ((dia_a <=22) && (mes_a ==10)))
			document.getElementById("signo").value="Libra";
				
		else if (((dia_a>=23) && (mes_a==10)) || ((dia_a <=21) && (mes_a ==11)))
			document.getElementById("signo").value="Escorpião";
				
		else if (((dia_a>=22) && (mes_a==11)) || ((dia_a <=21) && (mes_a ==12)))
			document.getElementById("signo").value="Sagitário";
				
		else 
			document.getElementById("signo").value="Capricórnio";
}