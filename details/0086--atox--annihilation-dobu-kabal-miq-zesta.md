### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  917.9<br />
<br />
Final Rank Value (917.9) = Starting Rank Value (894.4) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.235[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 894.4
- 400 + ( ( 0.244 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 894.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      838 | 2024-06-09 | Lynn Vision | L   | 0.899      | -            | -                | -                | -         |    -9.87 | Annihilation, dobu, kabal, MiQ, Zesta |
|           19 |     1031 | 2024-06-06 | Lynn Vision | W   | 0.879      | 0.416        | 0.103 (0.037)    | 0.187 (0.068)    | 0 (0.000) |    18.29 | Annihilation, dobu, kabal, MiQ, Zesta |
|           18 |     1094 | 2024-06-05 | GR          | W   | 0.872      | 0.416        | 0.010 (0.004)    | 0.051 (0.019)    | 0 (0.000) |     5.86 | Annihilation, dobu, kabal, MiQ, Zesta |
|           17 |     1135 | 2024-06-04 | -72c        | W   | 0.865      | 0.416        | 0.004 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     3.31 | Annihilation, dobu, kabal, MiQ, Zesta |
|           16 |     1223 | 2024-05-31 | Lynn Vision | L   | 0.843      | -            | -                | -                | -         |    -8.57 | Annihilation, dobu, kabal, MiQ, Zesta |
|           15 |     1276 | 2024-05-29 | BLEED       | L   | 0.830      | -            | -                | -                | -         |    -3.59 | Annihilation, dobu, kabal, MiQ, Zesta |
|           14 |     1299 | 2024-05-29 | OG          | W   | 0.824      | 0.500        | 0.170 (0.070)    | 0.158 (0.065)    | 1 (0.824) |    19.32 | Annihilation, dobu, kabal, MiQ, Zesta |
|           13 |     1591 | 2024-05-18 | The MongolZ | L   | 0.751      | -            | -                | -                | -         |    -0.11 | Annihilation, dobu, kabal, MiQ, Zesta |
|           12 |     1622 | 2024-05-17 | The Huns    | W   | 0.745      | 0.143        | 0.000 (0.000)    | 0.005 (0.001)    | 1 (0.745) |     1.32 | Annihilation, dobu, kabal, MiQ, Zesta |
|           11 |     2855 | 2024-04-02 | The MongolZ | L   | 0.445      | -            | -                | -                | -         |    -0.06 | Annihilation, dobu, kabal, MiQ, Zesta |
|           10 |     2861 | 2024-04-02 | Lynn Vision | L   | 0.444      | -            | -                | -                | -         |    -4.23 | Annihilation, dobu, kabal, MiQ, Zesta |
|            9 |     3217 | 2024-03-13 | -72c        | W   | 0.312      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     0.59 | dobu, FlyNN, kabal, MiQ, Zesta        |
|            8 |     3228 | 2024-03-13 | ROUX        | W   | 0.311      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.58 | dobu, FlyNN, kabal, MiQ, Zesta        |
|            7 |     3549 | 2024-02-27 | FlyQuest    | L   | 0.217      | -            | -                | -                | -         |    -0.86 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3573 | 2024-02-27 | TYLOO       | W   | 0.210      | 0.143        | 0.026 (0.001)    | 0.116 (0.003)    | 1 (0.210) |     2.33 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3576 | 2024-02-26 | MAG         | W   | 0.209      | 0.143        | -                | 0.016 (0.000)    | 1 (0.209) |     0.63 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3591 | 2024-02-25 | FlyQuest    | L   | 0.202      | -            | -                | -                | -         |    -0.80 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     4093 | 2024-02-02 | GR          | L   | 0.044      | -            | -                | -                | -         |    -1.07 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     4140 | 2024-01-31 | NKT         | W   | 0.031      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.16 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     4141 | 2024-01-31 | Rare Atom   | W   | 0.031      | 0.143        | 0.005 (0.000)    | 0.006 (0.000)    | -         |     0.20 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,192.04)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
