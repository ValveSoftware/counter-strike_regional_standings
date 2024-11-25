### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Leomonster, MTGG, zede<br />
Global Rank: [190](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_25.md)<br />
Regional Rank: [52]( ../../standings_americas_2024_11_25.md)<br />
<br />
Final Rank Value:  643.0<br />
<br />
Final Rank Value (643.0) = Starting Rank Value (641.6) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.6
- 400 + ( ( 0.121 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 641.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3535 | 2024-07-25 | Sharks        | L   | 0.383      | -            | -                | -                | -         |    -1.15 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           16 |     3610 | 2024-07-23 | Galorys       | L   | 0.370      | -            | -                | -                | -         |    -4.34 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           15 |     3645 | 2024-07-22 | paiN Academy  | W   | 0.362      | 0.143        | 0.000 (0.000)    | 0.109 (0.006)    | 0 (0.000) |     2.31 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           14 |     3654 | 2024-07-22 | ODDIK         | L   | 0.361      | -            | -                | -                | -         |    -1.10 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           13 |     3680 | 2024-07-21 | FURIA Academy | W   | 0.354      | 0.371        | 0.000 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     3.40 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           12 |     3713 | 2024-07-20 | KRÜ           | L   | 0.348      | -            | -                | -                | -         |    -2.79 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           11 |     3835 | 2024-07-17 | Hawks         | W   | 0.330      | 0.371        | 0.003 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     5.51 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           10 |     3902 | 2024-07-16 | Vikings KR    | L   | 0.323      | -            | -                | -                | -         |    -3.86 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|            9 |     4050 | 2024-07-10 | ODDIK         | L   | 0.282      | -            | -                | -                | -         |    -0.93 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            8 |     4071 | 2024-07-09 | Solid         | L   | 0.275      | -            | -                | -                | -         |    -1.67 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            7 |     4089 | 2024-07-08 | Sharks        | L   | 0.269      | -            | -                | -                | -         |    -0.75 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            6 |     4112 | 2024-07-06 | 9z Academy    | W   | 0.256      | 0.333        | 0.000 (0.000)    | 0.126 (0.011)    | 0 (0.000) |     2.63 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            5 |     4255 | 2024-06-14 | inSanitY      | L   | 0.108      | -            | -                | -                | -         |    -0.85 | CutzMeretz, desh, Leomonster, roz, zede |
|            4 |     4419 | 2024-06-09 | Vikings KR    | W   | 0.074      | 0.450        | 0.013 (0.000)    | 0.336 (0.011)    | 0 (0.000) |     1.43 | CutzMeretz, desh, Leomonster, roz, zede |
|            3 |     4485 | 2024-06-08 | Sharks        | W   | 0.068      | 0.450        | 0.069 (0.002)    | 0.454 (0.014)    | 0 (0.000) |     1.96 | CutzMeretz, desh, Leomonster, roz, zede |
|            2 |     4515 | 2024-06-07 | paiN          | L   | 0.063      | -            | -                | -                | -         |    -0.01 | CutzMeretz, desh, Leomonster, roz, zede |
|            1 |     4591 | 2024-06-06 | ODDIK         | W   | 0.055      | 0.450        | 0.097 (0.002)    | 0.500 (0.012)    | 0 (0.000) |     1.55 | CutzMeretz, desh, Leomonster, roz, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($305.95)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
