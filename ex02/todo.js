var i = 0;
function new_str()
{
	var ft_list = document.getElementById('ft_list')
	var str = prompt('What\'s the new To do ?');
	if (str !== "" && str != null)
		add_one(str);
}

function add_one(str)
{
	var new_div = document.createElement('div');
	var new_text = document.createTextNode(str);

	new_div.setAttribute('id', i)
	new_div.setAttribute('onclick', 'del_str(id)')
	new_div.appendChild(new_text);
	ft_list.insertBefore(new_div, ft_list.firstChild);
	set_cookie(i, str, 1);
	i++;
}

function del_str(del_id)
{
	var ft_list = document.getElementById('ft_list')
	var to_del = document.getElementById(del_id);

	ft_list.removeChild(to_del);
	document.cookie = del_id + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function set_cookie(id, new_text, exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = id + "=" + new_text + "; " +expires;
}

function get_cookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');

	for(var i=0; i<ca.length; i++) 
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0)
			return c.substring(name.length,c.length);
	}
	return "";
}

function init()
{
	var all = document.cookie.split(';');

	for (var x in all)
	{
		var id = all[x].split('=')[0];
		if (!isNaN(parseInt(id)))
		{
			var text = all[x].split('=')[1];

			add_one(text);
		}
	}
}
