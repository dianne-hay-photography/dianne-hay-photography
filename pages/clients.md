---
layout: default
title: Client Sign In
permalink: /clients
section: clients
---

<section>
	<article>
		<h1><span>&raquo;</span> {{ page.title }}</h1>
		<div align="center" style="margin-top:50px;width:280px;">
			<form action="/clients" name="login" method="post">
				<input type="hidden" name="action" value="signin">
				<table border="0" cellpadding="3" cellspacing="0" width="280">
				<tr>
					<td width="126" align="right">Username:</td>
					<td><input type="text" name="username" value=""></td>
				</tr>
				<tr>
					<td width="154" align="right">Password:</td>
					<td><input type="password" name="password" value=""></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td><input type="submit" name="Submit" value="Sign In"></td>
				</tr>
				</table>
			</form>
		</div>
	</article>
</section>
