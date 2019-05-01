<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="WebpackExample.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    
    <h2><%: Title %>.</h2>
    <div id="logo"></div>
    <h3>Your application description page.</h3>
    <p>Use this area to provide additional information.</p>
    <script type="text/javascript" src="dist/About.aspx.js"></script>
</asp:Content>
