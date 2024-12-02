### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Leomonster, MTGG, zede<br />
Global Rank: [196](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [57]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  623.1<br />
<br />
Final Rank Value (623.1) = Starting Rank Value (622.5) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 622.5
- 400 + ( ( 0.111 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 622.5


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
|           17 |     3668 | 2024-07-25 | Sharks        | L   | 0.336      | -            | -                | -                | -         |    -0.90 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           16 |     3743 | 2024-07-23 | Galorys       | L   | 0.322      | -            | -                | -                | -         |    -3.54 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           15 |     3778 | 2024-07-22 | paiN Academy  | W   | 0.315      | 0.143        | 0.000 (0.000)    | 0.113 (0.005)    | 0 (0.000) |     2.20 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           14 |     3787 | 2024-07-22 | ODDIK         | L   | 0.313      | -            | -                | -                | -         |    -0.86 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           13 |     3813 | 2024-07-21 | FURIA Academy | W   | 0.307      | 0.371        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     3.17 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           12 |     3846 | 2024-07-20 | KRÜ           | L   | 0.300      | -            | -                | -                | -         |    -2.18 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           11 |     3968 | 2024-07-17 | Hawks         | W   | 0.283      | 0.371        | 0.003 (0.000)    | 0.017 (0.002)    | 0 (0.000) |     4.96 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|           10 |     4035 | 2024-07-16 | Vikings KR    | L   | 0.276      | -            | -                | -                | -         |    -3.04 | CSO, CutzMeretz, Leomonster, MTGG, zede |
|            9 |     4183 | 2024-07-10 | ODDIK         | L   | 0.235      | -            | -                | -                | -         |    -0.68 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            8 |     4204 | 2024-07-09 | Solid         | L   | 0.228      | -            | -                | -                | -         |    -1.17 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            7 |     4222 | 2024-07-08 | Sharks        | L   | 0.222      | -            | -                | -                | -         |    -0.55 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            6 |     4245 | 2024-07-06 | 9z Academy    | W   | 0.208      | 0.333        | 0.000 (0.000)    | 0.131 (0.009)    | 0 (0.000) |     2.33 | bsd, CSO, CutzMeretz, Leomonster, zede  |
|            5 |     4388 | 2024-06-14 | inSanitY      | L   | 0.061      | -            | -                | -                | -         |    -0.44 | CutzMeretz, desh, Leomonster, roz, zede |
|            4 |     4552 | 2024-06-09 | Vikings KR    | W   | 0.027      | 0.450        | 0.014 (0.000)    | 0.332 (0.004)    | 0 (0.000) |     0.54 | CutzMeretz, desh, Leomonster, roz, zede |
|            3 |     4618 | 2024-06-08 | Sharks        | W   | 0.020      | 0.450        | 0.074 (0.001)    | 0.523 (0.005)    | 0 (0.000) |     0.59 | CutzMeretz, desh, Leomonster, roz, zede |
|            2 |     4648 | 2024-06-07 | paiN          | L   | 0.016      | -            | -                | -                | -         |    -0.00 | CutzMeretz, desh, Leomonster, roz, zede |
|            1 |     4724 | 2024-06-06 | ODDIK         | W   | 0.008      | 0.450        | 0.105 (0.000)    | 0.541 (0.002)    | 0 (0.000) |     0.22 | CutzMeretz, desh, Leomonster, roz, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($187.46)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
