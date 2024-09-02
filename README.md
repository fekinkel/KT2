# KT2
Created with CodeSandbox
set @exec = 'exec master..xp_cmdshell '+char(39)+'bcp "select line from ##pref " queryout "'+@path+'\'+@arq+'" -c -U sa -P mdl1680'+CHAR(39)
