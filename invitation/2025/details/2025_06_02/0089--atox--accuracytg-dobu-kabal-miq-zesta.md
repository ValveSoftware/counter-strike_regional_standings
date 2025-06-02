### Roster Details<br />
Team Name: ATOX<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [89](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  847.0<br />
<br />
Final Rank Value (847.0) = Starting Rank Value (727.2) + Head To Head Adjustments (119.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.2
- 400 + ( ( 0.178 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 727.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2485 | 2025-02-27 | HOTU              | W   | 0.570      | 0.143        | 0.042 (0.003)    | -                | 0 (0.000) |    12.54 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           20 |     2490 | 2025-02-27 | Eruption          | W   | 0.569      | 0.143        | 0.018 (0.001)    | 0.266 (0.022)    | 0 (0.000) |    11.66 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           19 |     2547 | 2025-02-25 | The Huns          | W   | 0.561      | 0.143        | 0.062 (0.005)    | 0.476 (0.038)    | 0 (0.000) |    14.56 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           18 |     2586 | 2025-02-24 | Gods Reign        | W   | 0.554      | 0.143        | -                | 0.274 (0.022)    | 0 (0.000) |     7.38 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           17 |     2614 | 2025-02-23 | HOTU              | L   | 0.548      | -            | -                | -                | -         |    -4.58 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           16 |     2900 | 2025-02-13 | The Huns          | W   | 0.476      | 0.143        | 0.062 (0.004)    | 0.476 (0.032)    | 0 (0.000) |    12.69 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           15 |     2905 | 2025-02-12 | Rare Atom         | W   | 0.475      | 0.143        | 0.074 (0.005)    | 0.703 (0.048)    | 0 (0.000) |    13.94 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           14 |     2918 | 2025-02-12 | Lynn Vision       | L   | 0.471      | -            | -                | -                | -         |    -1.67 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           13 |     2940 | 2025-02-11 | The Huns          | W   | 0.465      | 0.143        | 0.062 (0.004)    | 0.476 (0.032)    | -         |    12.64 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           12 |     2950 | 2025-02-11 | TYLOO             | W   | 0.463      | 0.143        | 0.267 (0.018)    | 0.668 (0.044)    | -         |    14.15 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           11 |     2953 | 2025-02-10 | Rooster           | W   | 0.462      | -            | -                | -                | -         |     8.71 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |     3544 | 2024-12-29 | Eruption          | W   | 0.169      | -            | -                | -                | 1 (0.169) |     3.96 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |     3545 | 2024-12-28 | Rare Atom         | W   | 0.168      | 0.384        | 0.074 (0.005)    | 0.703 (0.046)    | 1 (0.168) |     5.06 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |     3551 | 2024-12-28 | The Huns          | W   | 0.163      | 0.384        | 0.062 (0.004)    | 0.476 (0.030)    | 1 (0.163) |     4.54 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |     3552 | 2024-12-28 | Chinggis Warriors | W   | 0.162      | 0.384        | 0.050 (0.003)    | 0.691 (0.043)    | 1 (0.162) |     4.80 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |     3559 | 2024-12-27 | Eruption          | L   | 0.156      | -            | -                | -                | -         |    -1.22 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |     3841 | 2024-12-06 | Chinggis Warriors | W   | 0.017      | -            | -                | -                | -         |     0.52 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |     3849 | 2024-12-06 | CatEvil           | W   | 0.016      | -            | -                | -                | -         |     0.07 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |     3901 | 2024-12-04 | Just Swing        | W   | 0.003      | -            | -                | -                | -         |     0.05 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |     3903 | 2024-12-04 | NomadS            | W   | 0.002      | -            | -                | -                | -         |     0.06 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |     3906 | 2024-12-03 | IHC               | L   | 0.001      | -            | -                | -                | -         |    -0.03 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,248.52)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.169 | $12,500.00     | $2,117.69       |
| 2024-12-06 |      0.017 | $7,500.00      | $130.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
