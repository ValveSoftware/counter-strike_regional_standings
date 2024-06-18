### Roster Details<br />
Team Name: MAG<br />
Roster: ariucle, Derek, lan, Tugu, WasteOfAmmo<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [199](../standings_global.md)<br />
Regional Rank: [25]( ../standings_asia.md)<br />
Final Rank Value:  523.0<br />
<br />
Final Rank Value (523.0) = Starting Rank Value (500.3) + Head To Head Adjustments (22.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.3
- 400 + ( ( 0.049 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 500.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2991 | 2024-02-26 | ATOX           | L   | 0.452      | -            | -                | -                | -         |    -1.24 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           14 |     3007 | 2024-02-25 | The MongolZ    | L   | 0.445      | -            | -                | -                | -         |    -0.01 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           13 |     3214 | 2024-02-17 | Newhappy       | L   | 0.387      | -            | -                | -                | -         |    -5.94 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           12 |     3240 | 2024-02-16 | GR             | W   | 0.381      | 0.143        | 0.011 (0.001)    | 0.119 (0.006)    | 0 (0.000) |     8.44 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           11 |     3246 | 2024-02-16 | Lynn Vision    | L   | 0.380      | -            | -                | -                | -         |    -0.31 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           10 |     3271 | 2024-02-15 | SEAW           | W   | 0.374      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     5.47 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            9 |     3307 | 2024-02-14 | -72c           | W   | 0.368      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     3.98 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            8 |     3728 | 2024-01-21 | Trouble makers | L   | 0.209      | -            | -                | -                | -         |    -3.47 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            7 |     3744 | 2024-01-20 | Gods Reign     | W   | 0.206      | 0.143        | 0.003 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     4.57 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            6 |     3830 | 2024-01-19 | Dewa United    | W   | 0.194      | 0.143        | 0.003 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     3.38 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            5 |     3845 | 2024-01-19 | Drippy Lab     | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     2.18 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            4 |     3931 | 2024-01-17 | Gods Reign     | L   | 0.182      | -            | -                | -                | -         |    -1.68 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            3 |     3939 | 2024-01-17 | Dewa United    | W   | 0.181      | 0.143        | 0.003 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     3.17 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            2 |     3941 | 2024-01-17 | RESILIENCE     | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     2.07 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            1 |     3946 | 2024-01-17 | Enigma         | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.06 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
