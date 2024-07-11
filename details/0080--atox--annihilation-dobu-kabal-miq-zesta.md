### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  978.7<br />
<br />
Final Rank Value (978.7) = Starting Rank Value (951.6) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.398[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.271[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.6
- 400 + ( ( 0.262 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 951.6


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
|           26 |      386 | 2024-06-09 | Lynn Vision | L   | 0.986      | -            | -                | -                | -         |    -9.41 | Annihilation, dobu, kabal, MiQ, Zesta |
|           25 |      579 | 2024-06-06 | Lynn Vision | W   | 0.966      | 0.416        | 0.127 (0.051)    | 0.221 (0.089)    | 0 (0.000) |    21.47 | Annihilation, dobu, kabal, MiQ, Zesta |
|           24 |      642 | 2024-06-05 | GR          | W   | 0.959      | 0.416        | 0.012 (0.005)    | 0.078 (0.031)    | 0 (0.000) |     5.34 | Annihilation, dobu, kabal, MiQ, Zesta |
|           23 |      683 | 2024-06-04 | -72c        | W   | 0.952      | 0.416        | 0.005 (0.002)    | -                | 0 (0.000) |     2.86 | Annihilation, dobu, kabal, MiQ, Zesta |
|           22 |      771 | 2024-05-31 | Lynn Vision | L   | 0.930      | -            | -                | -                | -         |    -8.02 | Annihilation, dobu, kabal, MiQ, Zesta |
|           21 |      824 | 2024-05-29 | BLEED       | L   | 0.917      | -            | -                | -                | -         |    -4.23 | Annihilation, dobu, kabal, MiQ, Zesta |
|           20 |      847 | 2024-05-29 | OG          | W   | 0.911      | 0.500        | 0.215 (0.098)    | 0.196 (0.089)    | 1 (0.911) |    22.81 | Annihilation, dobu, kabal, MiQ, Zesta |
|           19 |     1139 | 2024-05-18 | The MongolZ | L   | 0.838      | -            | -                | -                | -         |    -0.13 | Annihilation, dobu, kabal, MiQ, Zesta |
|           18 |     1170 | 2024-05-17 | The Huns    | W   | 0.831      | 0.143        | 0.000 (0.000)    | 0.024 (0.003)    | 1 (0.831) |     1.85 | Annihilation, dobu, kabal, MiQ, Zesta |
|           17 |     2403 | 2024-04-02 | The MongolZ | L   | 0.532      | -            | -                | -                | -         |    -0.07 | Annihilation, dobu, kabal, MiQ, Zesta |
|           16 |     2409 | 2024-04-02 | Lynn Vision | L   | 0.531      | -            | -                | -                | -         |    -4.07 | Annihilation, dobu, kabal, MiQ, Zesta |
|           15 |     2765 | 2024-03-13 | -72c        | W   | 0.399      | 0.143        | -                | 0.016 (0.001)    | 0 (0.000) |     0.56 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           14 |     2776 | 2024-03-13 | ROUX        | W   | 0.398      | -            | -                | -                | 0 (0.000) |     0.55 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           13 |     3097 | 2024-02-27 | FlyQuest    | L   | 0.304      | -            | -                | -                | -         |    -0.98 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           12 |     3121 | 2024-02-27 | TYLOO       | W   | 0.297      | 0.143        | 0.002 (0.000)    | 0.044 (0.002)    | 1 (0.297) |     1.96 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           11 |     3124 | 2024-02-26 | MAG         | W   | 0.296      | 0.143        | -                | 0.034 (0.001)    | 1 (0.296) |     0.73 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     3139 | 2024-02-25 | FlyQuest    | L   | 0.289      | -            | -                | -                | -         |    -0.93 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     3641 | 2024-02-02 | GR          | L   | 0.131      | -            | -                | -                | -         |    -3.32 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     3688 | 2024-01-31 | NKT         | W   | 0.118      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     0.63 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     3689 | 2024-01-31 | Rare Atom   | W   | 0.118      | 0.143        | 0.007 (0.000)    | 0.030 (0.001)    | -         |     0.67 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3813 | 2024-01-23 | The Huns    | L   | 0.065      | -            | -                | -                | -         |    -1.89 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3840 | 2024-01-22 | Rare Atom   | W   | 0.059      | 0.143        | 0.007 (0.000)    | 0.030 (0.000)    | -         |     0.34 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3866 | 2024-01-21 | The Huns    | W   | 0.052      | -            | -                | -                | -         |     0.12 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3874 | 2024-01-21 | The MongolZ | L   | 0.051      | -            | -                | -                | -         |    -0.01 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3966 | 2024-01-19 | GR          | W   | 0.038      | 0.143        | 0.012 (0.000)    | 0.078 (0.000)    | -         |     0.24 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     3975 | 2024-01-19 | Fort Arena  | W   | 0.037      | -            | -                | -                | -         |     0.05 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,886.72)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
