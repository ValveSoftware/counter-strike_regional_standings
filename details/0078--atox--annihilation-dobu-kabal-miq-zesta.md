### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  974.1<br />
<br />
Final Rank Value (974.1) = Starting Rank Value (949.5) + Head To Head Adjustments (24.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.398[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.253[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 949.5
- 400 + ( ( 0.256 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 949.5


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
|           24 |      550 | 2024-06-09 | Lynn Vision | L   | 0.946      | -            | -                | -                | -         |    -9.66 | Annihilation, dobu, kabal, MiQ, Zesta |
|           23 |      743 | 2024-06-06 | Lynn Vision | W   | 0.926      | 0.416        | 0.126 (0.048)    | 0.212 (0.082)    | 0 (0.000) |    20.02 | Annihilation, dobu, kabal, MiQ, Zesta |
|           22 |      806 | 2024-06-05 | GR          | W   | 0.919      | 0.416        | 0.012 (0.005)    | 0.065 (0.025)    | 0 (0.000) |     5.38 | Annihilation, dobu, kabal, MiQ, Zesta |
|           21 |      847 | 2024-06-04 | -72c        | W   | 0.913      | 0.416        | 0.005 (0.002)    | -                | 0 (0.000) |     2.83 | Annihilation, dobu, kabal, MiQ, Zesta |
|           20 |      935 | 2024-05-31 | Lynn Vision | L   | 0.890      | -            | -                | -                | -         |    -8.25 | Annihilation, dobu, kabal, MiQ, Zesta |
|           19 |      988 | 2024-05-29 | BLEED       | L   | 0.877      | -            | -                | -                | -         |    -5.09 | Annihilation, dobu, kabal, MiQ, Zesta |
|           18 |     1011 | 2024-05-29 | OG          | W   | 0.871      | 0.500        | 0.210 (0.092)    | 0.178 (0.078)    | 1 (0.871) |    21.30 | Annihilation, dobu, kabal, MiQ, Zesta |
|           17 |     1303 | 2024-05-18 | The MongolZ | L   | 0.798      | -            | -                | -                | -         |    -0.12 | Annihilation, dobu, kabal, MiQ, Zesta |
|           16 |     1334 | 2024-05-17 | The Huns    | W   | 0.792      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.792) |     1.69 | Annihilation, dobu, kabal, MiQ, Zesta |
|           15 |     2567 | 2024-04-02 | The MongolZ | L   | 0.493      | -            | -                | -                | -         |    -0.07 | Annihilation, dobu, kabal, MiQ, Zesta |
|           14 |     2573 | 2024-04-02 | Lynn Vision | L   | 0.492      | -            | -                | -                | -         |    -4.15 | Annihilation, dobu, kabal, MiQ, Zesta |
|           13 |     2929 | 2024-03-13 | -72c        | W   | 0.359      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     0.51 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           12 |     2940 | 2024-03-13 | ROUX        | W   | 0.358      | -            | -                | -                | 0 (0.000) |     0.50 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           11 |     3261 | 2024-02-27 | FlyQuest    | L   | 0.264      | -            | -                | -                | -         |    -0.90 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     3285 | 2024-02-27 | TYLOO       | W   | 0.258      | 0.143        | 0.032 (0.001)    | 0.141 (0.005)    | 1 (0.258) |     2.84 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     3288 | 2024-02-26 | MAG         | W   | 0.256      | 0.143        | -                | 0.023 (0.001)    | 1 (0.256) |     0.62 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     3303 | 2024-02-25 | FlyQuest    | L   | 0.250      | -            | -                | -                | -         |    -0.84 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     3805 | 2024-02-02 | GR          | L   | 0.091      | -            | -                | -                | -         |    -2.29 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3852 | 2024-01-31 | NKT         | W   | 0.079      | 0.143        | 0.001 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.40 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3853 | 2024-01-31 | Rare Atom   | W   | 0.078      | 0.143        | 0.007 (0.000)    | 0.017 (0.000)    | -         |     0.46 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3977 | 2024-01-23 | The Huns    | L   | 0.025      | -            | -                | -                | -         |    -0.73 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     4004 | 2024-01-22 | Rare Atom   | W   | 0.019      | 0.143        | 0.007 (0.000)    | 0.017 (0.000)    | -         |     0.11 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     4030 | 2024-01-21 | The Huns    | W   | 0.013      | -            | -                | -                | -         |     0.03 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     4038 | 2024-01-21 | The MongolZ | L   | 0.011      | -            | -                | -                | -         |    -0.00 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,569.84)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
